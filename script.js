const closeButton = document.querySelector('#close-lightbox')
const bigPicture = document.querySelector('.main__product');
const prev = document.querySelector('.previous');

const thebogOne = document.querySelector('#lightbox-img')

const fingerImages = [
  { currentIndex: 1, src: "images/image-product-1-thumbnail.jpg" },
  { currentIndex: 2, src: "images/image-product-2-thumbnail.jpg" },
  { currentIndex: 3, src: "images/image-product-3-thumbnail.jpg" },
  { currentIndex: 0, src: "images/image-product-4-thumbnail.jpg" }
];
const bigImages =  [
  { currentIndex: 1, src: "images/image-product-1.jpg" },
  { currentIndex: 2, src: "images/image-product-2.jpg" },
  { currentIndex: 3, src: "images/image-product-3.jpg" },
  { currentIndex: 0, src: "images/image-product-4.jpg" }
];
// RESPONSIVE PART
const nextResponsive = document.querySelector('.next__responsive')
const previousResponsive = document.querySelector('.previous__responsive')


nextResponsive.addEventListener('click', ()=>{

  currentIndex = (currentIndex + 1) % fingerImages.length;
  
  choices.forEach(img => img.classList.remove("main__product__selected"));

  choices[currentIndex].classList.add("main__product__selected");
  thebogOne.src = bigImages[currentIndex].src;
  bigPicture.src = bigImages[currentIndex].src;
})
previousResponsive.addEventListener('click', ()=>{
  currentIndex = (currentIndex - 1 + fingerImages.length) % fingerImages.length;
  
  choices.forEach(img => img.classList.remove("main__product__selected"));

  choices[currentIndex].classList.add("main__product__selected");

  thebogOne.src = bigImages[currentIndex].src;

  bigPicture.src = bigImages[currentIndex].src;
})



document.addEventListener("DOMContentLoaded", () => {
const menuBar = document.querySelector('.menu-bar');
const closeBar = document.querySelector('.close-menu');
const nav = document.querySelector('.nav');

menuBar.addEventListener('click', () => {
  nav.style.display = 'block';
  closeBar.style.display = 'block';
  menuBar.setAttribute("style", "display: none !important;");
  console.log('cliiicked');
});

closeBar.addEventListener('click', () => {
  nav.style.display = 'none';
  closeBar.style.display = 'none';
  menuBar.style.display = 'block';
  
});
});














let currentIndex=0;

const choices = document.querySelectorAll('.main__product__choices');

const selectedPhoto = document.querySelector('.main__product__selected')

const next = document.querySelector('.next');

bigPicture.addEventListener('click', ()=>{

  
  const lightBox = document.querySelector('.lightbox');

  lightBox.style.display = 'flex';

  closeButton.addEventListener('click', ()=>{
    
    lightBox.style.display = 'none';
  })


  next.addEventListener('click', ()=>{

    currentIndex = (currentIndex + 1) % fingerImages.length;
    
    choices.forEach(img => img.classList.remove("main__product__selected"));

    choices[currentIndex].classList.add("main__product__selected");
    thebogOne.src = bigImages[currentIndex].src;
    bigPicture.src = bigImages[currentIndex].src;
  })
  prev.addEventListener('click', ()=>{
    currentIndex = (currentIndex - 1 + fingerImages.length) % fingerImages.length;
    
    choices.forEach(img => img.classList.remove("main__product__selected"));

    choices[currentIndex].classList.add("main__product__selected");

    thebogOne.src = bigImages[currentIndex].src;
  
    bigPicture.src = bigImages[currentIndex].src;
  })

})
choices.forEach(choice =>{
choice.addEventListener('click', ()=>{

    let highQualitySrc = choice.src.replace('-thumbnail', '');
      thebogOne.src = highQualitySrc;
      bigPicture.src = highQualitySrc;
      
      choices.forEach(img => img.classList.remove("main__product__selected"));

    choice.classList.add("main__product__selected");

  })
})
// SECOND PART.
const sabadIcon = document.querySelector('.header__cart');
const hiddenBox = document.querySelector('.hidden__box');
sabadIcon.addEventListener('click', ()=>{
  hiddenBox.classList.toggle('show')
  
})


  const quantityDisplay = document.querySelector('.quantity');
const minusButton = document.querySelector('.order__registration__minus__button')
const plusButton = document.querySelector('.order__registration__plus__button')

let quantity = 0;
plusButton.addEventListener('click', ()=>{
  
  quantity ++;
  
  quantityDisplay.textContent = quantity;
})


minusButton.addEventListener('click', ()=>{
  
  
  if(quantity > 0){
    quantity --;
  quantityDisplay.textContent = quantity;}
  else if(quantity < 0){
    quantityDisplay.textContent = '0';
  }

})


const addtocart = document.querySelector('.addtocart')
addtocart.addEventListener('click',()=>{
  
  const quantityNumber = document.querySelector('.quantity__number');

  const cartCount = document.querySelector('.cart-count')

  if(quantity){
   


    

    cartCount.style.display = 'block';
    cartCount.innerHTML = `${quantity}`;



  let result = quantity * 125.00;
  console.log(result);
  hiddenBox.innerHTML= `
  <h2 class="hidden__box__header">Cart</h2>
  <div class="structure__js">
  <img src="images/image-product-1-thumbnail.jpg" class="image__js">
  <p class="paragraph__js">Fall Limited Edition Sneakers x ${quantity} =  <strong>  ${result}.00$ </strong></p>
  <button class="trash"><img src="images/icon-delete.svg"></button>
  </div>
  
  <button class="checkout">Chekout</button>
  `;

  
}
  const trash = document.querySelector('.trash');
  trash.addEventListener('click', ()=>{
    hiddenBox.innerHTML =`
    <h2 class="hidden__box__header">Cart</h2>
      <p class="hidden__box__p">Your cart is empty!</p>
    `
    cartCount.style.display = 'none';
    
  })
  const checkoutButton = document.querySelector('.checkout');
  checkoutButton.addEventListener('click', ()=>{
    hiddenBox.classList.toggle('show')
  })
  
})
