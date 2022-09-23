const selectorsEl = document.querySelectorAll(".selector");
const incompleteEl = document.querySelector(".incomplete");
const completedEl = document.querySelector(".completed");
const completedSelectorEl = document.querySelector("#completed-selector");
const incompleteSelectorEl = document.querySelector("#incomplete-selector");
const inputEl = document.querySelector(".input");
const spanEls = document.querySelectorAll("span.in-list.not-done");

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

// adds input to to-do list
onTaskEnter();
function onTaskEnter() {
  inputEl.addEventListener("keyup", (key) => {
    if (key.keyCode === 13) {
      let task = inputEl.value;
      inputEl.value = "";
      addTask(task, true);
    }
  });
}

// adds task to one of the lists, params: task name, isToDo or isCompleted
function addTask(name, isToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const div = document.createElement("div");

  list.classList.add("list-el");
  span.classList.add("in-list", "material-symbols-outlined");
  div.innerText = name;

  if (isToDo) {
    span.classList.add("not-done");
    span.innerText = "radio_button_unchecked";
    div.classList.add("list-el-text");
    list.appendChild(span);
    list.appendChild(div);
    incompleteEl.appendChild(list);
    span.addEventListener("click", (e) => {
      const parent = span.parentElement;
      const taskName = span.nextElementSibling.innerText;
      parent.remove();
      addTask(taskName, false);
    });
  } else {
    span.innerText = "radio_button_checked";
    div.classList.add("list-el-text", "completed-task");
    list.appendChild(span);
    list.appendChild(div);
    completedEl.appendChild(list);
  }
}

addListenerToSpans();
function addListenerToSpans() {
  spanEls.forEach((span) => {
    span.addEventListener("click", (e) => {
      const parent = span.parentElement;
      const taskName = span.nextElementSibling.innerText;
      parent.remove();
      addTask(taskName, false);
    });
  });
}
