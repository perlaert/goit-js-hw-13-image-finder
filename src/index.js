import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import updateImagesMarkup from './js/update-images-makrup';

refs.searchForm.addEventListener('submit', searchSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchImages);

const loadMoreBtn = {
  enable() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreLabel.textContent = 'Load more';
    refs.loadMoreSpinner.classList.add('is-hidden');
  },

  disable() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreLabel.textContent = 'Loading...';
    refs.loadMoreSpinner.classList.remove('is-hidden');
  },

  show() {
    refs.loadMoreBtn.classList.remove('is-hidden');
  },
};

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
  loadMoreBtn.disable();
  apiService.fetchImages().then(hits => {
    updateImagesMarkup(hits);
    loadMoreBtn.enable();
    loadMoreBtn.show();
    if (apiService.page > 2) {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  });
}

function clearImagesContainer() {
  refs.galleryRef.innerHTML = '';
}
