var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;

var n2=Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;

if(n1>n2){
    document.querySelector("h1").textContent="Player1 Wins✨"
}
else if(n1<n2){
    document.querySelector("h1").textContent="Player2 Wins✨"
}
else{
    document.querySelector("h1").textContent="Draw"
}

if(n1===1){
    document.querySelector(".img1").setAttribute("src","images\\dice1.png")
}
else if(n1===2){
    document.querySelector(".img1").setAttribute("src","images\\dice2.png")
}
else if(n1===3){
    document.querySelector(".img1").setAttribute("src","images\\dice3.png")
}
else if(n1===4){
    document.querySelector(".img1").setAttribute("src","images\\dice4.png")
}
else if(n1===5){
    document.querySelector(".img1").setAttribute("src","images\\dice5.png")
}
else{
    document.querySelector(".img1").setAttribute("src","images\\dice6.png")
}


if(n2===1){
    document.querySelector(".img2").setAttribute("src","images\\dice1.png")
}
else if(n2===2){
    document.querySelector(".img2").setAttribute("src","images\\dice2.png")
}
else if(n2===3){
    document.querySelector(".img2").setAttribute("src","images\\dice3.png")
}
else if(n2===4){
    document.querySelector(".img2").setAttribute("src","images\\dice4.png")
}
else if(n2===5){
    document.querySelector(".img2").setAttribute("src","images\\dice5.png")
}
else{
    document.querySelector(".img2").setAttribute("src","images\\dice6.png")
}