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

  // Randomized Greeting: either Uzbek or Arabic.
  const greetingContainer = document.getElementById("greeting-container");
  if (greetingContainer) {
    const random = Math.random();
    if (random < 0.5) {
      // Uzbek greeting with tooltip.
      greetingContainer.innerHTML = '<span class="greeting uzbek" data-tooltip="&quot;welcome&quot; in uzbeki">Xush kelibsiz!</span>';
    } else {
      // Arabic greeting with tooltip.
      greetingContainer.innerHTML = '<span class="greeting arabic" data-tooltip="greeting in arabic">ٱلسَّلَامُ عَلَيْكُمْ</span>';
    }
  }

  /* ------------------ Modal Functions for Sirius Black Cafe ------------------ */
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
      // Reset opacities.
      iframeModal.style.opacity = "1";
      modalIframe.style.opacity = "1";
    }, 300);
  };

  /* ------------------ Modal Functions for Aidin Murtha Voice Actor ------------------ */
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
      // Reset opacities.
      aidinModal.style.opacity = "1";
      aidinIframe.style.opacity = "1";
    }, 300);
  };

  /* ------------------ Modal Functions for iMac (Romhack) ------------------ */
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

  /* ------------------ Modal Functions for IOLabs Inventory ------------------ */
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
      // Reset opacities.
      ioModal.style.opacity = "1";
      ioIframe.style.opacity = "1";
    }, 300);
  };

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

  /* ------------------ Card Click Event Listeners ------------------ */
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

  /* ------------------ Helper Functions ------------------ */
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

  // Optionally inject CSS for our modals.
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