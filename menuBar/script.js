homeIcon.onclick = function homeOnClick () {
    alert ("Вы перешли на главную страницу")
}
personalAccountIcon.onclick = function personalAccountOnClick () {
    alert ("Вы перешли в свой личный кабинет")
}
messengerIcon.onclick = function messengerOnClick () {
    alert ("Вы перешли в чат")
}
photoIcon.onclick = function photoOnClick () {
    alert ("Вы перешли в фото")
}
settingsIcon.onclick = function settingsOnClick () {
    alert ("Вы перешли в настройки вашего аккаунта")
}

const lamp = document.querySelector('#clrLamp');
  const btn = document.querySelector('#bg');
  let lampIsOff = true;
  const change = () => {
    lampIsOff = !lampIsOff; // инвретировать состояние
    lamp.style= lampIsOff ? "" : "fill: rgb(255, 255, 144);"
    document.body.style.background = lampIsOff ? "rgb(14, 14, 14)" : "#464646"
  }
  btn.addEventListener('click', change, false )