
// const calc = document.getElementsByClassName("calculator");
// console.log(calc);

const firstP = document.querySelector(".islem-1");
console.log(firstP);


let islem = "";

let array = [];


document.querySelector(".calculator").addEventListener("click", (e) => {
    
    if (e.target.classList.contains("btnNo")) {

        firstP.innerText += e.target.innerText; //! rakamları ekrana yazdırdık 
        console.log(e.target.innerText);
        
        
    } else if (e.target.classList.contains("btnIslem")) {

        array.push(firstP.innerText); //! basılan tuştaki rakam değerini diziye attık. Ayrıca çok basamaklı sayı için buraya burada array attık değeri
        console.log(array);

        if (array.length == 3) {
            
            firstP.innerText = hesapla(array);
    
            array = [];
    
            array.push(firstP.innerText)
        } else if (Number(array[1]) == NaN) {
            alert("İşlem için ikinci değeri giriniz");
        }


        islem = e.target.innerText; //! artı eksi bölme çarpma
        firstP.innerText += islem; //! işlem operatörünü ekledik ekrana

        array.push(islem); //! işlem operatörünü ekledik diziye
        console.log(islem);
        console.log(array);

        
    } else if (e.target.classList.contains("opposite")) {
        
        array.push(firstP.innerText);
        console.log(array);
        
        if (array.length == 3) {
            
            firstP.innerText = hesapla(array);
            
            array= [];
            
            // array.push(firstP.innerText)
        } else {
            alert("İşlem için ikinci değeri giriniz");
        }
        

    } else if (e.target.classList.contains("btnAc")) {
        firstP.innerText = "";
        array = [];
        console.log(array);
        }
    

});
    


function hesapla(array) {
    console.log(array);
    let islem1 = array[1];
    let sayi1 = (array[2]).split(islem1);
    switch (islem1) {
        case "+":
            return Number(sayi1[0]) + Number(sayi1[1]);
        
        case "-":
            return sayi1[0] - sayi1[1]
        
        case "x":
            return sayi1[0] * sayi1[1]
        
        case "÷":
            return sayi1[0] / sayi1[1]
        
        case "%":
            return (sayi1[0] * sayi1[1]) / 100;
            
            
    
        default:
            return "Doğru işlemi seçiniz"
    }
    
}