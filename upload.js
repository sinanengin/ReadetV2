const display = document.querySelector(".display-upload");
const input = document.querySelector("#upload");
let img = document.querySelector("img-upload");

input.addEventListener("change", () => {
  let reader = new FileReader();
  reader.readAsDataURL(input.files[0]);
  reader.addEventListener("load", () => {
    display.innerHTML = `<img src=${reader.result} alt=''/>`;
  });
});