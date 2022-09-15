//** METİN YAKALAMA */

let writer = document.getElementsByClassName("form-control");
console.log(writer);



let buton = document.querySelector(".btn");
console.log(buton);

let volwels = ("aeıioöuü").split("");

console.log(volwels);

const harf = document.querySelector(".form-control").addEventListener("keydown", (e) => {
    console.log(e);
})


// let count = 0;
// const girilenMetin = (writer.value).forEach((harf) => {

//     volwels.includes(harf.lowerCase()) && count++;
//     return count;
// });

// console.log(girilenMetin);


//** BUTON START */

// buton.addEventListener("click", function (e) {
//     let writer = document.querySelector(".form-control").value;

// })