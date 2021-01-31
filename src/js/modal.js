import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';

refs.galleryRef.addEventListener('click', openModal);

function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imgModalSrc = event.target.dataset.source;
  const imgModalAlt = event.target.alt;
  const instance = basicLightbox.create(`
      <img src=${imgModalSrc}  alt=${imgModalAlt} width="800" height="600">
  `);

  instance.show();
}
