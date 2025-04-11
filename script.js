// Update cursor light position on mouse move.
window.addEventListener("mousemove", e => {
  const cursorLight = document.getElementById("cursor-light");
  if (cursorLight) {
    cursorLight.style.left = `${e.clientX}px`;
    cursorLight.style.top = `${e.clientY}px`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  
  // --- Functions for sirius black cafe modal ---
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
      modalIframe.src = modalIframe.src; // Reset iframe.
      iframeModal.classList.remove("show");
      mainContent.classList.remove("hover-active");
      removeHoveredCard();
      // Reset styles.
      iframeModal.style.opacity = "1";
      modalIframe.style.opacity = "1";
    }, 300);
  };

  // --- Functions for aidin murtha modal ---
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
      aidinIframe.src = aidinIframe.src; // Reset iframe.
      aidinModal.classList.remove("show");
      mainContent.classList.remove("hover-active");
      removeHoveredCard();
      // Reset styles.
      aidinModal.style.opacity = "1";
      aidinIframe.style.opacity = "1";
    }, 300);
  };

  // Add hover events to each card.
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
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
  
  // Show sirius black cafe modal on click of its card.
  const firstCard = document.getElementById("card-iframe");
  if (firstCard) {
    firstCard.addEventListener("click", () => {
      mainContent.classList.add("hover-active");
      fadeInModal();
    });
  }
  
  // Show aidin murtha modal on click of its card.
  const aidinCard = document.getElementById("card-aidin");
  if (aidinCard) {
    aidinCard.addEventListener("click", () => {
      mainContent.classList.add("hover-active");
      fadeInAidinModal();
    });
  }
  
  // Fade out modal when clicking outside the iframe element.
  iframeModal.addEventListener("click", e => {
    if (e.target !== modalIframe) {
      fadeOutModal();
    }
  });
  aidinModal.addEventListener("click", e => {
    if (e.target !== aidinIframe) {
      fadeOutAidinModal();
    }
  });
  
  // Helper to remove 'hovering' class from any card.
  function removeHoveredCard() {
    document.querySelectorAll(".card.hovering").forEach(card => {
      card.classList.remove("hovering");
    });
  }



  // Inject CSS into both modals if iframes are same-origin.
  if (modalIframe) {
    injectCssIntoIframe(modalIframe);
  }
  if (aidinIframe) {
    injectCssIntoIframe(aidinIframe);
  }
});