const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const src = `img/${chosenImage}`;
console.log(src);
const url = `url(${src})`;
console.log(url);
document.body.style.backgroundImage = url;