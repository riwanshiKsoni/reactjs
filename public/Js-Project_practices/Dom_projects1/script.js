const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const myImg = document.getElementById("myImg");
const OnButton = document.getElementById("onButton");
const OffButton = document.getElementById("offButton");



buttons.forEach((button) => {
    console.log(button)
    button.addEventListener("click", (event)=>{
  
   if(event.target.id === "grey" ){
    body.style.backgroundColor = " grey"
   } else{
        body.style.backgroundColor = " white"
 } 
  
  if(event.target.id === "blue" ){
    body.style.backgroundColor = " blue"
   } else{
    //    body.style.backgroundColor = " white"
 } 
  
  if(event.target.id === "yellow" ){
    body.style.backgroundColor = " yellow"
   } else{
       // body.style.backgroundColor = " white"
 } 
   
 
})

    })
//     const onBtn =  document.getElementById("onButton")
//     const offBtn =  document.getElementById("offButton")
//     const img = document.getElementById("myImg")

//     onBtn.addEventListener(click,  (func)=>{
//     if(func.target.id==="onButton"){
//       img.style.backgroundAttachment("")
//     }
//     })

//    onBtn.addEventListener ( click , function changeImage() {
//   const image = document.getElementById('myImg');
//   if (this.onclick("onBtn")) {
//     image.src = "bulb-on.png";
//   } else {
//     image.src = "bulb-off.png";
//   }
// })


// img.forEach((img) => {
//     img.addEventListener("click", (event1) =>{
//         if (event1.target.id === "img"){
//            body.img.style.background = "https://img.favpng.com/20/4/23/incandescent-light-bulb-electric-light-lighting-png-favpng-ZKXf9tsScmMEvY71mgLH0NRCa.jpg"
//         } else {
//            body.img.style.background = "https://w7.pngwing.com/pngs/859/425/png-transparent-light-bulb-illustration-incandescent-light-bulb-lamp-bulb-candle-product-light-thumbnail.png"
//         }
//     })
// })

