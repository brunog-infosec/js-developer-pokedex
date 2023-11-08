function toggleCardInfo(button) {
    var info = button.nextElementSibling; // Obtém o elemento de informações adjacente
  
    if (info.style.display === "none" || info.style.display === "") {
      info.style.display = "contents"; // Mostra as informações
      button.textContent = "Hide";
    } else {
      info.style.display = "none"; // Oculta as informações
      button.textContent = "Show Attacks";
    }
  }