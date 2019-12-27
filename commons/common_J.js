localStorage["theme"]="dark";
localStorage["accent"]="rgb(0,0,0)";

var light15 = "rgba(255,255,255,0.15)";
var light30 = "rgba(255,255,255,0.30)";
var light90 = "rgba(255,255,255,0.90)";

var dark15 = "rgba(0,0,0,0.15)";
var dark30 = "rgba(0,0,0,0.30)";
var dark90 = "rgba(0,0,0,0.90)";

var midColor = "rgb(105,105,105)";

document.addEventListener("DOMContentLoaded",function(){
    styleControls();
})

function styleControls(){

    if(localStorage["theme"]=="dark"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }

    var buttons = document.getElementsByClassName("button");
    for(var i=0;i<buttons.length;i++){
        addMouseEvents(buttons[i], "true");
    }
    var dropBoxes = document.getElementsByClassName("drop-box");
    for(var i=0;i<dropBoxes.length;i++){
        addMouseEvents(dropBoxes[i]);
    }
    var barTitles = document.getElementsByClassName("bar-title");
    for(var i=0;i<barTitles.length;i++){
        addMouseEvents(barTitles[i], "true");
    }
    var containers = document.getElementsByClassName("container");
    for(var i=0;i<containers.length;i++){
        styleContainers(containers[i]);
    }
}

function addMouseEvents(control, isAccent){
    controllerNormalStyle(control, isAccent);

    control.addEventListener("mouseenter",function(){
        if(localStorage["theme"]=="dark"){
            if(isAccent=="true"){
                this.style.background="linear-gradient(0deg,"+light30+","+light30+"),linear-gradient(0deg,"+localStorage["accent"]+","+localStorage["accent"]+")";
            }else{
                this.style.background="linear-gradient(0deg,"+light30+","+light30+"),linear-gradient(0deg,black,black)";
            }
        }else{
            if(isAccent=="true"){
                this.style.background="linear-gradient(0deg,"+dark30+","+dark30+"),linear-gradient(0deg,"+localStorage["accent"]+","+localStorage["accent"]+")";
            }else{
                this.style.background="linear-gradient(0deg,"+dark30+","+dark30+"),linear-gradient(0deg,white,white)";
            }
        }
    }) 
    control.addEventListener("mouseleave",function(){
        controllerNormalStyle(control, isAccent);
    })

    control.addEventListener("mousedown",function(){
        if(localStorage["theme"]=="dark"){
            this.style.color="black";
            if(isAccent=="true"){
                this.style.background="linear-gradient(0deg,"+light90+","+light90+"),linear-gradient(0deg,"+localStorage["accent"]+","+localStorage["accent"]+")";
            }else{
                this.style.background="linear-gradient(0deg,"+light90+","+light90+"),linear-gradient(0deg,black,black)";
            }
        }else{
            if(isAccent=="true"){
                this.style.background="linear-gradient(0deg,"+dark90+","+dark90+"),linear-gradient(0deg,"+localStorage["accent"]+","+localStorage["accent"]+")";
            }else{
                this.style.background="linear-gradient(0deg,"+dark90+","+dark90+"),linear-gradient(0deg,white,white)";
            }
        }
    })
    control.addEventListener("mouseup",function(){
        controllerNormalStyle(control, isAccent);
    })
}

function styleContainers(container){
    container.style.borderColor=midColor;

    if(localStorage["theme"]=="dark"){
        container.style.background="linear-gradient(0deg,"+light15+","+light15+"),linear-gradient(0deg,black,black)";
        container.style.color="white";
        container.style.boxShadow="1px 1px 10px 0px rgba(255,255,255,0.3)";
    }else{
        container.style.background="linear-gradient(0deg,"+dark15+","+dark15+"),linear-gradient(0deg,white,white)";
        container.style.color="black";
        container.style.boxShadow="1px 1px 10px 0px rgba(0,0,0,0.3)";
    }
}

function controllerNormalStyle(control, isAccent){
    control.style.borderColor=midColor;
    
    if(isAccent=="true"){
        control.style.background=localStorage["accent"];
        control.style.color=pickColor(localStorage["accent"]);
        if(localStorage["theme"]=="dark"){
            control.style.boxShadow="1px 1px 10px 0px rgba(255,255,255,0.3)";
        }else{
            control.style.boxShadow="1px 1px 10px 0px rgba(0,0,0,0.3)";
        }
    }else{
        if(localStorage["theme"]=="dark"){
            control.style.color="white";
            control.style.boxShadow="1px 1px 10px 0px rgba(255,255,255,0.3)";
            control.style.background="linear-gradient(0deg,"+light15+","+light15+"),linear-gradient(0deg,black,black)";
        }else{
            control.style.backgroundColor="white";
            control.style.color="black";
            control.style.boxShadow="1px 1px 10px 0px rgba(0,0,0,0.3)";
            control.style.background="linear-gradient(0deg,"+dark15+","+dark15+"),linear-gradient(0deg,white,white)";
        }
    }
}

function pickColor(color){
    var y1 =255;

    color = color.replace(/\s/g, "").substr(4,color.length-5);
    var rgb= color.split(',');
    var y2 = (2*Number(rgb[0])+3*Number(rgb[1])+Number(rgb[2]))/6;

    if((y1/y2)>4.5){
    }else if((y2/y1)>4.5){
    } else {
        return "black";
    } 
    return "white";
}