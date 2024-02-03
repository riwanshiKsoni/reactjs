const clock = document.getElementById('clock')
// const banner  = document.getElementById('banner')

let date = new Date()
console.log(date.toLocaleTimeString())


setInterval( ()=>{
    let date = new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()
}, 1000)