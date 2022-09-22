const selectorsEl = document.querySelectorAll(".selector");
const incompleteEl = document.querySelector(".incomplete");
const completedEl = document.querySelector(".completed");
const completedSelectorEl = document.querySelector("#completed-selector");
const incompleteSelectorEl = document.querySelector("#incomplete-selector");

// helps collapse to-do and completed sections
collapseEls();

function collapseEls() {
  selectorsEl.forEach((selector) => {
    selector.addEventListener("click", () => {
      if (selector.innerText == "add") {
        if (selector.id === "incomplete-selector") {
          incompleteEl.classList.add("active");
          incompleteSelectorEl.innerText = "remove";
        } else {
          completedEl.classList.add("active");
          completedSelectorEl.innerText = "remove";
        }
      } else {
        if (selector.id === "incomplete-selector") {
          incompleteEl.classList.remove("active");
          incompleteSelectorEl.innerText = "add";
        } else {
          completedEl.classList.remove("active");
          completedSelectorEl.innerText = "add";
        }
      }
    });
  });
}
