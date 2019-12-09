// Переменная page
// document.querySelector('.page') - ищет на странице элемент с селектором .page 
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
// themeButton.onclick = function() - функция для события по клику
themeButton.onclick = function() {
// обработчик события. 
// page.classList.toggle позволяет по клику для элемента с .page добавить класс 'light-theme'
// если он уже есть - убрать его и добавить 'dark-theme' и наоборот.
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};
