function startApp() {
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("todoApp").style.display = "block";
}

function addTask(listId, inputId) {
  const input = document.getElementById(inputId);
  const value = input.value.trim();
  if (value === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        <input type="checkbox">
        <span>${value}</span>
      `;
  document.getElementById(listId).appendChild(li);

  input.value = "";
}
