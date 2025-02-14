userClickedButton=[];
let level=0
let s=0
function nextSequence(){
colors=["blue","yellow","green","red"];
random=Math.floor(Math.random()*4);
level=level+1;
$("#level-title").text("Level "+level);
return colors[random];
}
$(document).on("keydown",function(){
    s=nextSequence();
    $("#"+s).fadeOut(100).fadeIn(100);
})
function levelup(){
    s=nextSequence();
$("#"+s).fadeOut(100).fadeIn(100);}

$(".btn").on("click",function(e){
    animatinpress(e.target.id)
    if(s===e.target.id){
    var audio=new Audio("./sounds/"+s+".mp3"); 
    audio.play();
    levelup()
}
    else{
        var audio=new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },100)
        level=0;
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }

})
function animatinpress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(function (){
        $("#"+currentColor).removeClass("pressed");
    },200)
    
}