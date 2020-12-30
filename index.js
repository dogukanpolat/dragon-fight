let song = new Audio("visual/enterEast.mp3");

let username;
let score1 = 0;
let score2 = 0;
document.querySelector(".button").addEventListener("click", function() {

    if (document.querySelector(".username").value.length > 4) {
        alert("max 4 characters");
        location.reload(true);
    }

    username = document.querySelector(".username").value;
    document.querySelector(".scoreUser").textContent = username + ": " + score1;
    document.querySelector(".scoreCPU").textContent = "CPU" + ": " + score1;
    removeFadeOut(document.querySelector(".start"), 3000);
    song.play();
    
});

function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";

    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
}

let cpu;
function gameOn(userDragon) {
    cpu = (Math.floor(Math.random() * (4 - 1) + 1)); //The maximum is exclusive and the minimum is inclusive
        if (userDragon == cpu) {
            document.querySelector(".guide").textContent = "Draw, you picked same Dragon";
        } else if (userDragon == 1 && cpu == 2) {
            document.querySelector(".guide").textContent = "CPU wins, Smaug > Horntail";
            score2++;
            updateScore()
        } else if (userDragon == 1 && cpu == 3) {
            document.querySelector(".guide").textContent = "You win, Horntail > Drogorn";
            score1++;
            updateScore()
        } else if (userDragon == 2 && cpu == 1) {
            document.querySelector(".guide").textContent = "You win, Smaug > Horntail";
            score1++;
            updateScore()
        }  else if (userDragon == 2 && cpu == 3) {
            document.querySelector(".guide").textContent = "CPU wins, Drogorn > Smaug";
            score2++;
            updateScore()
        } else if (userDragon == 3 && cpu == 1) {
            document.querySelector(".guide").textContent = "CPU wins, Horntail > Drogorn";
            score2++;
            updateScore()
        }  else if (userDragon == 3 && cpu == 2) {
            document.querySelector(".guide").textContent = "You win, Drogorn > Smaug";  
            score1++;
            updateScore()
        } 
    
}

let userDragon
document.querySelector(".horntail").addEventListener("click", function() {
    userDragon = 1;
    gameOn(userDragon);
});
document.querySelector(".smaug").addEventListener("click", function() {
    userDragon = 2;
    gameOn(userDragon);
});
document.querySelector(".drogorn").addEventListener("click", function() {
    userDragon = 3;
    gameOn(userDragon);
});

function updateScore() {
    document.querySelector(".scoreUser").textContent = username + ": " + score1;
    document.querySelector(".scoreCPU").textContent = "CPU" + ": " + score2;
}
