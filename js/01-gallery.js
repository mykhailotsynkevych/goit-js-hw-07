import { galleryItems } from "./gallery-items.js";

// Change code below this line

const paletteContainer = document.querySelector(".gallery");
const cardsMarkup = createColorCardsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

paletteContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const linkImg = e.target.dataset.source;
  const instance = basicLightbox.create(`
<img src="${linkImg}">
`);

  instance.show();
});
