let hamburgerMenu = document.getElementById("hamburger-icon");
let navbar = document.getElementById("navbar");
let closeicon = document.getElementById("close-icon");
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}

if (closeicon) {
  closeicon.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}

//  cart

let prd_qty = document.querySelectorAll(".price");
let tp = document.querySelectorAll(".prd_price");
let total = document.querySelectorAll(".prd_total");
// console.log(prd_qty, tp);
for (let i = 0; i < prd_qty.length; i++) {
  prd_qty[i].addEventListener("input", function () {
    let price_val = Number(prd_qty[i].value);
    let prdprice = Number(tp[i].value);
    total[i].value = price_val * prdprice;

    let sum = 0;
    for (let i = 0; i < total.length; i++) {
      let s = Number(total[i].value);
      sum = sum + s;
    }
    document.querySelector(".cart-total").innerHTML = sum;
    document.querySelector(".final-total").innerHTML = sum;

  });
}

//remove item from cart

const prd_detail=document.querySelector(".first-row");
const prd_remove=document.querySelector("#remove");


for (let i=0; i<prd_detail.length;i++){



}
prd_remove.addEventListener('click',() =>{
prd_detail.style.display="none"
});


