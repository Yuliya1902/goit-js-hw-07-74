import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector('.gallery');



const marupGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}).join('');

ulEl.insertAdjacentHTML('beforeend', marupGallery)


const lightbox = new SimpleLightbox('.gallery a', { 
   
   captionsData: 'alt',
   captionPosition: 'bottom',
   captionDelay: 250,
   
 });

console.log(galleryItems);
