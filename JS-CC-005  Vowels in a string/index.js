//** METİN YAKALAMA */

let writer = document.getElementsByClassName("form-control");
console.log(writer);

let buton = document.querySelector(".btn");
console.log(buton);


// console.log(volwels);

const counter = () => {
    let count = 0;
    let volwels = ["a","e","ı","i","o","ö","u","ü","A","E","İ","I","O","Ö","U","Ü"];
    console.log(volwels);
    for (item of writer.value) {
        volwels.includes(item) && count++;
    }
    return count

}

console.log(counter());

const newDiv = document.createElement("p");
div.appendChild(newDiv);

// const harf = document.querySelector(".form-control").addEventListener("keydown", (e) => {
//     console.log(e);
// })


// let count = 0;
// const girilenMetin = (writer.value).forEach((harf) => {

//     volwels.includes(harf.lowerCase()) && count++;
//     return count;
// });

// console.log(girilenMetin);


// ** BUTON START */

buton.addEventListener("click", function (e) {
    let writer = document.querySelector(".form-control").value;

})