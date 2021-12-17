let subchapterCircle = document.getElementById("subchapterCircle");
let subsubchapterCircle = document.getElementById("subsubchapterCircle");
let subsubchapterCircle1_2 = document.getElementById("subsubchapterCircle1_2");
let subsubchapterCircle1_3 = document.getElementById("subsubchapterCircle1_3");


let blauweOutline = document.getElementById("blauwe_outline");
let groeneOutline = document.getElementById("groene_outline");
let geleOutline = document.getElementById("gele_outline");
let oranjeOutline = document.getElementById("oranje_outline");

let lampje = document.getElementById("lampje");
let tandwielen = document.getElementById("tandwielen");
let mindset = document.getElementById("mindset");
let potloodIcoon = document.getElementById("potlood_icoon");

let goToIntro = document.getElementById("cirkel_1");
let goToChapter1_1 = document.getElementById("cirkel_2");
let goToChapter1_2 = document.getElementById("cirkel_3");
let goToChapter1_3 = document.getElementById("cirkel_4");
let goToChapter1_4 = document.getElementById("cirkel_5");



let sideBarText = document.getElementById("sideBartext");
let menuButtonText = document.getElementById("menuButtonText");
let chapterHeader = document.getElementById("chapterHeader");
let topBar = document.getElementById("topBar");
let sideBar = document.getElementById("sideBar");
let chapterCircleText = document.getElementById("chapterCircleText");

// let path_302 = document.getElementById("Path_302");








goToIntro.addEventListener("click", chapterIntro);

function chapterIntro() {
    subchapterCircle.style.display = 'block';
    subsubchapterCircle.style.display = 'none';
    chapterHeader.innerHTML = "Chapter 1: Pitch Successions";
    chapterHeader.style.color = '#3F51B5';
    sideBarText.innerHTML = "Chapter Introduction";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#3F51B5";
    sideBar.style.backgroundColor = "#3F51B5";
    topBar.style.backgroundColor = '#CDD5E9';
}




goToChapter1_1.addEventListener("click", openChapter1_1);
lampje.addEventListener("click", openChapter1_1);

function openChapter1_1() {
    subchapterCircle.style.display = 'none';
    subsubchapterCircle.style.display = 'block';
    blauweOutline.style.display = 'block';
    groeneOutline.style.display = 'none';
    chapterHeader.innerHTML = "1.1: Directions I";
    chapterHeader.style.color = '#3F51B5';
    sideBarText.innerHTML = "Topic Introduction";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#3F51B5";
    topBar.style.backgroundColor = '#CDD5E9';
    geleOutline.style.display = 'none';
    oranjeOutline.style.display = 'none';
    chapterCircleText.style.fill = '#3F51B5';

}




tandwielen.addEventListener("click", chapter1_1_2);

function chapter1_1_2() {
    blauweOutline.style.display = 'block';
    groeneOutline.style.display = 'block';
    chapterHeader.innerHTML = "1.1: Directions Tendencies I";
    chapterHeader.style.color = '#54BA54';
    sideBarText.innerHTML = "In Practice";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#54BA54";
    topBar.style.backgroundColor = '#C8E8C7';
    geleOutline.style.display = 'none';
    oranjeOutline.style.display = 'none';
    chapterCircleText.style.fill = '#54BA54';
   

}





mindset.addEventListener("click", chapter1_1_3);

function chapter1_1_3() {
 
    blauweOutline.style.display = 'block';
    groeneOutline.style.display = 'block';
    geleOutline.style.display = 'block';
    chapterHeader.innerHTML = "1.1: In Action";
    chapterHeader.style.color = '#E7EF37';
    sideBarText.innerHTML = "In Action";
    sideBarText.style.color = "#555555";
    menuButtonText.style.color = "#555555";
    sideBar.style.backgroundColor = "#E7EF37";
    topBar.style.backgroundColor = '#F4F4D7 ';
    oranjeOutline.style.display = 'none';
    chapterCircleText.style.fill = '#E7EF37';

}

potloodIcoon.addEventListener("click", chapter1_1_4);

function chapter1_1_4() {
    oranjeOutline.style.display = 'block';
    blauweOutline.style.display = 'block';
    groeneOutline.style.display = 'block';
    geleOutline.style.display = 'block';
    chapterHeader.innerHTML = "1.1: Exercises & Activities";
    chapterHeader.style.color = '#FF9400';
    sideBarText.innerHTML = "Exercises & Activities";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#FF9400";
    topBar.style.backgroundColor = '#F9DDB3';
    chapterCircleText.style.fill = '#FF9400';
    
    
    // path_302.classList.add("cls-1");
    // path_302.classList.remove("cls-9");

}