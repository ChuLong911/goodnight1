/* tạo sao */

for(let i=0;i<250;i++){

let star=document.createElement("div")

star.className="star"

star.style.left=Math.random()*window.innerWidth+"px"
star.style.top=Math.random()*window.innerHeight+"px"

document.body.appendChild(star)

}



/* mưa sao băng */

function createMeteor(){

let meteor=document.createElement("div")

meteor.className="meteor"

meteor.style.left=Math.random()*window.innerWidth+"px"
meteor.style.top=Math.random()*200+"px"

document.body.appendChild(meteor)

setTimeout(()=>{

meteor.remove()

},1200)

}

setInterval(createMeteor,900)



/* lời chúc */

const wishes=[
"Mong em có giấc mơ đẹp ✨",

"Đừng ngủ quá giờ trưa nhé ☀️",

"Tôi cho phép em được ngủ ngon🌙"

]



/* mở thiệp */

function showWish(planet,id){

let music=document.getElementById("music")
music.play()
let card=document.getElementById("card")

card.innerText=wishes[id-1]

/* lấy vị trí hành tinh */

let rect=planet.getBoundingClientRect()

card.style.left=rect.left+"px"

card.style.top=(rect.top-80)+"px"

card.style.display="block"



createHearts(rect.left+40,rect.top)


}



/* tim bay */

function createHearts(x,y){

for(let i=0;i<10;i++){

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="💖"

heart.style.left=(x+Math.random()*50)+"px"

heart.style.top=y+"px"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},3000)

}

}