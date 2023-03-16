window.addEventListener("load", () => {
    showDate();
  });

function showDate() {
    const dateContainer = createElement("div", "", null, null, "#main");
    const myBirthday = moment("2002-08-22");
  
    function showUserDate() {
      const dateRegExp = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
      if (!dateRegExp.test(document.form.date.value)) {
        inputDate.classList.add("is-invalid");
      } else {
          createElement("div", `Your date: ${moment(document.form.date.value).format("YYYY/mm/DD, dddd")}`, null, null, dateContainer);
      }
    }
  
    const inputContainer = createElement(
      "form",
      "",
      { className: "input-group mb-3 input-container", name: "form" },
      null,
      dateContainer
    );
    const inputButton = createElement(
      "button",
      "Send",
      { className: "btn btn-outline-secondary", type: "button", id: "button-addon1" },
      { click: { callback: showUserDate } },
      inputContainer
    );
    const inputDate = createElement(
      "input",
      "",
      { className: "form-control", placeholder: "dd.mm.yyyy", type: "text", name: "date" },
      null,
      inputContainer
    );
  
    createElement("div", `My birthday: ${myBirthday.format("YYYY/mm/DD, dddd")}`, null, null, dateContainer);
  }
  