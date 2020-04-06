var playleft = 7;
document.getElementById("win").style.display = "none";
document.getElementById("lost").style.display = "none";
document.getElementById("play-Again").style.display = "none";
document.getElementById("win-img").style.display = "none";
document.getElementById("sorry-img").style.display = "none";

document.getElementById("roll-dice").addEventListener('click', function (e) {
    //console.log("shanto");
    mainGame();


    e.preventDefault();
})

document.getElementById("play-Again").addEventListener('click', function (e) {
    //console.log("shanto");
  
    window.location.reload();

    e.preventDefault();
})

function mainGame() {


    playleft--;

    document.getElementById("show").innerHTML = playleft;

    if (playleft == 0) {
        document.getElementById("roll-dice").disabled = true;
        document.getElementById("play-Again").style.display = "block";
    }

    const dice1 = Math.floor(Math.random() * 6) + 1;
    //console.log(dice1);
    const dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dicee1").innerHTML = dice1;
    document.getElementById("dicee2").innerHTML = dice2;

    var count = dice1 + dice2;
    var count2 = document.getElementById("score").textContent;
    var count3 = Number(count2);
    var count4 = count3 + count;
    document.getElementById("score").innerHTML = count4;

    var neeed = 52 - count4;
    document.getElementById("need").innerHTML = neeed;

    if (count4 >= 52) {

        document.getElementById("need").style.display = 'none';
        document.getElementById("need-msg").style.display = 'none';
        document.getElementById("win").style.display = "block"
        document.getElementById("lost").style.display = "none";
        document.getElementById("play-Again").style.display = "block";
        document.getElementById("win-img").style.display = "block";
        document.getElementById("roll-dice").disabled = true;

    }

   else if(playleft==0 && count<52){
        //console.log("lost");
        document.getElementById("lost").style.display = "block";
        document.getElementById("play-Again").style.display = "block";
        document.getElementById("sorry-img").style.display = "block";
        
    }

}