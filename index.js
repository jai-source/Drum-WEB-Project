for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(key){
        var innerhtml = this.innerHTML;
        sound(innerhtml);
        animation(innerhtml);
    })
      
}
document.addEventListener("keydown" , function(event){
    sound(event.key);
    animation(event.key);
})
function sound(key){
    switch(key){
            case "w":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "a":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "s":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "d":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "j":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "k":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "l":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
                
        }

}

function animation(currentkey){
    document.querySelector("." + currentkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+ currentkey).classList.remove("pressed");
        
    }, 100);
}