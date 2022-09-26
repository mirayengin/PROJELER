const taxRate = 0.18;
const shippingPrice = 20;
const shippingFreePrice = 200;
window.addEventListener("load", () =>{
    //*setItem to local Storage
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
    localStorage.setItem("shippingFreePrice", shippingFreePrice);
    //*setItem to sessionStorage
    sessionStorage.setItem("taxRate", taxRate);
    sessionStorage.setItem("shippingPrice", shippingPrice);
    sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});
const productsDiv = document.querySelector(".products");
//!event target dediğimiz için heryeri seçtiğimiz için seçilen heryerin tanımlanması gerekir.
productsDiv.addEventListener("click", (event) =>{
if(event.target.className == "fa-solid fa-minus"){
    if(event.target.parentElement.querySelector(".quantity").innerText > 0){
        event.target.nextElementSibling.innerText--;
        calculatorProductPrice(event.target);
        calculatorCardPrice();
    }
    else{
        if(confirm(`${event.target.closest(".product-info").querySelector("h2").innerText} will be deleted!!`)){
            event.target.closest(".product").remove();
            calculatorCardPrice();
        }
    }
}
else if(event.target.classList.contains("fa-plus")){
    event.target.previousElementSibling.innerText++;
    calculatorProductPrice(event.target);
    calculatorCardPrice();
}
else if(event.target.className == "remove-product"){
    event.target.closest(".product").remove(); //! buda kısa yolu
    // event.target.parentElement.parentElement.parentElement.remove();
    calculatorCardPrice();    
}
else{
console.log("other element is clicked");
}
});



const calculatorProductPrice = (btn) => {
    const productInfoDiv = btn.parentElement.parentElement;
    const price =productInfoDiv.querySelector("strong").innerText;
    const quantity = productInfoDiv.querySelector(".quantity").innerText;
    const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
    
    productTotalDiv.innerText = (price * quantity).toFixed(2);
}
const calculatorCardPrice = () => {
    const productTotalPriceDivs = document.querySelectorAll(".product-line-price");
    let subTotal = 0;
    productTotalPriceDivs.forEach((div) =>{
        subTotal += parseFloat(div.innerText);
        
    });
    const taxPrice = subTotal * localStorage.getItem("taxRate");
    const shippingPrice = parseFloat(subTotal) > 0 && subTotal < Number(localStorage.getItem("shippingFreePrice")) ? Number(localStorage.getItem("shippingPrice")) : 0;
    document.querySelector("#cart-subtotal").lastElementChild.innerText = subTotal.toFixed(2);
    document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2);
    document.querySelector("#cart-shipping").children[1].innerText = shippingPrice.toFixed(2);
    document.querySelector("#cart-total").lastElementChild.innerText = (subTotal + taxPrice + shippingPrice).toFixed(2);
}