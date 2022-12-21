var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');
pauseButton.style.position = "absolute";
pauseButton.style.width = "662px";
pauseButton.style.height = "67px";
pauseButton.style.top = "600px";
pauseButton.style.left = "152px";
pauseButton.style.transform = "rotate(0deg)";

function pauseSlideshow(){
  pauseButton.innerHTML = '&#9658;'; // play character
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow(){
  pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};

var next = document.getElementById('next');
next.onclick = function(){
  pauseSlideshow();
  nextSlide();
};
next.style.position = "absolute";
next.style.width = "80px";
next.style.height = "616px";
next.style.top = "50px";
next.style.left = "882px";

var previous = document.getElementById('previous');
previous.onclick = function(){
  pauseSlideshow();
  previousSlide(); 
};
previous.style.position = "absolute";
previous.style.width = "80px";
previous.style.height = "616px";
previous.style.top = "50px";

//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNames = ["blue", "cyan", "red", "gold", "green", "yellow", "orange"];

// функция поиска random-числа
const random = (min, max) => {
  max = colorNames.length - 1;
  const rand = min + Math.round(Math.random() * (max - min));
  return rand;
};

// найти элементы для изменения свойств
let paragraphs = document.getElementsByClassName("textimgFatherChristmas");

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = colorNames[random(0)];
  }
}, 3000);
console.log(colorNames);

//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNamess = ["blue", "cyan", "red", "gold", "green", "yellow", "orange"];

// функция поиска random-числа
const randoms = (min, max) => {
  max = colorNamess.length - 1;
  const rands = min + Math.round(Math.random() * (max - min));
  return rands;
};

// найти элементы для изменения свойств
let paragraphss = document.getElementsByClassName("item");

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphss.length; i++) {
    paragraphss[i].style.color = colorNamess[random(0)];
  }
}, 3000);
console.log(colorNamess);

//Слайдер автомат только с кнопкой старт, стоп, без кнопок перемотки
/*var slides = document.querySelectorAll('#slides .slide');//скрипт работает
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(nextSlide,5000);
}

pauseButton.onclick = function() {
  if (playing) { pauseSlideshow(); }
  else { playSlideshow(); }
};*/

//Вычисляем за сколько секунд можно просмореть 25 мб видео по уравнению 25 * 14.02 /31.2
/*let mbInVid = 31.2;
let secInVid = 14.02;
let limit = 25;
let result = limit * secInVid / mbInVid;
console.log(result);*/