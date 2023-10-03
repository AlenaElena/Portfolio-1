const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// sidebar open
const sidebarBottom = document.querySelector('.sidebar-bottom');
const sidebarBtn = document.querySelector('.sidebar-top__btn');

const sidebar = function () {
  sidebarBottom.classList.toggle('active');
  sidebarBtn.classList.toggle('active');
};
addEventOnElem(sidebarBtn, 'click', sidebar);

// Modal window
const modalItems = document.querySelectorAll('.testimonials-item__inner');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-testimonials__btn');

const modalImg = document.querySelector('.modal-testimonials__img');
const modalTitle = document.querySelector('.modal-testimonials__title');
const modalDate = document.querySelector('.modal-testimonials__date');
const modalText = document.querySelector('.modal-testimonials__text');

const testimonialsModalFunc = function () {
  modal.classList.toggle('active');
  overlay.classList.toggle('active');
};
modalItems.forEach((el) => {
  el.addEventListener('click', function () {
    modalImg.src = this.querySelector('.testimonials-item__img').src;
    modalImg.alt = this.querySelector('.testimonials-item__img').alt;

    modalTitle.innerHTML = this.querySelector(
      '.testimonials-item__title'
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      '.testimonials-item__text'
    ).innerHTML;

    testimonialsModalFunc();
  });
});

const arrClose = [modalClose, overlay];
arrClose.forEach((el) => {
  addEventOnElem(el, 'click', testimonialsModalFunc);
});

// portfolio select
const select = function () {
  const selectItems = document.querySelectorAll('.select__body-item');
  const selectHeader = document.querySelector('.select__header');

  const selectToggle = function () {
    this.parentElement.classList.toggle('active');
  };
  const selectChoose = function () {
    const text = this.innerText;
    const select = this.closest('.select');
    const currentText = select.querySelector('.select__header-current');
    currentText.innerText = text;
    select.classList.remove('active');
  };

  addEventOnElem(selectHeader, 'click', selectToggle);
  selectItems.forEach((el) => {
    addEventOnElem(el, 'click', selectChoose);
  });
};
select();
