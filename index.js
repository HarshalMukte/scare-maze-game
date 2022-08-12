let nextBtn = document.querySelector(".next-button");
//svg mazes
let levelOne = document.querySelector(".level-one");
let levelTwo = document.querySelector(".level-two");
//ui message
let uiLevel = document.querySelector(".ui-level");
let uiMessage = document.querySelector(".ui-message");
//end game
let screamSound = document.querySelector(".scream-sound");
let spoolyPicture = document.querySelector(".spooky-picture");
// Grabing classes
let cursor = document.querySelector(".cursor");


const collisionCheck = (value) => {
    if (value === "maze-border") {
       alert("You Lost!! try again...");
    }
    if(value === "finish"){
        nextBtn.style.opacity = "1";
        nextBtn.style.pointerEvents = "all";
        levelOne.style.pointerEvents = "none";
    }
    if (value === "end-game") {
        screamSound.play();
        spoolyPicture.style.display = "block";
        document.body.style.backgroundColor = "black";
    }
};

window.addEventListener("mousemove" ,(e) => {
    let check = e.target.classList.value;
    collisionCheck(check);
    // for cursor
    cursor.style.top = e.pageY+ "px";
    cursor.style.left = e.pageX + "px";
    document.body.style.cursor = "none";
    cursor.style.display = "block";
});

nextBtn.addEventListener("click", () => {
    levelTwo.style.display = "block";
    uiLevel.textContent = "Level 2";
    uiMessage.textContent = "One more to go...";
    levelOne.style.display = "none";
    nextBtn.style.opacity = "0";
    nextBtn.style.pointerEvents = "none";
});


