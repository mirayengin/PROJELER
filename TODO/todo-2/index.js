

const input = document.querySelector(".form-control");
console.log(input);

const addBtn = document.querySelector(".btn");
console.log(addBtn);

const results = document.querySelector(".results");

window.onload = () => {
    input.focus();
}

addBtn.addEventListener("click", () => {
    if (!input.value) {
        alert("Yapılacak bir madde giriniz.")
    } else {
        results.innerHTML += `<div class="result"><i class="fa-regular fa-square"></i><p class="p">${input.value}</p><i class="fa-sharp fa-solid fa-trash-can"></i></div>`;
        
        input.value = "";
    }
})


input.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        addBtn.click();
        input.value = "";
    }
})

results.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains("fa-square")) {
        e.target.parentElement.classList.add("bg");
        e.target.classList.remove("fa-regular","fa-square")
        e.target.classList.add("fa-solid", "fa-check");        

    } else if (e.target.classList.contains("fa-check")) {
        e.target.parentElement.classList.remove("bg");
        e.target.classList.add("fa-regular","fa-square")
        e.target.classList.remove("fa-solid", "fa-check"); 

        
    }
})




















// const creatValue = () => {

//     const silmeTool = document.querySelectorAll(".fa-trash");
//     silmeTool.forEach((item) => {
//         item.addEventListener("click", () => {
//             item.parentElement.remove();
//         })
//     })
// }


// addBtn.addEventListener("click", () => {

//     if (input.value) {
//         creatValue();        
//     }   
//     input.value = "";

// })


// input.addEventListener("keydown", (tus) => {
//     if (tus.code == "Enter") { 
//         if (input.value) {
//             creatValue();        
//         }       
    
//         input.value = "";
//     }

// });




