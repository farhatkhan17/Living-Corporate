var menu = document.querySelector("#menu")
var menubar = document.querySelector("#menubar")
var line1 = document.querySelector("#line1")
var line2 = document.querySelector("#line2")
var line3 = document.querySelector("#line3")
var nav = document.querySelector("#nav")
var nav1svg = document.querySelector("#nav1 h1 svg")
var nav2i = document.querySelector("#nav2 i")
var nav3bt1one = document.querySelector("#nav3btn1one")
var nav3bt2two = document.querySelector("#nav3btn2two")
var nav2 = document.querySelector("#nav2")
var nav1svg = document.querySelector("#nav1 svg")

var flag = 0

menu.addEventListener("click",function(){
    if(flag===0){
        line1.style.rotate = "33deg"
        line2.style.opacity = 0
        line3.style.rotate = "-35deg"
        menubar.style.top =" 0%"
        menubar.style.scale = 4

        nav.style.backgroundColor = "black"
        line1.style.backgroundColor = "white" 
        line3.style.backgroundColor = "white" 

        nav1svg.style.color = "white"

        nav2i.style.color = "white"
        nav3btn1.style.backgroundColor = "black"
        nav3btn1one.style.color = "white"
        nav3btn2two.style.color = "black"
        nav3btn2.style.backgroundColor = "#FEF9F3"
        nav.style.borderColor = "white"
        nav3btn1one.style.borderColor = "white"
        nav2.style.borderRightColor = "white"
        nav1svg.style.filter = "invert(10)"
        nav1svg.style.transition = "all ease-out 0.5s"
        flag = 1
    }else{
        line1.style.rotate = "0deg"
        line2.style.opacity = 1
        line3.style.rotate = "0deg"
        menubar.style.top =" -100%"
        menubar.style.scale = 0
        nav.style.backgroundColor = "#FEF9F3"
        line1.style.backgroundColor = "black" 
        line3.style.backgroundColor = "black" 
        nav1svg.style.filter = "invert(0)"
        nav1svg.style.transition = "all ease-out 0.5s"
        nav2i.style.color = "black"
        nav3btn1.style.backgroundColor = "#FEF9F3"
        nav3btn1.style.color = "black"
        nav3btn2.style.color = "white"
        nav3btn2.style.backgroundColor = "black"
        nav3btn1one.style.color = "black"
        nav3btn2two.style.color = " rgb(239, 238, 238)"
        nav.style.borderColor = "black"
        nav3btn1one.style.borderColor = "black"
        nav2.style.borderRightColor = "black"


        flag=0
    
    }
})

var searchbar = document.querySelector("#searchbar")
var crossline1 = document.querySelector("#crossline1")
var crossline2 = document.querySelector("#crossline2")
var cross = document.querySelector("#cross")

var plug = 0

nav2i.addEventListener("click",function(){
    if(plug===0){
        searchbar.style.opacity = 1
        searchbar.style.top = "0%" 
        crossline1.style.rotate = "33deg"
        crossline2.style.rotate = "-35deg"
        plug = 1
    }
    
})

cross.addEventListener("click",function(){
    if(plug===1){
        searchbar.style.opacity = 0
        searchbar.style.top = "-150%" 
        crossline1.style.rotate = "0deg"
        crossline2.style.rotate = "0deg"
        
        plug = 0
        
    }
    
})   
       
gsap.from("#nav",{
           y:"-100%",
           duration:1,
           delay:0.3
}) 
gsap.from("#right, #left",{
    y:"100vh",
    duration:1,
    delay:0.3
}) 

var tl = gsap.timeline({repeat: -1,});

    tl.to("#img1 img",{
        scale:1,
        duration:1,
        opacity:1,
        filter:"blur(10)"
    })
    tl.to("#img2 img",{
        scale:1,
        delay:4,
        duration:1,
        opacity:1,
    })
    tl.to("#img3 img",{
        scale:1,
        delay:4,
        duration:1,
        opacity:1,
    })
    tl.to("#img4 img",{
        scale:1,
        delay:4,
        duration:1,
        opacity:1,
    })
    tl.to("#img1 img",{
        scale:1,
        delay:2,
        duration:1,
        opacity:1,
    })
    tl.to("#img2 img",{
        scale:1,
        delay:1,
        duration:1,
        opacity:1,
    })





var textWrapper = document.querySelector('#first h1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
var Wrapper1 = document.querySelector('#second h1');
Wrapper1.innerHTML = Wrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var Wrapper = document.querySelector('#third h1');
Wrapper.innerHTML = Wrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var Wrapper2 = document.querySelector('#fourth h1');
Wrapper2.innerHTML = Wrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var tl2 = gsap.timeline({repeat: -1,})
var repeat = tl2.repeat( 
gsap.timeline({repeat: -1},
anime.timeline({loop:-1})
  .add({
    targets: '#first h1 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2500,
    delay: (el, i) => 1000 + 30 * i
  }).add({
    targets: '#first h1 .letter',
    translateY: [0,100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  })
//   anime.timeline({})
  .add({
    targets: '#second h1 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 30 * i
  }).add({
    targets: '#second h1 .letter',
    translateY: [0,100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  })


//   anime.timeline({})
  .add({
    targets: '#third h1 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 20 * i
  }).add({
    targets: '#third h1 .letter',
    translateY: [0,100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  })
//   anime.timeline({})
  .add({
    targets: '#fourth h1 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 20 * i
  }).add({
    targets: '#fourth h1 .letter',
    translateY: [0,100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  })
 ));










 var firstWrapper = document.querySelector('#first h4');
firstWrapper.innerHTML = firstWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
var secondWrapper = document.querySelector('#second h4');
secondWrapper.innerHTML = secondWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var thirdWrapper = document.querySelector('#third h4');
thirdWrapper.innerHTML = thirdWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var fourthWrapper = document.querySelector('#fourth h4');
fourthWrapper.innerHTML = fourthWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var tl3 = gsap.timeline({repeat: -1,})
var repeat = tl3.repeat( 
gsap.timeline({repeat: -1},
anime.timeline({loop:-1})
  .add({
    targets: '#first h4 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2500,
    delay: (el, i) => 1000 + 30 * i
  }).add({
    targets: '#first h4 .letter',
    translateY: [0,100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  })
//   anime.timeline({})
  .add({
    targets: '#second h4 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 30 * i
  }).add({
    targets: '#second h4 .letter',
    translateY: [0,100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  })


//   anime.timeline({})
  .add({
    targets: '#third h4 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 20 * i
  }).add({
    targets: '#third h4 .letter',
    translateY: [0,100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  })
//   anime.timeline({})
  .add({
    targets: '#fourth h4 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 20 * i
  }).add({
    targets: '#fourth h4 .letter',
    translateY: [0,100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  })
 ));

















var text1 = document.querySelector("#text1")
var text2 = document.querySelector("#text2")
var btn = document.querySelector("#page4lb button")
var btn1 = document.querySelector("#lb1")
var btn2 = document.querySelector("#lb2")
var page4right = document.querySelector("#page4right")

var flag = 0
btn2.addEventListener("click",function(){
    if(flag===0){
        text1.innerHTML= "THE BREAK ROOM"
        text1.style.fontSize= "85px"
        text1.style.whiteSpace= "nowrap"
        btn2.style.transform = "translateY(-6px) translateX(6px)"
        btn2.style.backgroundColor = "white"
        btn2.style.boxShadow = "-3px 5px 0 0 black"
        btn1.style.transform = "translateY(0px) translateX(0px)"
        btn1.style.backgroundColor = "#895434"
        btn1.style.boxShadow = "0px 0px 0 0"
        page4right.style.backgroundImage = "URL(https://livingcorporate.workshopbuilt.com/wp-content/uploads/2022/07/LC-102.jpg)"
       
        flag = 1
    }
    })
btn1.addEventListener("click",function(){
    if(flag===1){
        text1.innerHTML= "THE GROUP CHAT"
        text1.style.fontSize= "85px" 
    btn1.style.transform = "translateY(-6px) translateX(6px)"
    btn1.style.backgroundColor = "white"
    btn1.style.boxShadow = "-3px 5px 0 0 black"
    btn2.style.transform = "translateY(0px) translateX(0px)"
    btn2.style.backgroundColor = "#895434"
    btn2.style.boxShadow = "0px 0px 0 0"
    page4right.style.backgroundImage = "URL(https://livingcorporate.workshopbuilt.com/wp-content/uploads/2022/04/LC-groupchat-cover.jpg)"
    flag = 0
    
    }
})

var aaa = document.querySelectorAll(".page5box")  

  aaa.forEach(function(elem){
    elem.addEventListener("mouseenter", function() {
        elem.childNodes[1].style.opacity = 1
        elem.childNodes[1].style.scale = 1
    })
    elem.addEventListener("mouseleave", function() {
        elem.childNodes[1].style.opacity = 0
        elem.childNodes[1].style.scale = 0

    })
    elem.addEventListener("mousemove",function(dets){
        elem.childNodes[1].style.left = `${dets.x/2}px`
    })
})

var aaa = document.querySelectorAll(".items")  

  aaa.forEach(function(elem){
    elem.addEventListener("mouseenter", function() {
        elem.childNodes[1].style.scale = 5
        elem.childNodes[1].style.borderRadius =0
        nav.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function() {
        elem.childNodes[1].style.scale = 0
        elem.childNodes[1].style.borderRadius ="50%"

    })
})
