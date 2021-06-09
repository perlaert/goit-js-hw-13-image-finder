const basicLightbox = require('basiclightbox');
import refs from './refs';

const instance = basicLightbox.create(refs.modalImage);

refs.galleryRef.addEventListener('click', openModal);
refs.overlayRef.addEventListener('click', closeModal);
refs.modalCloseBtn.addEventListener('click', closeModal);

function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imgModalSrc = event.target.dataset.source;
  const imgModalAlt = event.target.alt;

  refs.modalImage.setAttribute('src', imgModalSrc);
  refs.modalImage.setAttribute('alt', imgModalAlt);

  instance.show();

  refs.modalRef.classList.add('is-open');
  refs.bodyRef.classList.add('modal-open');

  window.addEventListener('keydown', onPressEscape);
}

function closeModal() {
  if (event.target.nodeName === 'IMG') {
    return;
  }
  refs.modalImage.setAttribute('src', '');
  refs.modalImage.setAttribute('alt', '');

  instance.close();

  refs.modalRef.classList.remove('is-open');
  refs.bodyRef.classList.remove('modal-open');

  window.removeEventListener('keydown', onPressEscape);
}

function onPressEscape(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
