let btn = document.querySelector("button");

function getrandomcolor() {
    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255);

    let colour = `rgb(${r}, ${g}, ${b})` ;
    return colour;
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
    "Ab nikal aao apne andar se, ghar mai samaan ki zaroorat hai"
];

btn.addEventListener("click", function(){
    let h3 = document.querySelector ("h3");
    let randomcolor = getrandomcolor();
    h3.innerText = "Draw me in colors, you made me see.";
    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;

    let randomIndex = Math.floor(Math.random() * quotes.length);
    div.innerText = quotes[randomIndex];

    
});