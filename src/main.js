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
const loadMoreBnt = document.querySelector('.js-load-button');

formEl.addEventListener('submit', onSubmit);
loadMoreBnt.addEventListener('click', onLoad);

hideElement(loader);
hideElement(loadMoreBnt);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let currentPage = 1;
let searchQuery;

function onLoad(event) {
  event.preventDefault();
  showElement(loader);
  currentPage += 1;
  searchPixa(searchQuery, currentPage)
    .then(([images, isNextPage]) => {
      const markup = createMarkup(images);
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
      scroll();
      hideElement(loader);
      if (!isNextPage) {
        hideElement(loadMoreBnt);
        const messageLoad =
          'We are sorry, but you have reached the end of search results';
        iziToast.show({
          titleColor: '#FFFFFF',
          titleSize: '16px',
          messageSize: '16px',
          messageColor: '#FFFFFF',
          backgroundColor: '#799CD2',
          message: `${messageLoad}`,
          position: 'bottomLeft',
          timeout: 3000,
        });
      }
    })
    .catch(message => {
      iziToast.show({
        titleColor: '#FFFFFF',
        titleSize: '16px',
        messageSize: '16px',
        messageColor: '#FFFFFF',
        backgroundColor: '#799CD2',
        message: `${message}`,
        position: 'bottomLeft',
        timeout: 3000,
      });
      hideElement(loader);
      hideElement(loadMoreBnt);
    });
}

function onSubmit(event) {
  resetCurrent();
  event.preventDefault();
  searchQuery = input.value;
  showElement(loader);
  hideElement(loadMoreBnt);
  searchPixa(searchQuery)
    .then(([images, isNextPage]) => {
      const markup = createMarkup(images);
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
      if (isNextPage) {
        showElement(loadMoreBnt);
      }
      scroll();
      hideElement(loader);
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
      hideElement(loader);
      hideElement(loadMoreBnt);
    });
}

function scroll() {
  const galleryItems = document.querySelectorAll('.js-item');
  const rect = galleryItems.item(0).getBoundingClientRect();
  window.scrollBy({ top: rect.height * 2, behavior: 'smooth' });
}

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

function resetCurrent() {
  currentPage = 1;
}
