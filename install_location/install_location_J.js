var selectionHeaderData=[
    "Partition",
    "Type",
    "Total Space",
    "Free Space"
];
var selectionBoxData=[
    { partition:"Local Disk C",
    type:"NTFS",
    total_space:"146.50 GB",
    free_space:"62.32 GB" },
    { partition:"Local Disk C",
    type:"NTFS",
    total_space:"146.50 GB",
    free_space:"62.32 GB" },
    { partition:"Local Disk C",
    type:"NTFS",
    total_space:"146.50 GB",
    free_space:"62.32 GB" },
    { partition:"Local Disk C",
    type:"Reserved",
    total_space:"146.50 GB",
    free_space:"62.32 GB" },
];

var selectionBoxDimensions=[
    "8rem",
    "6rem",
    "8rem",
    "8rem"
]

document.addEventListener("DOMContentLoaded",function(){
    var selectionBox = document.getElementsByClassName("selection-box")[0];
    var selectionHeader = document.getElementsByClassName("selection-header")[0];

    backClick();
    createSelectionArea(selectionBox, selectionHeader, selectionHeader);
})

function createSelectionHeader(selectionHeader){
    return new Promise(resolve=>{
        var list = document.createElement("div");
        list.classList.add("list");
        for(var i=0;i<selectionHeaderData.length+1;i++){
            var tempS = document.createElement("span");
            if(i==0){
                tempS.classList.add("bar");
                tempS.classList.add("inline-button");
            }else{
                tempS.innerHTML=selectionHeaderData[i-1];
                tempS.classList.add("bar");
                tempS.classList.add("bar-sel");
                tempS.style.width=selectionBoxDimensions[i-1];
            }
            list.append(tempS);
        }
        selectionHeader.append(list);
        resolve();
    })
}
function createSelectionBox(selectionBox){
    return new Promise(resolve=>{
        for(var i=0;i<selectionBoxData.length;i++){
            var list = document.createElement("div");
            list.classList.add("list");
            //Append inline button
            var tempS = document.createElement("span");
            tempS.classList.add("bar");
            tempS.classList.add("inline-button");
            list.append(tempS);
            //Append all other
            var j=0;
            for(var key in selectionBoxData[i]){
                var tempP = document.createElement("span");
                tempP.innerHTML=selectionBoxData[i][key];
                tempP.classList.add("bar");
                tempP.classList.add("bar-sel");
                tempP.style.width=selectionBoxDimensions[j];
                list.append(tempP);
                j++;
            }
            selectionBox.append(list);
        }
        resolve();
    })
}

function selectionScroll(selectionBox, selectionHeader){
    selectionBox.addEventListener("scroll",function(){
        var left=selectionBox.scrollLeft;
        selectionHeader.scrollLeft=left;
    })
}

async function createSelectionArea(selectionBox, selectionHeader, selectionHeader){
    await Promise.all([createSelectionHeader(selectionHeader),createSelectionBox(selectionBox,selectionBoxData)]);
    selectionScroll(selectionBox, selectionHeader);
}

function backClick(){
    document.getElementsByClassName("btn-back")[0].addEventListener("click",function(){
        document.location.href="..\\lang_region\\lang_region_H.html";
    })
}