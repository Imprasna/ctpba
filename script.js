const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section_vimal = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  if (sections && sections.length > 0) {
    sections.forEach((s) => s.classList.remove("is-active"));
  }
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section_vimal.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

// Rohit Profile
const button = document.querySelectorAll(".card-buttonss button");
const section = document.querySelectorAll(".card-sections");
const cards = document.querySelector(".cardd");

const handleButtonsClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section_rohit = document.querySelector(targetSection);

  const activeSection = document.querySelector(".card-sections.is-active");
  if (activeSection) {
    activeSection.classList.remove("is-active");
  }

  targetSection !== "#aboutt"
    ? cards.classList.add("is-active")
    : cards.classList.remove("is-active");
  cards.setAttribute("data-state", targetSection);

  // Check if sections is an array before using forEach
  if (section && section.length > 0) {
    section.forEach((s) => s.classList.remove("is-active"));
  }

  button.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section_rohit.classList.add("is-active");
};

button.forEach((btn) => {
  btn.addEventListener("click", handleButtonsClick);
});

// Prasanna Profile
const all_button = document.querySelectorAll(".card-buttonsss button");
const all_section = document.querySelectorAll(".card-sectionss");
const all_cards = document.querySelector(".carddd");

const handleAllButtonsClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section_all = document.querySelector(targetSection);

  const activeSection = document.querySelector(".card-sectionss.is-active");
  if (activeSection) {
    activeSection.classList.remove("is-active");
  }

  targetSection !== "#abouttt"
    ? all_cards.classList.add("is-active")
    : all_cards.classList.remove("is-active");
  all_cards.setAttribute("data-state", targetSection);

  // Check if sections is an array before using forEach
  if (all_section && all_section.length > 0) {
    all_section.forEach((s) => s.classList.remove("is-active"));
  }

  all_button.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section_all.classList.add("is-active");
};

all_button.forEach((btn) => {
  btn.addEventListener("click", handleAllButtonsClick);
});

// COPY TO CLIPBOARD
function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

// Preloader
window.addEventListener('load', function() {
  document.getElementById('preloader').style.display = 'none';
});