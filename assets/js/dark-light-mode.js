const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

const currentMode = localStorage.getItem('mode');

function updateIcon() {
  const sunIcon = document.querySelector('#mode-toggle img.fa-sun');
  const moonIcon = document.querySelector('#mode-toggle img.fa-moon');
  
  if (body.classList.contains('dark-mode')) {
    sunIcon.style.display = 'inline-block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-block';
  }
}

if (currentMode === 'dark') {
  body.classList.add('dark-mode');
} else {
  body.classList.remove('dark-mode'); 
}

updateIcon();

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  const newMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('mode', newMode);

  updateIcon();
});
