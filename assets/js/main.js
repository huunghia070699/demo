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
//use button to back
function back() {
   var divModal= document.querySelector(".modal");
   var loginElement = document.querySelector("#formLogin");
   var registerElement = document.querySelector("#formRegister");
   divModal.classList.add("hidden");
   registerElement.classList.add("hidden");
   loginElement.classList.add("hidden");
}
var divModal = document.querySelector(".modal");
var divModalBody = document.querySelector(".modal__body");
var loginElement = document.querySelector("#formLogin");
var registerElement = document.querySelector("#formRegister");
//use esc to back
document.onkeyup = function(e){
   if(e.which == 27)
   {
      divModal.classList.add('hidden');
      registerElement.classList.add("hidden");
      loginElement.classList.add("hidden");
   }
}
//click outside div to back
divModal.addEventListener('click',back);
divModalBody.onclick = function(e){
   e.stopPropagation();
}
//ngăn chặn hành vi mặc định onblur khỏi ô tìm kiếm và lấy ra giá trị của element 
var liElement = document.querySelectorAll('.header__search-history-items');
var ulElement = document.querySelector('.header__search-history-list');
var inputSearchElement = document.querySelector('.header__search-input');
var liElementLength = liElement.length;
ulElement.onmousedown = function (e) {
   e.preventDefault();
   for(var i = 0; i < liElementLength; i++){
      liElement[i].onclick = function (e){
         inputSearchElement.value = e.target.innerText;
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
// btn filter and title current
var homeFilterBtns = document.querySelectorAll(".home-filter__btn");
var titleCurrents = document.querySelectorAll(".title-current");
homeFilterBtns.forEach((homeFilterBtn,index)=>{
   const titleCurrent = titleCurrents[index];
   homeFilterBtn.onclick = function(){
      document.querySelector(".home-filter__btn.btn--primary").classList.remove("btn--primary");
      document.querySelector(".title-current.active").classList.remove("active");
      this.classList.add("btn--primary");
      titleCurrent.classList.add("active");
   }
})
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
   const rates = document.querySelectorAll(".js-rate")
   rates.forEach((rate,clickedIdx)=>{
      rate.addEventListener('click',()=>{
         rates.forEach((otherRate,otherIdx)=>{
            if(otherIdx <= clickedIdx){
               otherRate.classList.add("home-product-item__rated")
            }else{
               otherRate.classList.remove("home-product-item__rated")
            }
         })
      })
   })
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