document.addEventListener("DOMContentLoaded",function(){
    var loadArea=document.getElementsByClassName("load-area")[0];
    var progBar=document.getElementsByClassName("prog-bar")[0];

    loadAll(loadArea,progBar);
});

function progressDots(progBar){
    return new Promise(resolve=>{
        setTimeout(function(){
            progBar.children[0].classList.add("prog-anim");
        },500);
        setTimeout(function(){
            progBar.children[1].classList.add("prog-anim");
        },1000);
        setTimeout(function(){
            progBar.children[2].classList.add("prog-anim");
        },1500);

        setTimeout(function(){
            progBar.children[0].classList.remove("prog-anim");
        },2000);
        setTimeout(function(){
            progBar.children[1].classList.remove("prog-anim");
        },2500);
        setTimeout(function(){
            progBar.children[2].classList.remove("prog-anim");
            resolve();
        },3000);
    });
}

function showLogo(loadArea){
    return new Promise(resolve=>{
        setTimeout(function(){
            loadArea.children[0].innerHTML="Cyve";
            resolve();
        },4000);
    })
}

async function loadAll(loadArea,progBar){
    await showLogo(loadArea);
    for(var i=0;i<5;i++){
        await progressDots(progBar);
    }
    document.location.href="lang_region\\lang_region_H.html";
}