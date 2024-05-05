// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');

const items = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<li class="gallery__item" style="list-style: none"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"></a></li>`
  )
  .join('');
galleryList.insertAdjacentHTML('beforeend', items);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {

  });