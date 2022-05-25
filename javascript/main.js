let menu = document.querySelector(".header_menu");
let navBar = document.querySelector(".nav_bar");
let bodyAfter = document.querySelector("body");

let a = 0;
menu.onclick = ()=>{
    if( a == 0){
        menu.src = "images/header/close.png";
        console.log(a);
        menu.classList.add("active");
        navBar.style.display = "flex";
        bodyAfter.classList.add("active");

        a++;
    }
    else if (a == 1){
        menu.src = "images/header/menu.png";
        console.log(a);
        menu.classList.remove("active");
        navBar.style.display = "none";
        navBarMeaningOne.style.display = "none";
        navBarMeaningTwo.style.display = "none";
        navBarMeaningThree.style.display = "none";
        bodyAfter.classList.remove("active");
        a--;
    }

}
let listLiOne = document.querySelector(".list_li.one");
let listLiTwo = document.querySelector(".list_li.two");
let listLiFour = document.querySelector(".list_li.four");
let navBarMeaningOne = document.querySelector(".nav_bar__meaning.one");
let navBarMeaningTwo = document.querySelector(".nav_bar__meaning.two");
let navBarMeaningThree = document.querySelector(".nav_bar__meaning.three");

listLiOne.onclick = ()=>{
    navBarMeaningOne.style.display = "flex";
    navBarMeaningTwo.style.display = "none";
    navBarMeaningThree.style.display = "none";
}

listLiTwo.onclick = ()=>{
    navBarMeaningOne.style.display = "none";
    navBarMeaningTwo.style.display = "flex";
    navBarMeaningThree.style.display = "none";
}

listLiFour.onclick = ()=>{
    navBarMeaningOne.style.display = "none";
    navBarMeaningTwo.style.display = "none";
    navBarMeaningThree.style.display = "flex";
}

