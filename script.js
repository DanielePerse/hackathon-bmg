function popUp () {
  const openPopUp = document.getElementById('popUpInformation');
  console.log(openPopUp.style.display);
  if (openPopUp.style.display === "" || openPopUp.style.display === 'none') {
    openPopUp.style.display = 'block';
  } else {
    openPopUp.style.display = 'none';
  }
}

window.onload = function () {
  const button = document.getElementById('check_button');
  const buttonClosePopUp = document.getElementById('imgPopUp');
  button.addEventListener('click', popUp);
  buttonClosePopUp.addEventListener('click', popUp);
}
