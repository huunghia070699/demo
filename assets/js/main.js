//click vào đăng nhập
function loGin() {
   var divModal= document.querySelector(".modal");
   var loginElement = document.querySelector("#formLogin");
   divModal.classList.remove("hidden");
   loginElement.classList.remove("hidden");
}
// click vào đăng kí
function reGisTer() {
   var divModal= document.querySelector(".modal");
   var registerElement = document.querySelector("#formRegister");
   divModal.classList.remove("hidden");
   registerElement.classList.remove("hidden");
}
// chuyển đăng nhập sang đăng kí
function loginSwitchRegister() {
   var loginElement = document.querySelector("#formLogin");
   var registerElement = document.querySelector("#formRegister");
   loginElement.classList.add("hidden");
   registerElement.classList.remove("hidden");
}
// chuyển đăng kí sang đăng nhập
function registerSwitchLogin() {
   var loginElement = document.querySelector("#formLogin");
   var registerElement = document.querySelector("#formRegister");
   registerElement.classList.add("hidden");
   loginElement.classList.remove("hidden");
}
//back
function back() {
   var divModal= document.querySelector(".modal");
   var loginElement = document.querySelector("#formLogin");
   var registerElement = document.querySelector("#formRegister");
   divModal.classList.add("hidden");
   registerElement.classList.add("hidden");
   loginElement.classList.add("hidden");
}
//ngăn chặn hành vi mặc định onblur khỏi ô tìm kiếm và lấy ra giá trị của element 
var liElement = document.querySelectorAll('.header__search-history-items');
var ulElement = document.querySelector('.header__search-history-list');
var liElementLength = liElement.length;
ulElement.onmousedown = function (e) {
   e.preventDefault();
   for(var i = 0; i < liElementLength; i++){
      liElement[i].onclick = function (e){
         console.log(e.target.innerText);
      }
   }
};
//current category
var categoryItems = document.querySelectorAll(".category-item");
categoryItems.forEach((item,index)=>{
   item.onclick = function () {
      var categoryItem = document.querySelector(".category-item.category-item--active");
      this.classList.add("category-item--active");
      categoryItem.classList.remove("category-item--active");
   }
})
//btn filter
var homeFilterBtns = document.querySelectorAll(".home-filter__btn");
var homeFilterBtnLength = homeFilterBtns.length;
for(var i = 0; i < homeFilterBtnLength; i++){
   homeFilterBtns[i].onclick = function () {
      var homeFilterBtn = document.querySelector(".home-filter__btn.btn--primary");
      this.classList.add("btn--primary");
      homeFilterBtn.classList.remove("btn--primary");
   }
}
//like product
function likeProduct() {
   var preventA = document.querySelectorAll('.home-product-item');
   var preventALength = preventA.length;
   for(var i = 0; i < preventALength; i++){
      preventA[i].onclick = function (e) {
         e.preventDefault();
      }
      preventA[i].children[3].firstElementChild.onclick = function (e){
         e.path[1].classList.toggle("home-product-item__like--liked")
      }
   }
}
//rating
var preventA = document.querySelectorAll('.home-product-item');
var preventALength = preventA.length;
for(var i = 0; i < preventALength; i++){
   preventA[i].onclick = function (e) {
      e.preventDefault();
   }
   var ratelength = preventA[i].children[3].children[1].children.length;
   for(var j = 0; j < ratelength; j++){
      preventA[i].children[3].children[1].children[j].onclick = function (){
         this.classList.toggle("home-product-item__rated");
      }
   }
}
//current page
var preventA = document.querySelectorAll('.pagination-item__link');
var preventALength = preventA.length;
for(var i = 0; i < preventALength; i++){
   preventA[i].onclick = function (e) {
      e.preventDefault();
   }
   preventA[i].parentElement.onclick = function (){
      var paginationItem = document.querySelector(".pagination-item.pagination-item--active");
      this.classList.add("pagination-item--active");
      paginationItem.classList.remove("pagination-item--active");
   }
}