const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
    //!setItem 
    localStorage.setItem("taxRate", taxRate); //? kapanıncada gitmez browser
    localStorage.setItem("shippingPrice", shippingPrice);
    localStorage.setItem("shippingFreePrice", shippingFreePrice);

    //!setItem
    sessionStorage.setItem("taxRate", taxRate); //?browser kapanınca gider 
    sessionStorage.setItem("shippingPrice", shippingPrice);
    sessionStorage.setItem("shippingFreePrice", shippingFreePrice);

    
})

const productsDiv = document.querySelector(".products"); productsDiv.addEventListener("click", (event) => {

    if (event.target.className == "fa-solid fa-minus") {
        // console.log("minus btn is clicked!");
        
        if (event.target.parentElement.querySelector("quantity").innerText > 1) {
            event.target.parentElement.querySelector("quantity").innerText--;
            calculateProductPrice(event.target);
            calculateCardPrice();
            
        } else {
            if (confirm(`${event.target.parentElement.parentElement.querySelector("h2").innerText} will be deleted`)) //? yes no seçeneği sunuyor
                //! remove
                event.target.parentElement.parentElement.parentElement.remove();
                calculateCardPrice()
            
        }

        
    }else if (event.target.classList.contains("fa-plus")) {
        // console.log("plus btn is clicked!");
        event.target.previousElementSibling.innerText++;
        calculateProductPrice();
        calculateCardPrice();
    }else if (event.target.className == "remove-product") {
        // console.log("remove btn is clicked!");
        event.target.parentElement.parentElement.parentElement.remove(event.target);
        calculateCardPrice();

    } else {
        // console.log("other element is clicked!");
    }
    
})

const calculateProductPrice = (btn) => {
    console.log(clickedBtn);
    const productInfoDiv = btn.parentElement.parentElement;

    const price = productInfoDiv.querySelector(".product-price strong").innerText;

    const quantity = productInfoDiv.querySelector(".quantity").innerText;

    const productTotalDiv = productInfoDiv.querySelector(".product-line-price");

    productTotalDiv.innerText = (price * quantity).toFixed(2);

}


const calculateCardPrice = () => {
    const productTotalPriceDivs = document.querySelectorAll(".product-line-price");


// forEach ==> NodeList={,array}
    // const productTotalPriceDivs = document.getElementsByClassName(".product-line-price");

    let subTotal = 0;

    productTotalPriceDivs.forEach(div => {
        subTotal += parseFloat(div.innerText);
    })

    const taxPrice = subTotal * localStorage.getItem("taxRate");

    const shippingPrice = parseFloat((subTotal > 0 && subTotal < localStorage.getItem("shippingFreePrice") ? localStorage.getItem("shippingPrice") : 0));

    document.querySelector("#cart-subtotal").lastElementChild.innerText = subTotal.toFixed(2);

    document.querySelector("#cart-tax p:nth-child(2)").lastElementChild.innerText = taxPrice.toFixed(2);

    document.querySelector("#cart-shipping").children[1].innerText = shippingPrice.toFixed(2);

    document.querySelector("#cart-total").lastElementChild.innerText = (subTotal + shippingPrice + taxPrice).toFixed(2);



}












// const taxRate = 0.18;
// const shippingPrice = 15;
// const shippingFreePrice = 300;

// window.addEventListener("load", ()=>{
    //set items to LocalStorage
    // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("shippingFreePrice", shippingFreePrice);

     //set items to sessionStorage
    //  sessionStorage.setItem("taxRate", taxRate);
    //  sessionStorage.setItem("shippingPrice", shippingPrice);
    //  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
// });

// const productsDiv = document.querySelector(".products");
// //Capturing vs. Bubbling
// productsDiv.addEventListener("click", (event)=>{
//     if(event.target.className == "fa-solid fa-minus"){
//         //console.log("minus btn is clicked!");
//         if(event.target.parentElement.querySelector(".quantity").innerText > 1){
//             event.target.parentElement.querySelector(".quantity").innerText--;
//             calculateProductPrice(event.target);
//             calculateCartPrice();
//         }
//         else{
//             if(confirm("Product will be removed???")){
//                 //remove
//                 event.target.parentElement.parentElement.parentElement.remove();
//                 calculateCartPrice();
//             }
//         }
//     }
//     else if(event.target.classList.contains("fa-plus")){
//         //console.log("plus btn is clicked!");
//         event.target.previousElementSibling.innerText++;
//         calculateProductPrice(event.target);
//         calculateCartPrice();
//     }
//     else if(event.target.className == "remove-product"){
//         //console.log("remove btn is clicked!");
//         event.target.parentElement.parentElement.parentElement.remove();
//         calculateCartPrice();
//     }
//     else{
//         //console.log("other element is clicked!");
//     }
// });

// const calculateProductPrice = (btn) =>{
//     const productInfoDiv = btn.parentElement.parentElement;
//     //console.log(productInfoDiv);
//     const price = productInfoDiv.querySelector(".product-price strong").innerText;
//     const quantity = productInfoDiv.querySelector(".quantity").innerText;
//     const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
//     productTotalDiv.innerText = (price * quantity).toFixed(2);
//     //alert(quantity);

// }

// const calculateCartPrice = () =>{
//     const productsTotalPricesDivs = document.querySelectorAll(".product-line-price");
//     //foreach ==> NodeList, Array
//     //const productsTotalPricesDivs = [...document.getElementsByClassName("product-line-price")];

//     let subtotal = 0;
//     productsTotalPricesDivs.forEach(div =>{
//         subtotal += parseFloat(div.innerText);
//     });
//     //console.log(subtotal);
//     const taxPrice = subtotal * localStorage.getItem("taxRate");

//     const shippingPrice = (subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice") ? localStorage.getItem("shippingPrice") : 0)

//     console.log(shippingPrice);
// }