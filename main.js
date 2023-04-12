const circle = document.getElementById('avatar');
let clickCount = 0;

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
}

function darkenColor(color) {
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const rgbToHex = (rgb) => {
    const { r, g, b } = rgb;
    const hex = (r << 16) | (g << 8) | b;
    return `#${hex.toString(16).padStart(6, '0')}`;
  };

  const rgb = hexToRgb(color);
  rgb.r = Math.max(rgb.r - 20, 0);
  rgb.g = Math.max(rgb.g - 20, 0);
  rgb.b = Math.max(rgb.b - 20, 0);
  return rgbToHex(rgb);
}

function handleClick() {
  clickCount++;
  if (clickCount < 9) {
    const currentColor = window.getComputedStyle(circle).backgroundColor;
    const newColor = darkenColor(currentColor);
    circle.style.backgroundColor = newColor;
  } else {
    circle.style.backgroundColor = '#000';
    circle.removeEventListener('click', handleClick);
  }
}

circle.style.backgroundColor = getRandomColor();
circle.addEventListener('click', handleClick);