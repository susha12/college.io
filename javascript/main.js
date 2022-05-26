let menu = document.querySelector(".header_menu");
let navBar = document.querySelector(".nav_bar");
let bodyAfter = document.querySelector("body");


let a = 0;
function playMenu (){
    menu.src = "images/header/menu.png";
    console.log(a);
    menu.classList.remove("active");
    navBar.style.display = "none";
    navBarMeaningOne.style.display = "none";
    navBarMeaningTwo.style.display = "none";
    navBarMeaningThree.style.display = "none";
    bodyAfter.classList.remove("active");
    bodyAfter.style.zIndex = "-1000";
    bodyAfter.style.overflow = "inherit";
    a--;
}
menu.onmouseover = ()=>{
    // if( a == 0){
        menu.src = "images/header/close.png";
        console.log(a);
        menu.classList.add("active");
        navBar.style.display = "flex";
        bodyAfter.classList.add("active");
        bodyAfter.style.zIndex = "1000";
        bodyAfter.style.overflow = "hidden";
        a++;
    // }
    // else if (a == 1){
    //     playMenu ();
    // }

}
menu.onclick = ()=>{
    playMenu ();
}
let listLiOne = document.querySelector(".list_li.one");
let listLiTwo = document.querySelector(".list_li.two");
let listLiFour = document.querySelector(".list_li.four");
let navBarMeaningOne = document.querySelector(".nav_bar__meaning.one");
let navBarMeaningTwo = document.querySelector(".nav_bar__meaning.two");
let navBarMeaningThree = document.querySelector(".nav_bar__meaning.three");

// navBarMeaningOne.onmouseout = ()=>{
//     playMenu ()
// }
// navBarMeaningTwo.onmouseout = ()=>{
//     playMenu ()
// }
// navBarMeaningThree.onmouseout = ()=>{
//     playMenu ()
// }

listLiOne.onmouseover = ()=>{
    navBarMeaningOne.style.display = "flex";
    navBarMeaningTwo.style.display = "none";
    navBarMeaningThree.style.display = "none";
}

listLiTwo.onmouseover = ()=>{
    navBarMeaningOne.style.display = "none";
    navBarMeaningTwo.style.display = "flex";
    navBarMeaningThree.style.display = "none";
}

listLiFour.onmouseover = ()=>{
    navBarMeaningOne.style.display = "none";
    navBarMeaningTwo.style.display = "none";
    navBarMeaningThree.style.display = "flex";
}



let newBox = document.querySelector(".new_box");
let boxContentSectionDisable = document.querySelectorAll(".box_content__section.disable");

let newBoxMore = document.querySelector(".new_box__more");

newBoxMore.onclick = ()=>{
    for(let i = 0; i < boxContentSectionDisable.length; i++){
        boxContentSectionDisable[i].classList.toggle("active");
    }
    console.log(boxContentSectionDisable)
    newBox.classList.toggle("active");


}
