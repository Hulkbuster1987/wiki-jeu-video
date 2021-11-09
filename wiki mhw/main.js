var bows={
    bow1:{
        name:"bow 1",
        rarity:11,
        attack:312,
        criticalStrike:0,
        elementalAttack:"210 Ice",
        imgPath: "iceflinger.png",
        targetToKill:"La Bite a dudule",
        targetImgPath:"azure-rathalos.png"
    },
    bow2:{
        name:"bow 2",
        rarity:12,
        attack:343,
        criticalStrike:25,
        elementalAttack:"210 Fire",
        imgPath: "night_flight.png",
        targetToKill:"La Bite a Gerard",
        targetImgPath:"azure-rathalos.png"

    },
    bow3:{
        name:"bow 3",
        rarity:10,
        attack:250,
        criticalStrike:10,
        elementalAttack:"210 Dragon",
        imgPath: "iceflinger.png",
        targetToKill:"La Bite a Michel",
        targetImgPath:"nargacuga.jpg"
    },
    bow4:{
        name:"bow 4",
        rarity:8,
        attack:400,
        criticalStrike:20,
        elementalAttack:"10 Ice",
        imgPath: "iceflinger.png",
        targetToKill:"La Bite a Captain",
        targetImgPath: "nargacuga.jpg"
    },
    bow5:{
        name:"bow 5",
        rarity:12,
        attack:300,
        criticalStrike:50,
        elementalAttack:"210 Water",
        imgPath: "night_flight.png",
        targetToKill:"La Bite a Gaston",
        targetImgPath: "unknown.jpg"

    },
    bow6:{
        name:"bow 6",
        rarity:20,
        attack:30000,
        criticalStrike:100,
        elementalAttack:"1000 Poison",
        imgPath: "silver-wrathbow.png",
        targetToKill:"La Bite a JeanJean",
        targetImgPath: "velkhana.jpg"

    }
}
var actualBow;

document.querySelector("#stats-details").style.display = "none"; 

function displayBow(bowNumber){
    document.querySelector("#target-img-box").style.display = "none";
    console.log(bowNumber);
    actualBow=bows[bowNumber];
    console.log(actualBow);
    document.querySelector("#stats-details").style.display = "block"; 
    document.querySelector("#bow-name").innerHTML = actualBow.name; 
    document.querySelector("#bow-rarity-number").innerHTML = actualBow.rarity; 
    document.querySelector("#bow-attack").innerHTML = actualBow.attack; 
    document.querySelector("#bow-critical-strike").innerHTML = actualBow.criticalStrike; 
    document.querySelector("#bow-elemental-attack").innerHTML = actualBow.elementalAttack; 
    document.querySelector("#bow-image").setAttribute("src", "./assets/img/bows/"+actualBow.imgPath); 
}

function displayTarget(){
    console.log(actualBow.targetToKill);
    document.querySelector("#target-image").setAttribute("src", "./assets/img/monsters/"+actualBow.targetImgPath); 
    document.querySelector("#target-img-box").style.display = "block";
}
