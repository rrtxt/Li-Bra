const image_input = document.getElementById("sampul");
const cancel_image = document.getElementsByTagName("i")[0];
const display_image = document.querySelector("#display-input-img");
let uploaded_img = "";

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        uploaded_img = reader.result;
        display_image.style.backgroundImage = `url(${uploaded_img})`;
        image_input.style.background = "none";
        image_input.style.border = "none";
        cancel_image.style.display = "inline";
    });
    reader.readAsDataURL(this.files[0]);
});

cancel_image.addEventListener("click", function() {
    display_image.style.backgroundImage = "none";
    image_input.value = "";
    image_input.style.background = "rgba(217, 217, 217, 0.43) url(/assets/icon/image-add-icon.png) no-repeat center";
    image_input.style.border = "2px dashed rgba(0, 0, 0, 0.4)";
    cancel_image.style.display = "none";
});

