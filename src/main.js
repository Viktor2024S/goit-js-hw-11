// src/js/main.js
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document
  .getElementById('search-form')
  .addEventListener('submit', async event => {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (query === '') {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search term.',
      });
      return;
    }

    const loader = document.getElementById('loading-indicator');
    loader.classList.remove('hidden');

    try {
      const data = await fetchImages(query);
      loader.classList.add('hidden');
      if (data.hits.length > 0) {
        renderGallery(data.hits);
      } else {
        iziToast.info({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    } catch (error) {
      loader.classList.add('hidden');
      iziToast.error({ title: 'Error', message: error.message });
    }
  });
