const taxRate = 0.18;
const shippingPrice = 20;
const shippingFreePrice = 200;

window.addEventListener("load", () => {
    //* setItem to localStorage
    //! localstorange  gönderilen hereşey burada değeri güncellensebile storage de de güncellenir.fakat yorumda olmamalı
    localStorage.setItem("taxRate:", taxRate); //! loxalstorage e gönderdik
    localStorage.setItem("shippingPrice:", shippingPrice); //! loxalstorage e gönderdik
    localStorage.setItem("shippingFreePrice:", shippingFreePrice); //! loxalstorage e gönderdik
    
    // //* setItem to sessionStorage
    // //! sessionStorage  gönderilen hereşey burada değeri güncellensebile storage de de güncellenir.fakat yorumda olmamalı
    // localStorage.setItem("taxRate:", taxRate); //! sessionStorage e gönderdik
    // localStorage.setItem("shippingPrice:", shippingPrice); //! sessionStorage e gönderdik
    // localStorage.setItem("shippingFreePrice:", shippingFreePrice);
})


const productDiv = document.querySelector(".products");


productDiv.addEventListener("click", (event) => {
    if (event.target.className ==("fa-solid fa-minus")) {
        if (event.target.parentElement.querySelector(".quantity").innerText > 0) {
            event.target.nextElementSibling.innerText--;
            calculateProductPrice(event.target);
            calculateCardPrice();

        } else {
            if (confirm(`${event.target.closest(".product-info").querySelector("h2").innerText} will be deleted!!`)) { //! burada ürünün silmek istiyormusun diye sormak için confirm kullandık
                event.target.closest(".product").remove();
                calculateCardPrice();
            }
        
        }
    } else if (event.target.classList.contains("fa-plus")) {

        event.target.previousElementSibling.innerText++;
        // event.target.closest(".quantity")++; //! alternatif
        // console.log(event.target.closest(".quantity")); //! alternatif

        calculateProductPrice(event.target);
        calculateCardPrice();

    } else if (event.target.className == "remove-product") {
        event.target.closest(".product").remove();
        calculateCardPrice();
    } else {
        console.log("Other element is Cliked!");
        
    }


});


const calculateProductPrice = (btn) => {
    const productInfoDiv = btn.parentElement.parentElement;
    console.log(productInfoDiv);

    const price = productInfoDiv.querySelector("strong").innerText;
    const quantity = productInfoDiv.querySelector(".quantity").innerText;
    const productTotalDiv = document.querySelector(".product-line-price").innerText;

    productTotalDiv.innerText = (price * quantity).toFixed(2);


}


const calculateCardPrice = () => {
    const productTotalPriceDivs = document.querySelectorAll(".product-line-price");

    let subtotal = 0;
    productTotalPriceDivs.forEach((div) => {
        console.log(div);
        // console.log(typeof div.innerText);
        subtotal += parseFloat(div.innerText);

    });


    const taxPrice = subtotal * localStorage.getItem("taxRate")

    const shippingPrice = subtotal > 0 && subtotal < Number(localStorage.getItem("shippingFreePrice")) ? Number(localStorage.getItem("shippingPrice")) : 0;

    document.querySelector("#cart-subtotal").lastElementChild.innerText = subtotal.toFixed(2);

    document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2);

    document.querySelector("#cart-shipping").children[1].innerText = shippingPrice.toFixed(2);
    
    document.querySelector("#cart-total").lastElementChild.innerText = (subtotal + shippingPrice + taxPrice).toFixed(2);
    
}

