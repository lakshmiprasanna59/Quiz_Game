
const nameInput = document.querySelector('#name');
const playBtn = document.querySelector('#tap');

playBtn.addEventListener('click', function (e) {
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter your name!");
    e.preventDefault(); // Prevent moving to the next page
    return;
  }

  localStorage.setItem("userName", name); // Save to localStorage
});
