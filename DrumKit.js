// alert("thanks !")
var buttonLength=document.querySelectorAll(".drum").length;


    // document.querySelector("h1").innerHTML=i;
    for(var i=0;i<buttonLength;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHtml= this.innerHTML;
    maksound(buttonInnerHtml);

});
}
document.addEventListener("keydown",function(event){
    maksound(event.key);
})
function maksound(key)
{
    switch(key)
    {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "k":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "l":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        default :
            console.log(buttonInnerHtml);
    }
}