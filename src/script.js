const fs = require("fs");

function set_loadingIcon(display){
    document.getElementById("loadingIcon").style.display = display;
}

document.getElementById("start").onclick = ()=>{
    
    document.getElementById("start").style.display = "none"
    document.getElementById("loading_wait").style.color = "orange"
    document.getElementById("loading_wait").innerHTML = "Mr Beast is improving your pc, please wait..."
    document.getElementById("loading_wait").style.display = "block"
    

    var audio = new Audio('./sound/mrbeast.mp3');
    audio.play();

    mrBeast_imgs()
}

setTimeout(function() {

    set_loadingIcon("none")

    document.getElementById("loading_wait").style.display = "none"
    document.getElementById("start").style.display = "block"

    
    
    }, 3*1000);


function mrBeast_imgs(){

    var images = fs.readdirSync(__dirname+"/mrbeast_img");
    time_set1 = images.length/14
    var intervalSet1 = setInterval(function(){
        var img = images[Math.floor(Math.random() * images.length)];
        document.getElementById("mrbeast_img").src = "./mrbeast_img/"+img
    },time_set1*1000)

    //aftrer 14 seconds the music kicks in
    setTimeout(function(){
        clearInterval(intervalSet1)

        intervalSet1 = setInterval(function(){
            var img = images[Math.floor(Math.random() * images.length)];
            document.getElementById("mrbeast_img").src = "./mrbeast_img/"+img
        },100)

        setTimeout(function(){
            clearInterval(intervalSet1)
            alert("Wow! Your pc is now faster!\nYou may close this program now.")
        },119*1000)

    },13*1000)


}