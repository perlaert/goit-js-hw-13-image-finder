import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import updateImagesMarkup from './js/update-images-makrup';

// {
//   /* <link
//   href="https://fonts.googleapis.com/icon?family=Material+Icons"
//   rel="stylesheet"
// ></link>; */
// }

// let searchQuery = '';
// let page = 1;

refs.searchForm.addEventListener('submit', searchSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchImages);

function searchSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearImagesContainer();
  apiService.resetPage();
  fetchImages();
  form.reset();
}

function fetchImages() {
  apiService.fetchImages().then(hits => {
    updateImagesMarkup(hits);
  });
}

function clearImagesContainer() {
  refs.galleryRef.innerHTML = '';
}
