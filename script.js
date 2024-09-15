const showImageButton = document.getElementById("button");
const myImage = document.getElementById("my_image");
showImageButton.addEventListener("click", () => {
    if (myImage.style.display === "none" || myImage.style.display === "") {
        myImage.style.display = "block";
    } else {
        myImage.style.display = "none";
    }
});