import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const paletteContainer = document.querySelector(".gallery");
const cardsMarkup = createColorCardsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `

  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}


new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPositiom: "bottom",
  captionsData: "alt",
  navText: ["&#10092", "&#10093"],
})

