import cardImageTpl from '../templates/cardImage.hbs';
import refs from './refs.js';

function updateImagesMarkup(hits) {
  const markup = cardImageTpl(hits);
  refs.galleryRef.insertAdjacentHTML('afterbegin', markup);
}

export default updateImagesMarkup;
