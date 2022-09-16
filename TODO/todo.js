
// let mychck = document.querySelectorAll("input");
// console.log(mychck);

// let uzunluk = mychck.length;
// console.log(uzunluk);



let tikSayisi = 0;

const check = document.querySelector("#input1");
const label = document.querySelector(".form-check-label");

check.addEventListener("click", () => {
    if (check.checked == true) {
        tikSayisi++;

    } else {
        tikSayisi--;
        label.innerHTML = ` <label class="form-check-label" for="exampleCheck1"> <del>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, mollitia?</del>  </label>`
    }
    
})


const newElement = document.createElement("p");

document.appendChild("newElement");