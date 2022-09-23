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
      } else if (selector.innerText == "remove") {
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
  const span = document.createElement("span");

  span.classList.add("in-list", "material-symbols-outlined");
  if (isToDo === true) {
    span.classList.add("not-done");
  }
  if (isToDo === true) {
    span.innerText = "radio_button_unchecked";
  } else {
    span.innerText = "radio_button_checked";
  }
  const div = document.createElement("div");
  div.classList.add("list-el-text");
  if (isToDo === false) {
    div.classList.add("completed-task");
  }
  div.innerText = name;

  const row = document.createElement("div");
  row.classList.add("row");
  row.appendChild(span);
  row.appendChild(div);

  const span2 = document.createElement("span");
  span2.classList.add("selector", "edit", "hover", "material-symbols-outlined");
  span2.innerText = "edit";
  const span3 = document.createElement("span");
  span3.classList.add(
    "selector",
    "close",
    "hover",
    "material-symbols-outlined"
  );
  span3.innerText = "close";

  const div2 = document.createElement("div");
  div2.appendChild(span2);
  div2.appendChild(span3);

  const list = document.createElement("li");
  list.classList.add("list-el");
  list.appendChild(row);
  list.appendChild(div2);

  if (isToDo === true) {
    incompleteEl.appendChild(list);
  } else {
    completedEl.appendChild(list);
  }

  span.addEventListener("click", () => {
    const parent = span.parentElement.parentElement;
    const taskName = span.nextElementSibling.innerText;
    parent.remove();
    console.log("HII");
    addTask(taskName, false);
  });
  span2.addEventListener("click", () => {
    alert("feature isn't ready yet!");
  });
  span3.addEventListener("click", () => {
    span3.parentElement.parentElement.remove();
  });
}
