const images = document.querySelector(".image-container img")

images.forEach((image) => {
    image.src = image.src.replace("&w=10", "&w=400");
});