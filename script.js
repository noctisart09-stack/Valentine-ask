// 1. Elements - Targeting all parts of your page
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const personalParagraph = document.getElementById("personal-paragraph");
const proceedBtn = document.getElementById("proceed-to-date");

// New: Targeting both corner videos
const videoLeft = document.getElementById("video-left");
const videoRight = document.getElementById("video-right");

// 2. Click Envelope Logic
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// 3. Logic to move the NO button (Your existing code)
noBtn.addEventListener("mouseover", () => {
    const min = 150;
    const max = 250;
    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// 4. YES is clicked - Show Paragraph & Pop-out Videos
yesBtn.addEventListener("click", () => {
    title.textContent = "For Kelsey... ♡";
    
    // Hide buttons and the cat
    buttons.style.display = "none";
    catImg.style.display = "none"; 
    
    // Show the personal message
    personalParagraph.style.display = "flex";

    // Trigger the videos to appear and play
    if (videoLeft && videoRight) {
        videoLeft.style.display = "block";
        videoRight.style.display = "block";
        videoLeft.play();
        videoRight.play();
    }
});

// 5. Click "Continue" - Show Final Date & Bring Cat Back
proceedBtn.addEventListener("click", () => {
    personalParagraph.style.display = "none";
    
    title.textContent = "Yippeeee!";
    
    // Change cat to dancing and bring it back for the finale
    catImg.src = "cat_dance.gif"; 
    catImg.style.display = "block"; 
    
    // Show the final date invitation
    document.querySelector(".letter-window").classList.add("final");
    finalText.style.display = "block";
});