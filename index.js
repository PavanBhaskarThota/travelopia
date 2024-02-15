const bodysection = document.querySelector(".bodysection");
    const showmodal = document.getElementById("showmodal");

    const modal = document.createElement("div");
    const modalbody = document.createElement("div");
    const text = document.createElement("h2");
    const closeButton = document.createElement("button");

    modal.className = "modal";
    modalbody.className = "modalbody";
    closeButton.className = "closeButton";

    text.innerText = "Hello world";

    closeButton.innerText = "close";

    modalbody.append(text);
    modal.appendChild(modalbody);

    showmodal.addEventListener("click", () => {
      bodysection.appendChild(modal);
    });

    modal.addEventListener("click", (event) => {
      if (!event.target.closest(".modalbody")) {
        modal.remove();
      }
    });