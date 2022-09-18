
const input = document.querySelectorAll(".form-check-input");

const container = document.querySelector(".container");
console.log(container);

const completed = document.querySelectorAll(".checked");
console.log(completed);

const uzunluk = document.querySelectorAll(".form-check").length;
console.log(uzunluk);



input.forEach((item) => {
    console.log(item);
    
    item.onclick = () => {
        console.log(item);
        item.classList.add("checked");
        item.nextElementSibling.classList.toggle("text-decoration-line-through")
        item.classList.toggle("text-bg-success")
        
    }
    
})






const newP = document.createElement("p");

container.appendChild(newP);
newP.classList.add("text-center")
newP.classList.add("displat-10")
newP.classList.add("text-success")


newP.innerText = `${completed} OUT OF ${uzunluk} TASKS COMPLETED` 
