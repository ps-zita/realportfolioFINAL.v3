// Update spotlight (cursor light) position on mousemove.
window.addEventListener("mousemove", (e) => {
  const cursorLight = document.getElementById("cursor-light");
  if (cursorLight) {
    cursorLight.style.left = `${e.clientX}px`;
    cursorLight.style.top = `${e.clientY}px`;
  }
});

// Run after DOM content is loaded.
document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const isMobile = window.innerWidth <= 768;
  
  // Randomized Greeting: either Uzbek or Arabic.
  const greetingContainer = document.getElementById("greeting-container");
  if (greetingContainer) {
    const random = Math.random();
    if (random < 0.5) {
      // Uzbek greeting with tooltip.
      greetingContainer.innerHTML =
        '<span class="greeting uzbek" data-tooltip="&quot;welcome&quot; in uzbeki">Xush kelibsiz!</span>';
    } else {
      // Arabic greeting with tooltip.
      greetingContainer.innerHTML =
        '<span class="greeting arabic" data-tooltip="greeting in arabic">ٱلسَّلَامُ عَلَيْكُمْ</span>';
    }
  }
  
  /* ------------------ Card Click Event Listeners ------------------ */
  if (isMobile) {
    // For mobile mode, clicking on cards (except card-romhack) directly navigates to the respective links.
    const iframeCard = document.getElementById("card-iframe");
    if (iframeCard) {
      iframeCard.addEventListener("click", () => {
        window.open("https://www.siriusblack.cafe/", "_blank");
      });
    }
    const aidinCard = document.getElementById("card-aidin");
    if (aidinCard) {
      aidinCard.addEventListener("click", () => {
        window.open("https://ps-zita.github.io/aidinportfolio/", "_blank");
      });
    }
    const ioCard = document.getElementById("card-io");
    if (ioCard) {
      ioCard.addEventListener("click", () => {
        window.open("https://ps-zita.github.io/iolabsinventory/", "_blank");
      });
    }
    // For the 2i combo trials card, retain modal behavior.
    const romhackCard = document.getElementById("card-romhack");
    if (romhackCard) {
      romhackCard.addEventListener("click", () => {
        mainContent.classList.add("hover-active");
        fadeInImacModal();
      });
    }
    // For .jiji, show the cat popup and disable hover effects.
    const jijiElem = document.querySelector(".jiji");
    const catPopup = document.getElementById("cat-popup");
    if (jijiElem && catPopup) {
      jijiElem.addEventListener("click", (e) => {
        e.stopPropagation();
        catPopup.style.display = "block";
      });
      // Clicking anywhere on the popup dismisses it.
      catPopup.addEventListener("click", () => {
        catPopup.style.display = "none";
      });
    }
  } else {
    // Desktop: attach modal behavior.
    const iframeCard = document.getElementById("card-iframe");
    if (iframeCard) {
      iframeCard.addEventListener("click", () => {
        mainContent.classList.add("hover-active");
        fadeInModal();
      });
    }
    
    const aidinCard = document.getElementById("card-aidin");
    if (aidinCard) {
      aidinCard.addEventListener("click", () => {
        mainContent.classList.add("hover-active");
        fadeInAidinModal();
      });
    }
    
    const romhackCard = document.getElementById("card-romhack");
    if (romhackCard) {
      romhackCard.addEventListener("click", () => {
        mainContent.classList.add("hover-active");
        fadeInImacModal();
      });
    }
    
    const ioCard = document.getElementById("card-io");
    if (ioCard) {
      ioCard.addEventListener("click", () => {
        mainContent.classList.add("hover-active");
        fadeInIOModal();
      });
    }
  }
  
  /* ------------------ Card Hover Effects ------------------ */
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      mainContent.classList.add("hover-active");
      removeHoveredCard();
      card.classList.add("hovering");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovering");
      if (!document.querySelector(".card.hovering")) {
        mainContent.classList.remove("hover-active");
      }
    });
  });
  
  /* ------------------ Modal Functions ------------------ */
  // Modal for Sirius Black Cafe
  const iframeModal = document.getElementById("iframe-modal");
  const modalIframe = document.getElementById("modal-iframe");
  
  const fadeInModal = () => {
    iframeModal.classList.add("show");
    iframeModal.style.opacity = "0";
    modalIframe.style.opacity = "0";
    setTimeout(() => {
      iframeModal.style.opacity = "1";
      modalIframe.style.opacity = "1";
    }, 10);
  };
  
  const fadeOutModal = () => {
    iframeModal.style.opacity = "0";
    modalIframe.style.opacity = "0";
    setTimeout(() => {
      modalIframe.src = modalIframe.src; // Reset iframe source.
      iframeModal.classList.remove("show");
      mainContent.classList.remove("hover-active");
      removeHoveredCard();
      iframeModal.style.opacity = "1";
      modalIframe.style.opacity = "1";
    }, 300);
  };
  
  // Modal for Aidin Murtha Voice Actor
  const aidinModal = document.getElementById("aidin-modal");
  const aidinIframe = document.getElementById("aidin-iframe");
  
  const fadeInAidinModal = () => {
    aidinModal.classList.add("show");
    aidinModal.style.opacity = "0";
    aidinIframe.style.opacity = "0";
    setTimeout(() => {
      aidinModal.style.opacity = "1";
      aidinIframe.style.opacity = "1";
    }, 10);
  };
  
  const fadeOutAidinModal = () => {
    aidinModal.style.opacity = "0";
    aidinIframe.style.opacity = "0";
    setTimeout(() => {
      aidinIframe.src = aidinIframe.src; // Reset iframe source.
      aidinModal.classList.remove("show");
      mainContent.classList.remove("hover-active");
      removeHoveredCard();
      aidinModal.style.opacity = "1";
      aidinIframe.style.opacity = "1";
    }, 300);
  };
  
  // Modal for 2i Combo Trials (Romhack) - card-romhack
  const imacModal = document.getElementById("imac-modal");
  
  const fadeInImacModal = () => {
    imacModal.classList.add("show");
    imacModal.style.opacity = "0";
    setTimeout(() => {
      imacModal.style.opacity = "1";
    }, 10);
  };
  
  const fadeOutImacModal = () => {
    imacModal.style.opacity = "0";
    setTimeout(() => {
      imacModal.classList.remove("show");
      mainContent.classList.remove("hover-active");
    }, 300);
  };
  
  // Modal for IOLabs Inventory
  const ioModal = document.getElementById("io-modal");
  const ioIframe = document.getElementById("io-iframe");
  
  const fadeInIOModal = () => {
    ioModal.classList.add("show");
    ioModal.style.opacity = "0";
    ioIframe.style.opacity = "0";
    setTimeout(() => {
      ioModal.style.opacity = "1";
      ioIframe.style.opacity = "1";
    }, 10);
  };
  
  const fadeOutIOModal = () => {
    ioModal.style.opacity = "0";
    ioIframe.style.opacity = "0";
    setTimeout(() => {
      ioIframe.src = ioIframe.src; // Reset iframe source.
      ioModal.classList.remove("show");
      mainContent.classList.remove("hover-active");
      removeHoveredCard();
      ioModal.style.opacity = "1";
      ioIframe.style.opacity = "1";
    }, 300);
  };
  
  /* ------------------ Close Modal Events ------------------ */
  iframeModal.addEventListener("click", (e) => {
    if (e.target !== modalIframe) {
      fadeOutModal();
    }
  });
  
  aidinModal.addEventListener("click", (e) => {
    if (e.target !== aidinIframe) {
      fadeOutAidinModal();
    }
  });
  
  imacModal.addEventListener("click", (e) => {
    const imacVideo = document.querySelector(".imac-video");
    if (e.target !== imacVideo && !imacVideo.contains(e.target)) {
      fadeOutImacModal();
    }
  });
  
  ioModal.addEventListener("click", (e) => {
    if (e.target !== ioIframe) {
      fadeOutIOModal();
    }
  });
  
  // Helper function to remove hovering from cards.
  function removeHoveredCard() {
    document.querySelectorAll(".card.hovering").forEach((card) => {
      card.classList.remove("hovering");
    });
  }
  
  // Optional: Inject CSS into same-origin iframes.
  function injectCssIntoIframe(iframe) {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const style = document.createElement("style");
      style.textContent = "body { background: #fff; }";
      iframeDoc.head.appendChild(style);
    } catch (error) {
      // Ignore cross-origin iframe errors.
    }
  }
  
  if (modalIframe) {
    injectCssIntoIframe(modalIframe);
  }
  if (aidinIframe) {
    injectCssIntoIframe(aidinIframe);
  }
  if (ioIframe) {
    injectCssIntoIframe(ioIframe);
  }
});