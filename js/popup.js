var popup = document.querySelector('.popup');
var popupForm = popup.querySelector('.popup__form');

var popupOpenBtn = document.querySelector('.login');
var popupCloseBtn = popup.querySelector('.popup__close');

var map = document.querySelector('.map');
var mapOpenBtn = document.querySelectorAll('.route');
var mapCloseBtn = map.querySelector('.map__close');


function openBtnClickHandler (element, className) {
  element.classList.add(className);
};

function closeBtnClickHandler (element, className) {
  element.classList.remove(className);

  if (element === popup) {
    popupForm.reset();
  }
};

/* popup */

popupOpenBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  openBtnClickHandler(popup, 'popup--open');
});

popupCloseBtn.addEventListener('click', function () {
  closeBtnClickHandler(popup, 'popup--open');
});

popupCloseBtn.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeBtnClickHandler(popup, 'popup--open');
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    closeBtnClickHandler(popup, 'popup--open');
  }
});


/* map */

mapOpenBtn.forEach(function (el) {
  el.addEventListener('click', function (evt) {
    evt.preventDefault();
    openBtnClickHandler(map, 'map--open');
  });
});

mapCloseBtn.addEventListener('click', function () {
  closeBtnClickHandler(map, 'map--open');
});

mapCloseBtn.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeBtnClickHandler(map, 'map--open');
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    closeBtnClickHandler(map, 'map--open');
  }
});
