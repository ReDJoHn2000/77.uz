const loginBtn = document.querySelector(".navigation__login-btn");
const loginCloseBtn = document.querySelector(".navigation__close-btn");
const submitBtn = document.querySelector(".navigation__btn_submit");
const submitPopup = document.querySelector(".navigation__submit-form");
const submitCloseBtn = document.querySelector(".navigation__close-btn-submit");
const submitLoginBtn = document.querySelector(".navigation__btn_sub-submit");

// to show the login page
loginBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});
//to hide the login page by clicking the closing icon
loginCloseBtn.addEventListener("click", () => {
  loginBtn.click();
});

submitBtn.addEventListener("click", () => {
  submitPopup.classList.add("show-form-submit");
});

submitCloseBtn.addEventListener("click", () => {
  loginBtn.click();
});

submitLoginBtn.addEventListener("click", () => {
  submitPopup.classList.remove("show-form-submit");
});
