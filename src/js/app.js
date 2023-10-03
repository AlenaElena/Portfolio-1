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

const selectBox = document.querySelector('.select');
const select = document.querySelector('.select-top');
const selectItems = document.querySelectorAll('.select-list__btn');
const selectValue = document.querySelector('.select-top__value');
const projectItems = document.querySelectorAll('.projects-filter__btn');

const filterItems = document.querySelectorAll('.projects-item');

const selectToggle = function () {
  selectBox.classList.toggle('active');
};
addEventOnElem(select, 'click', selectToggle);

selectItems.forEach((el) => {
  el.addEventListener('click', function () {
    let selectedValue = this.textContent.toLowerCase();
    selectValue.textContent = this.textContent;
    selectToggle(select);
    filterFunc(selectedValue);
  });
});
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === 'all') {
      filterItems[i].classList.add('active');
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
};

let lastClickedBtn = projectItems[0];
for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener('click', function () {
    let selectedValue = this.textContent.toLowerCase();
    selectValue.textContent = this.textContent;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;
  });
}
