// DOM Elements
const checkbox = document.getElementById("toggle-completed");
const title = document.querySelector('[data-testid="test-todo-title"]');
const statusEl = document.querySelector('[data-testid="test-todo-status"]');
const timeEl = document.querySelector('[data-testid="test-todo-due-date"]');
const timeLeft = document.querySelector(
  '[data-testid="test-todo-time-remaining"]',
);

const dueDate = new Date(timeEl.getAttribute("datetime"));

const prevStatus = statusEl.textContent;
const prevStatusLabel = statusEl.getAttribute("aria-label");
const prevStatusClass = statusEl.className;

checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    title.classList.add("done");
    statusEl.classList.remove(...prevStatusClass.split(" "));
    statusEl.classList.add("status-done");
    statusEl.textContent = "Done";
    statusEl.setAttribute("aria-label", "Status: Done");
    checkbox.setAttribute("aria-label", "Mark task as incomplete");
  } else {
    title.classList.remove("done");
    statusEl.classList.remove("status-done");
    statusEl.classList.add(...prevStatusClass.split(" "));
    statusEl.textContent = prevStatus;
    statusEl.setAttribute("aria-label", prevStatusLabel);
    checkbox.setAttribute("aria-label", "Mark task as completed");
  }
});

function getTimeRemaining() {
  // Current time whenever function is called
  const now = new Date();

  //   Difference between current time and deadline
  const diffMs = dueDate - now;

  //   diff in minutes
  const diffMins = Math.floor(diffMs / (1000 * 60));

  //   hours
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  //   days
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMs < 0) {
    if (Math.abs(diffHours) < 24)
      return `Overdue by ${Math.abs(diffHours)} hours`;
    return `Overdue by ${Math.abs(diffDays)} days`;
  }
  if (diffMins < 60) return "Due now!";
  if (diffHours < 24) return "Due today";
  if (diffDays === 1) return "Due tomorrow";
  return `Due in ${diffDays} days`;
}

timeLeft.textContent = getTimeRemaining();

// Refreshes every sixty seconds
setInterval(() => {
  timeLeft.textContent = getTimeRemaining();
}, 60000);
