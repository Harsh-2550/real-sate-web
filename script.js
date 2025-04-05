// option filter for whole data [6]

const property_type = document.querySelector(".property-type");
const iteams = document.querySelectorAll(".property-type .iteam");
const product = document.querySelectorAll(".property-item .cards_wrapper");

property_type.addEventListener("click", (e) => {
    if(e.target.classList.contains("iteam")){

        iteams.forEach((elem) => {
            elem.classList.remove("active");
        });

        e.target.classList.add("active");

        const changer = e.target.getAttribute("data-filter");
        
        product.forEach((event) => {
            if(event.classList.contains(changer) || changer == 'all'){
                event.style.display = "block";
            } else  {
                event.style.display = "none";
            }
        })
        
    }
})

// when scrolling then navbar color change

const nav_bar = document.querySelector("nav");

window.addEventListener("scroll" , () => {
    if(window.pageYOffset > 400) {
        nav_bar.style.backgroundColor = "slategrey";
    } else {
        nav_bar.style.backgroundColor = "transparent"
    }
})

const ques = document.querySelectorAll(".ques");

ques.forEach((elem) => {    // important 
    elem.addEventListener("click" , (event) => {
        if(event.target.nodeName == "SPAN"){
            elem.classList.toggle("toggle");
        }
    });
});

// navbar open or close code

const mobile_menu = document.querySelector(".nav-list");
const side = document.querySelector(".mobile-menu");

mobile_menu.style.maxHeight = "0px";

side.addEventListener("click", () => {
    
    if(mobile_menu.style.maxHeight == "0px") {
        mobile_menu.style.maxHeight = "50vh";
    } else {
        mobile_menu.style.maxHeight = "0px";
    }
});

// window scroll 


const scoll1 = document.querySelectorAll(".up");

// window.addEventListener("scroll", () => {
    
//     for(var i=0; i<scoll1.length; i++) {
//         console.log("hello");
//         if(scoll1[i].getBoundingClientRect.top < window.innerHeight - 150 ) {
//             scoll1[i].classList.add("active");
//             console.log("hheoo");
            
//         }
//     }
// })

window.addEventListener("scroll" ,  () =>  {
    for(var i=0; i < scoll1.length; i++){
     if(scoll1[i].getBoundingClientRect().top < window.innerHeight - 150 ){
        scoll1[i].classList.add("active");
     }
    }
 });