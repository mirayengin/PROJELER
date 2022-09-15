const buton = document.querySelector("button");

console.log(krediTipi);
console.log(vade);
console.log(tutar);
console.log(buton);

const faiz = () => {
let krediTipi = document.querySelector("#krediTipi").value;
  let faizOrani;
  if (krediTipi == "konut") {
    faizOrani = 1.68;
  } else if (krediTipi == "ihtiyac") {
    faizOrani = 2.25;
  } else if (krediTipi == "arac") {
    faizOrani = 1.9;
  } else {
    alert(`Kredi Tipi Seçimi Yapınız.`);
  }
  return faizOrani;
};



const hesapla = () => {
    const tutar = document.querySelector("#tutar").value;
    const vade = document.querySelector("#vade").value;
    console.log(tutar);
    console.log(vade);
    console.log(vade);
  let odemeTutari;
  odemeTutari = tutar * ((faiz() * (Math.pow( 1+(faiz()/100) ,vade ))) / ((Math.pow(1+(faiz()/100),vade ))-1))
  return odemeTutari;
};

buton.addEventListener("click", function (e) {
    e.preventDefault();
   console.log(hesapla());
});
//*PSUDEO KOD;
// değişken tanımlama
// faiz fonksiyonu tanımlanacak
//* konut 1.68, ihtiyac 2.25, arac 1.9
// ödeme tablosu çıktı versin