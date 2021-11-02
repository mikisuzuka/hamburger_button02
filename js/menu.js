{
  const button = document.getElementById("menubutton");
  const overlay = document.querySelector(".overlay");

  button.addEventListener("click", () => {
    overlay.classList.toggle("show");
    button.classList.toggle("activ");
  });
}
