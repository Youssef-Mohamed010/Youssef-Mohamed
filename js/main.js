
// var width = window.innerWidth;

$("#bar_icon").click(function(){
    $(".second_nav_links").slideToggle(500)
    
})


let b_header = document.getElementById("b-header") 
// if(width>850){
//     document.getElementById("second_nav_links").style.display = "none !important"
// }

// document.getElementById("bar_icon").addEventListener("click" , function(){
//     document.getElementById("second_nav_links").style.display = "block"
// })

// document.getElementById("bar_icon").addEventListener("click" , function(){
//     document.getElementById("second_nav_links").style.display = "block"
// }
b_header.addEventListener("click", function(){
    window.scroll({
        top: 1000,
        behavior: "smooth",
    })
})

var b_doctor = document.getElementById("b-doctor")
let chat = document.getElementById("chat")
var close = document.getElementById("close-chat")
var b_doctor2 = document.getElementById("b-doctor2")
var b_doctor3 = document.getElementById("b-doctor3")
var b_doctor4 = document.getElementById("b-doctor4")
var b_doctor5 = document.getElementById("b-doctor5")    
var send = document.getElementById("send")
var text_area = document.getElementById("text-area")
b_doctor.onclick = function(){
    chat.style.display = "block"
}
close.onclick = function(){
    chat.style.display = "none"
}
b_doctor2.onclick = function(){
    chat.style.display = "block"
}
b_doctor3.onclick = function(){
    chat.style.display = "block"
}
b_doctor4.onclick = function(){
    chat.style.display = "block"
}
b_doctor5.onclick = function(){
    chat.style.display = "block"
}
send.addEventListener("click", function(){
    if(send.hasClass("send")){
        text_area.append('<br /><p class="right">' + text_area.sibling("textarea".value() + "</p>"))
    }
})