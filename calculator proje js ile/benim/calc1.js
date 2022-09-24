

const writerP = document.querySelector(".islem-1");
console.log(writerP);

let array = [];

let islem = "";


document.querySelector(".row").addEventListener("click", (e) => {

    if (e.target.classList.contains("btnNo")) {
        if (writerP.innerText == "0") {
            writerP.innerText = e.target.innerText;
        } else {
            
            writerP.innerText += e.target.innerText;
        }


    } else if (e.target.classList.contains("btnIslem")) {

        array.push(writerP.innerText)
        console.log(array);        
        
        if (array.length == 3) {
            writerP.innerText = hesapla(array);

            array = [];

            array.push(writerP.innerText);
        }
        
        islem = e.target.innerText
        writerP.innerHTML += islem;
        array.push(islem)
        console.log(array);
        
    } else if (e.target.classList.contains("opposite")) {
        // if (!array.includes(writerP.innerText)) {

            // }
        array.push(writerP.innerText);

        if (array.length == 3) {
            writerP.innerText = hesapla(array);

            array = [];


        }          
        

    } else if (e.target.classList.contains("btnAc")) {
        writerP.innerText = "0";
        array = [];
        console.log(array);
    }
    
})


function hesapla(array) {

    let islem1 = array[1];
    let sayı1 = array[2].split(islem1);
    console.log(sayı1);

    switch (islem1) {
        case "+":

            return Number(sayı1[0]) + Number(sayı1[1])
        
        case "-":

            return (sayı1[0]) - (sayı1[1])
        
        case "x":

            return (sayı1[0]) * (sayı1[1])
        
        case "÷":

            return (sayı1[0]) / (sayı1[1])
        
        case "%":

            return ((sayı1[0]) * (sayı1[1])) / 100;
        
    
        default:
            return "Doğru değer giriniz.";
    }

}

