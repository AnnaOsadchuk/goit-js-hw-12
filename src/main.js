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

let currentPage = 40;

loadMore.addEventListener('click', onLoad);

function onLoad(page = 1) {
  currentPage += 1;
  searchPixa(currentPage)
    .then(images => {
      const markup = createMarkup(images);
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
      hideLoader();
      if (data.hits === data.totalHits) {
        loadMore.hidden = true;
      }
    })
    .catch(messageLoad => {
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
      hideLoader();
    });
}

function onSubmit(event) {
  event.preventDefault();
  const searchQuery = input.value;
  showLoader();
  searchPixa(searchQuery)
    .then(images => {
      const markup = createMarkup(images);
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
      hideLoader();
      loadMore.hidden = false;
    })
    .catch(message => {
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
      loadMore.hidden = false;
    });
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
