import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Error_png from './img/error-icon.png';

import createMarkup from './js/render-functions';
import searchPixa from './js/pixabay-api';

const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input-search');
const formEl = document.querySelector('.js-form');
const loader = document.querySelector('.loader');

/* const messageLoad =
   'We are sorry, but you have reached the end of search results'; */

formEl.addEventListener('submit', onSubmit);
const loadMore = document.querySelector('.js-load');
hideLoader();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let currentPage = 1;

loadMore.addEventListener('click', onLoad);

function onLoad(event) {
  event.preventDefault();
  const searchQuery = input.value;
  showLoader();
  currentPage += 1;
  searchPixa(searchQuery, currentPage)
    .then(([images, isNextPage]) => {
      const markup = createMarkup(images);
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
      scroll();
      hideLoader();
      if (!isNextPage) {
        loadMore.hidden = true;
        const messageLoad =
          'We are sorry, but you have reached the end of search results';
        iziToast.show({
          titleColor: '#FFFFFF',
          titleSize: '16px',
          messageSize: '16px',
          messageColor: '#FFFFFF',
          backgroundColor: '#2E2F42',
          message: `${messageLoad}`,
          position: 'bottomLeft',
          timeout: 3000,
          /*  iconUrl: Error_png, */
        });
      }
    })
    .catch(message => {
      iziToast.show({
        titleColor: '#FFFFFF',
        titleSize: '16px',
        messageSize: '16px',
        messageColor: '#FFFFFF',
        backgroundColor: '#2E2F42',
        message: `${message}`,
        position: 'bottomLeft',
        timeout: 3000,
        /*  iconUrl: Error_png, */
      });
      hideLoader();
      loadMore.hidden = true;
    });
}

function onSubmit(event) {
  event.preventDefault();
  const searchQuery = input.value;
  showLoader();
  searchPixa(searchQuery)
    .then(([images, isNextPage]) => {
      const markup = createMarkup(images);
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
      loadMore.hidden = false;
      scroll();
      hideLoader();
    })
    .catch(message => {
      gallery.innerHTML = '';
      iziToast.error({
        titleColor: '#FFFFFF',
        titleSize: '16px',
        messageSize: '16px',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        message: `${message}`,
        position: 'topRight',
        timeout: 3000,
        iconUrl: Error_png,
      });
      hideLoader();
      loadMore.hidden = true;
    });
}

function scroll() {
  const galleryItems = document.querySelectorAll('.js-item');
  const rect = galleryItems.item(0).getBoundingClientRect();
  window.scrollBy({ top: rect.height * 2, behavior: 'smooth' });
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
