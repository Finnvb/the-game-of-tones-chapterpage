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



let sideBarText = document.getElementById("sideBartext");
let menuButtonText = document.getElementById("menuButtonText");
let chapterHeader = document.getElementById("chapterHeader");
let topBar = document.getElementById("topBar");
let sideBar = document.getElementById("sideBar");
let chapterCircleText = document.getElementById("chapterCircleText");


let path_302 = document.getElementById("Path_302"); //geel
let path_303 = document.getElementById("Path_303"); //blauw
let path_301 = document.getElementById("Path_301"); //groen
let path_300 = document.getElementById("Path_300"); //oranje


goToIntro.addEventListener("click", chapterIntro);


function chapterIntro() {
    subchapterCircle.style.display = 'block';
    subsubchapterCircle1_2.style.display = 'none';
    subsubchapterCircle.style.display = 'none';
    subsubchapterCircle1_3.style.display = 'none';
    chapterHeader.innerHTML = "Chapter 1: Pitch Successions";
    chapterHeader.style.color = '#3F51B5';
    sideBarText.innerHTML = "Chapter Introduction";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#3F51B5";
    sideBar.style.backgroundColor = "#3F51B5";
    topBar.style.backgroundColor = '#CDD5E9';


    //  continueArray[i] = continueArray[0];
    //    console.log(continueArray[i]);


}


goToChapter1_1.addEventListener("click", openChapter1_1);
lampje.addEventListener("click", openChapter1_1);



function openChapter1_1() {
    subchapterCircle.style.display = 'none';
    subsubchapterCircle.style.display = 'block';
    subsubchapterCircle1_2.style.display = 'none';
    subsubchapterCircle1_3.style.display = 'none';
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

    path_303.classList.add("cls-10");
    path_303.classList.remove("cls-8", "cls-9", "cls-1");

    //  continueArray[i] = continueArray[1];

    // console.log(continueArray[i]);
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

    path_303.classList.add("cls-8");
    path_303.classList.remove("cls-10", "cls-9", "cls-1");

    path_301.classList.add("cls-8");
    path_301.classList.remove("cls-10", "cls-9", "cls-1");

    // continueArray[i] = continueArray[2];

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

    path_303.classList.add("cls-9");
    path_303.classList.remove("cls-10");

    path_301.classList.add("cls-9");
    path_301.classList.remove("cls-8");

    path_302.classList.add("cls-9");
    path_302.classList.remove("cls-1");

    //    continueArray[i] = continueArray[3];
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


    path_303.classList.add("cls-1");
    path_303.classList.remove("cls-10", "cls-9", "cls-8");

    path_301.classList.add("cls-1");
    path_301.classList.remove("cls-8", "cls-9", "cls-8");

    path_302.classList.add("cls-1");
    path_302.classList.remove("cls-9", "cls-9", "cls-8");


    path_300.classList.add("cls-1");
    path_300.classList.remove("cls-9");

    // continueArray[i] = continueArray[4];

}




// -----------------------------------------




let blauweOutline2 = document.getElementById("blauwe_outline2");
let groeneOutline2 = document.getElementById("groene_outline2");
let geleOutline2 = document.getElementById("gele_outline2");
let oranjeOutline2 = document.getElementById("oranje_outline2");


let lampje2 = document.getElementById("lampje2");
let tandwielen2 = document.getElementById("tandwielen2");
let mindset2 = document.getElementById("mindset2");
let potloodIcoon2 = document.getElementById("potlood_icoon2");


let goBackToIntro = document.getElementById("circle1");
let goBackToChapter1_1 = document.getElementById("circle2");
let goToChapter1_3 = document.getElementById("circle3");



goBackToChapter1_1.addEventListener("click", openChapter1_1);
goBackToIntro.addEventListener("click", chapterIntro);

// --------------------------------------------------------------------------------------------------

let blauw = document.getElementsByClassName("blauw"); //blauw
let geel = document.getElementsByClassName("geel"); //geel
let groen = document.getElementsByClassName("groen"); //groen
let oranje = document.getElementsByClassName("oranje"); //oranje



goToChapter1_2.addEventListener("click", openChapter2_1);
lampje2.addEventListener("click", openChapter2_1);


function openChapter2_1() {
    subsubchapterCircle.style.display = 'none';
    subchapterCircle.style.display = 'none';
    subsubchapterCircle1_3.style.display = 'none';
    subsubchapterCircle1_2.style.display = 'block';
    blauweOutline2.style.display = 'block';
    groeneOutline2.style.display = 'none';
    chapterHeader.innerHTML = "Chapter 1.2: Directions II";
    chapterHeader.style.color = '#3F51B5';
    sideBarText.innerHTML = "Topic Introduction";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#3F51B5";
    topBar.style.backgroundColor = '#CDD5E9';
    geleOutline2.style.display = 'none';
    oranjeOutline2.style.display = 'none';
    chapterCircleText2.style.fill = '#3F51B5';

    blauw[0].style.fill = '#5667c3';

    // continueArray[i] = continueArray[5];
}

tandwielen2.addEventListener("click", chapter2_1_2);

function chapter2_1_2() {
    blauweOutline2.style.display = 'block';
    groeneOutline2.style.display = 'block';
    chapterHeader.innerHTML = "Chapter 1.2: Temporal Tendencies I";
    chapterHeader.style.color = '#54BA54';
    sideBarText.innerHTML = "In Practice";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#54BA54";
    topBar.style.backgroundColor = '#C8E8C7';
    geleOutline2.style.display = 'none';
    oranjeOutline2.style.display = 'none';
    chapterCircleText2.style.fill = '#54BA54';

    blauw[0].style.fill = '#62cc62';
    groen[0].style.fill = '#62cc62';

}




mindset2.addEventListener("click", chapter2_1_3);

function chapter2_1_3() {

    blauweOutline2.style.display = 'block';
    groeneOutline2.style.display = 'block';
    geleOutline2.style.display = 'block';
    chapterHeader.innerHTML = "1.2: In Action";
    chapterHeader.style.color = '#E7EF37';
    sideBarText.innerHTML = "In Action";
    sideBarText.style.color = "#555555";
    menuButtonText.style.color = "#555555";
    sideBar.style.backgroundColor = "#E7EF37";
    topBar.style.backgroundColor = '#F4F4D7 ';
    oranjeOutline2.style.display = 'none';
    chapterCircleText2.style.fill = '#E7EF37';

    blauw[0].style.fill = '#edf465';
    geel[0].style.fill = '#edf465';
    groen[0].style.fill = '#edf465';

}

potloodIcoon2.addEventListener("click", chapter2_1_4);

function chapter2_1_4() {
    oranjeOutline2.style.display = 'block';
    blauweOutline2.style.display = 'block';
    groeneOutline2.style.display = 'block';
    geleOutline2.style.display = 'block';
    chapterHeader.innerHTML = "1.2: Exercises & Activities";
    chapterHeader.style.color = '#FF9400';
    sideBarText.innerHTML = "Exercises & Activities";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#FF9400";
    topBar.style.backgroundColor = '#F9DDB3';
    chapterCircleText2.style.fill = '#FF9400';

    geel[0].style.fill = '#ff9400';
    oranje[0].style.fill = '#ff9400';
    groen[0].style.fill = '#ff9400';
    blauw[0].style.fill = '#ff9400';

}





// -------------------------------------


let nextChapterLink = document.getElementById("nextChapterLink");

let nextChapter = document.getElementById("nextChapter");
let lockClosed = document.getElementById("lockClosed");
let lockOpen = document.getElementById("lockOpen");

let blauweOutline3 = document.getElementById("blauwe_outline3");
let groeneOutline3 = document.getElementById("groene_outline3");
let geleOutline3 = document.getElementById("gele_outline3");
let oranjeOutline3 = document.getElementById("oranje_outline3");


let lampje3 = document.getElementById("lampje3");
let tandwielen3 = document.getElementById("tandwielen3");
let mindset3 = document.getElementById("mindset3");
let potloodIcoon3 = document.getElementById("potlood_icoon3");


let goBackToIntro1 = document.getElementById("circle3_1");
let goBackToChapter1_1_1 = document.getElementById("circle3_2");
let goBackToChapter1_2_2 = document.getElementById("circle3_3");
let nextChapterPage = document.getElementById("circle3_4");


goBackToChapter1_1_1.addEventListener("click", openChapter1_1);
goBackToChapter1_2_2.addEventListener("click", openChapter2_1);
goBackToIntro1.addEventListener("click", chapterIntro);
nextChapterPage.addEventListener("click", chapter1Complete);

goToChapter1_3.addEventListener("click", openChapter3_1);
lampje3.addEventListener("click", openChapter3_1);






function openChapter3_1() {
    subsubchapterCircle.style.display = 'none';
    subchapterCircle.style.display = 'none';
    subsubchapterCircle1_2.style.display = 'none';
    subsubchapterCircle1_3.style.display = 'block';
    blauweOutline3.style.display = 'block';
    groeneOutline3.style.display = 'none';
    chapterHeader.innerHTML = "Chapter 1.3: Motion Types";
    chapterHeader.style.color = '#3F51B5';
    sideBarText.innerHTML = "Topic Introduction";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#3F51B5";
    topBar.style.backgroundColor = '#CDD5E9';
    geleOutline3.style.display = 'none';
    oranjeOutline3.style.display = 'none';
    chapterCircleText3.style.fill = '#3F51B5';
    lockOpen.style.display = 'none';
    lockClosed.style.display = 'block';

    blauw[1].style.fill = '#5667c3';

}


tandwielen3.addEventListener("click", chapter3_1_2);

function chapter3_1_2() {
    blauweOutline3.style.display = 'block';
    groeneOutline3.style.display = 'block';
    chapterHeader.innerHTML = "Chapter 1.3: Directional Tendencies II";
    chapterHeader.style.color = '#54BA54';
    sideBarText.innerHTML = "In Practice";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#54BA54";
    topBar.style.backgroundColor = '#C8E8C7';
    geleOutline3.style.display = 'none';
    oranjeOutline3.style.display = 'none';
    chapterCircleText3.style.fill = '#54BA54';
    lockOpen.style.display = 'none';
    lockClosed.style.display = 'block';

    blauw[1].style.fill = '#62cc62';
    groen[1].style.fill = '#62cc62';

}




mindset3.addEventListener("click", chapter3_1_3);

function chapter3_1_3() {

    blauweOutline3.style.display = 'block';
    groeneOutline3.style.display = 'block';
    geleOutline3.style.display = 'block';
    chapterHeader.innerHTML = "1.3: In Action";
    chapterHeader.style.color = '#E7EF37';
    sideBarText.innerHTML = "In Action";
    sideBarText.style.color = "#555555";
    menuButtonText.style.color = "#555555";
    sideBar.style.backgroundColor = "#E7EF37";
    topBar.style.backgroundColor = '#F4F4D7 ';
    oranjeOutline3.style.display = 'none';
    chapterCircleText3.style.fill = '#E7EF37';
    lockOpen.style.display = 'none';
    lockClosed.style.display = 'block';

    blauw[1].style.fill = '#edf465';
    geel[1].style.fill = '#edf465';
    groen[1].style.fill = '#edf465';

}

potloodIcoon3.addEventListener("click", chapter3_1_4);

function chapter3_1_4() {
    oranjeOutline3.style.display = 'block';
    blauweOutline3.style.display = 'block';
    groeneOutline3.style.display = 'block';
    geleOutline3.style.display = 'block';
    chapterHeader.innerHTML = "1.3: Exercises & Activities";
    chapterHeader.style.color = '#FF9400';
    sideBarText.innerHTML = "Exercises & Activities";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#FF9400";
    topBar.style.backgroundColor = '#F9DDB3';
    chapterCircleText3.style.fill = '#FF9400';
    lockOpen.style.display = 'block';
    lockClosed.style.display = 'none';

    geel[1].style.fill = '#ff9400';
    oranje[1].style.fill = '#ff9400';
    groen[1].style.fill = '#ff9400';
    blauw[1].style.fill = '#ff9400';

}


function chapter1Complete() {
    subchapterCircle.style.display = 'block';
    subsubchapterCircle1_2.style.display = 'none';
    subsubchapterCircle.style.display = 'none';
    subsubchapterCircle1_3.style.display = 'none';
    chapterHeader.innerHTML = "Putting it together";
    chapterHeader.style.color = '#3F51B5';
    sideBarText.innerHTML = "Chapter Introduction";
    sideBarText.style.color = "#FFFFFF";
    menuButtonText.style.color = "#FFFFFF";
    sideBar.style.backgroundColor = "#3F51B5";
    sideBar.style.backgroundColor = "#3F51B5";
    topBar.style.backgroundColor = '#CDD5E9';
    lockOpen.style.display = 'block';
    lockClosed.style.display = 'none';
    nextChapter.innerHTML = '<p>Next Chapter</p>';
    nextChapterLink.href = '/mainMenu.html';
}


let continueArray = [openChapter1_1, chapter1_1_2, chapter1_1_3, chapter1_1_4, openChapter2_1, chapter2_1_2, chapter2_1_3, chapter2_1_4, openChapter3_1, chapter3_1_2, chapter3_1_3, chapter3_1_4, chapter1Complete];



nextChapterLink.addEventListener("click", nextArrayItem);
let i = 0;

function nextArrayItem() {

    continueArray[i];
    nextChapterLink.addEventListener("click", continueArray[i]);
    i++;
    console.log(i);
}
