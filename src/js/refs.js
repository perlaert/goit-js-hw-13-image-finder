const bodyRef = document.querySelector('body');
const searchForm = document.querySelector('#search-form');
const galleryRef = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('#js-button');
const loadMoreSpinner = document.querySelector('.spinner');
const loadMoreLabel = document.querySelector('.label');
const modalRef = document.querySelector('.js-lightbox');
const overlayRef = document.querySelector('.lightbox__overlay');
const modalImage = document.querySelector('.lightbox__image');
const modalCloseBtn = document.querySelector('.lightbox__button');

export default {
  searchForm,
  galleryRef,
  loadMoreBtn,
  loadMoreSpinner,
  loadMoreLabel,
  modalRef,
  overlayRef,
  modalImage,
  modalCloseBtn,
  bodyRef,
};
