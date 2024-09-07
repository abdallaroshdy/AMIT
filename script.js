function openMenu(){
    let navlinks = document.querySelector(".navlinks")
    if(navlinks.style.display === "flex"){
        navlinks.style.display = "none"
        
    }else{
        navlinks.style.display = "flex"
    }
}




var items = document.querySelectorAll(".box-items")
var itemsSection4 = document.querySelectorAll(".box-items-4")

window.addEventListener("scroll",function(){
    for(var i=0;i<items.length;i++){
        if(items[i].getBoundingClientRect().bottom <= this.window.scrollY){
            items[i].style.animationName="box-items-animation"
        }
    }
    for(var i=0;i<itemsSection4.length;i++){
        if(itemsSection4[i].getBoundingClientRect().bottom + 600 <= this.window.scrollY){
            itemsSection4[i].style.animationName="box-items-animation"
        }
    }
})

var checker = true
var section2Imgs = document.querySelectorAll(".box-items img")
setInterval(function(){
    var src= ""
    if(checker){
        checker = false
        src="./images/s33.webp"
    }else{
        checker = true
        src="./images/s11.webp"
    }
    for(var i=0;i<section2Imgs.length;i++){
        section2Imgs[i].src=src
    }
},2000)



var imgsRight = document.querySelectorAll(".galory-image-right")

window.addEventListener("scroll" , function(e){
    for(var i=0 ;i<imgsRight.length;i++){
        // console.log(imgsRight[i].getBoundingClientRect().top)

        if(this.window.scrollY >=  imgsRight[i].getBoundingClientRect().bottom + 250){
            imgsRight[i].style.animationName = "test-right"
        }
    }
})

// var arr1= [1,2,3]
// var arr2 = [3,4,5]
// var arr3 =[0]
// arr3.concat(arr1)
// arr3.concat(arr2)
// console.log(arr3)



var imgsLift = document.querySelectorAll(".galory-image-left")

window.addEventListener("scroll" , function(e){
    for(var i=0 ;i<imgsLift.length;i++){
        // console.log(imgsLift[i].getBoundingClientRect().top)

        if(this.window.scrollY >=  imgsLift[i].getBoundingClientRect().bottom + 250){
            imgsLift[i].style.animationName = " test-left"
        }
    }
})