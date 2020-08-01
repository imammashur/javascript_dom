// DOM Selection

// getElementById -> mengembalikan dalam bentuk = Element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Imam Mashur';

// getElementsByTagName -> mengembalikan dalam bentuk = HTMLCollection
const p = document.getElementsByTagName('p');
p[1].style.backgroundColor = 'lightblue';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = "65px";

// getElementsByClassName -> mengembalikan dalam bentuk = HTMLCollection
const p2 = document.getElementsByClassName('p2');
p2[0].innerHTML = "Ini dari JS";
