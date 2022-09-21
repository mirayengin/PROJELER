

const input = document.querySelector(".form-control");
console.log(input);

const addBtn = document.querySelector(".btn");
console.log(addBtn);

const ulElement = document.querySelector(".ul")

const creatValue = () => {
    const creatLİ = document.createElement("li");
    creatLİ.class = "list";
    creatLİ.innerHTML += `<a href="#">${input.value.toUpperCase()}</a><i class="fa-solid fa-trash">`; 
    ulElement.appendChild(creatLİ);
    creatLİ.style.textDecoration = "none";
    
    input.value = "";



    const silmeTool = document.querySelectorAll(".fa-trash");

    silmeTool.forEach((item) => {
        item.addEventListener("click", () => {
            item.parentElement.classList.add("d-none")
        })
    })
}


addBtn.addEventListener("click", () => {

    if (input.value) {
        creatValue();        
    }
    

    input.value = "";

    



})


input.addEventListener("keydown", (tus) => {
    if (tus.code == "Enter") { 
        if (input.value) {
            creatValue();        
        }       
    
        input.value = "";
    }

});




