const kreditype = document.getElementById("kreditype").value;

const vade = document.querySelector("#vade").value;

const tutar = document.querySelector("#tutar").value;

const buton = document.querySelector("button");

console.log(kreditype.value);
console.log(vade);
console.log(tutar);
console.log(buton);

//** Faiz oranı Krediye Göre */

const faiz = () {
    let kreditype = document.getElementById("kreditype").value;
    let faizOrani;
    if (kreditype == "Konut") {
        faizOrani = 1.68;
    } else if (kreditype == "Ihtiyac") {
        faizOrani = 2.25;
    } else if (kreditype == "Arac") {
        faizOrani = 1.90;
    } else {
        alert(`Kredi tipini seçiniz.`)
    }
    return faizOrani
};

buton.addEventListener('click', function (e) {
    e.preventDefault(); //! bilgi gönderimini manuael yapmamızı sağlar.Sayfa yenilemeyi önleme için formlarda çünkü yenileme yapılınca bilgiler gidiyor 
    console.log(console.log(faiz));
    
})


const hesapla = () => {
    let faiz = faiz();
    const tutar = document.querySelector("#tutar").value;
    const vade = document.querySelector("#vade").value;

    let taksitTutari;
    ödemeTutari = tutar * ((faiz * Math.pow(1 + faiz, vade)) / ((Math.pow(1 + faiz, vade)) - 1)) //? üssü yaptık bu metodla
    
    return ödemeTutari

}












//* PSUDEO CODE
//değişken tanımlama
// faiz fonk tanımlanacak
// ödeme tablosu cıktı
// konut -1,68 ihtiyaç-2,25 araç-1,90



