function changeStyle(styleClass) {
  var textElement = document.getElementById("display-text");
  textElement.className = styleClass;
}

const checkToggle = document.getElementById('js_mode_toggle');
const rotateIcon = document.getElementById('js_rotate');
const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const keyLocalStorage = 'demoKey';
const localTheme = localStorage.getItem(keyLocalStorage);
let nowRotate = 0;

if (localTheme === 'light') {
  rotateInfinite();
  changeMode('light');
} else if (localTheme === 'dark') {
  changeMode('dark');
} else if (isLight) {
  rotateInfinite();
  changeMode('light');
}

checkToggle.addEventListener('change', function (e) {
  rotateInfinite();
  if (e.target.checked) {
    changeMode('light');
    localStorage.setItem(keyLocalStorage, 'light');
  } else {
    changeMode('dark');
    localStorage.setItem(keyLocalStorage, 'dark');
  }
});

function changeMode(mode) {
  if (mode === 'light') {
    document.documentElement.setAttribute('data-theme-mode', 'light');
    checkToggle.checked = true;
  } else if (mode === 'dark') {
    document.documentElement.setAttribute('data-theme-mode', 'dark');
    checkToggle.checked = false;
  }
}

function rotateInfinite() {
  nowRotate += 180;
  rotateIcon.style.transform = 'rotate(' + nowRotate + 'deg)';
}

function preventEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}