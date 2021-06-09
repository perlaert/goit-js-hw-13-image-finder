import notification from './notification';

const apiKey = '19974977-7de7da89e9a7910ce59988326';

export default {
  searchQuery: ' ',
  page: 1,

  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      })
      .catch(error => {
        if (error === 404) {
          return notification.error('Something went wrong. Try again.');
        }
      });
  },

  resetPage() {
    this.page = 1;
  },

  incrementPage() {
    this.page += 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
