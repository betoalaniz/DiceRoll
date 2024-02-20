/*function gotclicked(){
    alert("I got clicked!")
}*/

document.querySelector("new-btn").addEventListener("click", whowon);



function whowon(){
    let p1 = Math.floor(Math.random() * 6) + 1
    let p2 = Math.floor(Math.random() * 6) + 1

    document.querySelector(".img1").setAttribute("src","dice"+ p1 + ".png")
    document.querySelector(".img2").setAttribute("src","dice"+ p2 + ".png")

    if (p1 === p2){
        document.querySelector("h1").innerHTML = "It's a Tie!";
    }
    else if (p1 > p2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";

    }

}

whowon();