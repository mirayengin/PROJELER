let metinAlani = document.querySelector(".metinAlani");
const btn = document.querySelector(".btn");
const mesaj = document.querySelector(".msg");
const unluHarfler = ["a", "e", "i", "o", "u", "ö", "ü", "ı"];
let count = 0;

btn.addEventListener("click", () => {
  metinAlani1 = (metinAlani.value.toLowerCase()).split("");
 
  for (let i = 0; i < metinAlani1.length; i++) {
    for (let k = 0; k < unluHarfler.length; k++) {
        if(metinAlani1[i] == unluHarfler[k]){
            count++;
      }
    }
  }

  mesaj.innerHTML = `<p class="msg text-white">There are ${count} vowels in <span class="span text-danger ">${metinAlani.value}</span></p>`
  metinAlani.value = "";
});






// let count = 0;
// const counter = () => {
//     if(!metinAlani){
//         return msg.innerText = "Plesae enter your thinks";
//     }else{
//         for(item of metinAlani.value){
//             if(unluHarfler.includes(item)){
//                 count++;
//             }
//         }
//         return count;
//         console.log(count);
//     }

//     let metinAlani = metinAlani.value;
//     console.log(metinAlani);
// }

// document.querySelector(".btn").addEventListener("click", () => {
//     let metinAlani = document.querySelector(".metinAlani").value;
//     const msg =document.querySelector(".msg");
// console.log(metinAlani);
// console.log(typeof metinAlani);

// if(!metinAlani){
//     msg.innerText = "Plesae enter a wovels";
// }else {
//     // for(item of unluHarfler){
//     //     if(metinAlani.includes(item)){
//     //         count++;
//     //     }

//     // }

// };
