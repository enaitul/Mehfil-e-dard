let btn = document.querySelector("button");

function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

const quotes = [
    "Ab mujhe uski yaad nahi aati, ab woh mujhe yaad ho chuki hai",
    "kya sitam hai ki uski surat ab gaur karne par yaad aati hai",
    "Zindagi mai kuch haasil nahi kar sakta, mai kabhi aaram nahi paa sakta",
    "Nafrat bhi kyun karein unse, itna bhi vasta kyun rakhe unse",
    "Ki ab hum bichre toh shayad khwabo mai mile, jaise sukhe huye phool kitabon mai mile",
    "Usse kaho boht jald milne aaye hume, kahi akele rehne ki aadat hi na padh jaaye hume",
    "Apne maiyyar se neeche toh mai aane se raha, sher bhuka hi sahi, ghans toh khane se raha",
    "Aap apne baal bandhlo, mai baar baar apni baat bhool raha hu",
    "Ab nikal aao apne andar se, ghar mai samaan ki zaroorat hai",
    "Woh kehti hai safed kapron mai bare acche lagte ho Asif. Aaj kafan mai lipta hu toh woh roti kyun hai?",
    "Aere gaire ko teher ne ki izazat nahi di. Dil ko dil rakha hai bazaar nahi hone diya.",
    "Hum bhi gaon mai kabhi shaam mai baitha karte the, humko bhi halaaton ne bahar bheja hai",
    "Tera chup rehna mere zehn mai kya baith gaya, itni awaazein tujhe di ki gala baith gaya",
    "Raat ke dariya ka kinara bhi kabhi ayega, waqt ka kya hai, humara bhi kabhi ayega. Ek accha din aaya tha zindagi mai kabhi, puchna tha dobara bhi kabhi ayega?"
];

const audioMap = {
    0: ["yaadE", "yaadK"], 
    1: ["sitamE", "sitamK"], 
    2: ["aaramEE", "aaramKK"], 
    3: ["nafratE", "nafratK"], 
    4: ["phoolE", "phoolK"], 
    5: ["akeleE", "akeleK"], 
    6: ["maiyyarE", "maiyyarK"], 
    7: ["baalE", "baalK"], 
    8: ["samaanE", "samaanK"],
    9: ["kafanE"],
    10: ["bazaarE"],
    11: ["haalatonE"],
    12: ["AwaazE"],
    13: ["RaatE"]
};

  function changeText(button) {
    button.innerText = "Mehfil-e-dard mai swagat hai!";
  }

function updateContent() {
    let h3 = document.querySelector("h3");
    let div = document.querySelector("div");

    let randomColor = getRandomColor();
    h3.innerText = "Draw me in colors, you made me see.";
    div.style.backgroundColor = randomColor;

    let randomIndex = Math.floor(Math.random() * quotes.length);
    div.innerText = quotes[randomIndex];

    
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    
    if (audioMap[randomIndex]) {
        let audios = audioMap[randomIndex];
        let randomAudioId = audios[Math.floor(Math.random() * audios.length)];
        let audioElement = document.getElementById(randomAudioId);
        if (audioElement) {
            audioElement.play();
        }
    }
}


btn.addEventListener("click", updateContent);


document.addEventListener("keydown", updateContent);
