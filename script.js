const skillsList = document.getElementById("skills-list");
const resumeForm = document.getElementById("resume-form");

const newSkill = (skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  return li;
};

resumeForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Form submission ko rokna
  const skillInput = document.getElementById("skill-input");
  const skill = skillInput.value;
  if (skill) {
    skillsList.appendChild(newSkill(skill));
    skillInput.value = ""; // Input field ko clear karna
  }
});

// To update resume title dynamically
const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");

nameInput.addEventListener("input", () => {
  const newName = nameInput.value;
  document.getElementById("name").value = newName; // Update displayed name
});

titleInput.addEventListener("input", () => {
  const newTitle = titleInput.value;
  document.getElementById("title").value = newTitle; // Update displayed title
});
