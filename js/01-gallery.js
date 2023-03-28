import { galleryItems } from './gallery-items.js';
// Change code below this line


const ulEl = document.querySelector(".gallery");

const marupGallery = galleryItems.map(({ preview, original, description }) => {
  return `<li class="galerry__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image" src=
"${preview}" data-source="${original}" alt="${description}"></a></li>`;
}).join('');

ulEl.insertAdjacentHTML('beforeend', marupGallery)
ulEl. addEventListener("click", onImageClick);


function onImageClick (event) {
 event.preventDefault();
 const currentItem = event.target;


 if (currentItem.nodeName !== 'IMG') {
  return;
}

let instance = basicLightbox.create(`
<img class="gallery__image" src="${currentItem.dataset.source}" width="800" height="600">`)

instance.show();

    window.addEventListener('keydown', onCloseModalClick);

}

function onCloseModalClick(event) {
    const openInstance = document.querySelector(".basicLightbox")
    if (event.code === "Escape") {
        openInstance.remove();
    }
    window.removeEventListener('keydown', onCloseModalClick); 
}

console.log(galleryItems);
