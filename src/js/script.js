window.addEventListener("load", () => {
  showButtons();
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

function showButtons() {
  const btnContainer = createElement("div", "", { className: "d-grid gap-2 d-md-block" }, null, "#main");
  const primaryBtn = createElement(
    "button",
    "Primary",
    { className: "btn btn-primary", type: "button" },
    null,
    btnContainer
  );
  primaryBtn.setAttribute("data-bs-toggle", "modal");
  primaryBtn.setAttribute("data-bs-target", "#exampleModal");
  primaryBtn.setAttribute("data-toggle", "tooltip");
  primaryBtn.setAttribute("title", "Some useless text");

  const secondaryBtn = createElement(
    "button",
    "Secondary",
    { className: "btn btn-outline-secondary", type: "button", id: "liveAlertBtn" },
    { click: { callback: showAlert } },
    btnContainer
  );
}

function showAlert() {
  const alertPlaceholder = createElement("div", "", { id: "liveAlertPlaceholder" }, null, "#main");
  const alert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  const alertTrigger = document.getElementById("liveAlertBtn");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      alert("Success. Alert was opened!", "success");
    });
  }
}
