//Set the heart-like-button class as a constant called button

const button = document.querySelector(".heart-like-button");

//On click, add and remove the liked class

button.addEventListener("click", () => {
  if (button.classList.contains("liked")){
    button.classList.remove("liked");
  } else {
    button.classList.add("liked");
  }
});
