var selectionHeaderData=[
    "Partition",
    "Type",
    "Total Space",
    "Free Space"
];
var selectionContData=[
    { partition:"Local Disk C",
    type:"System",
    total_space:"146.50 GB",
    free_space:"62.32 GB" },
    { partition:"Local Disk C",
    type:"NTFS",
    total_space:"146.50 GB",
    free_space:"62.32 GB" },
    { partition:"Local Disk C",
    type:"Raw",
    total_space:"146.50 GB",
    free_space:"62.32 GB" },
    { partition:"Local Disk C",
    type:"Reserved",
    total_space:"146.50 GB",
    free_space:"62.32 GB" },
];

var selectionContDimensions=[
    "8rem",
    "6rem",
    "8rem",
    "8rem"
];

var menuOptions=[
    {formattedDisk:"Install, Delete Partition, Merge Partition"},
    {system:"Upgrade, Format, Delete Partition, Merge Partition"},
    {rawPartition:"Format"}
];

document.addEventListener("DOMContentLoaded",function(){
    var selectionCont = document.getElementsByClassName("selection-cont")[0];
    var selectionHeader = document.getElementsByClassName("selection-header")[0];

    backClick();
    createSelectionArea(selectionCont, selectionHeader);
})

function createSelectionHeader(selectionHeader){
    return new Promise(resolve=>{
        var list = document.createElement("div");
        list.classList.add("list-title");
        for(var i=0;i<selectionHeaderData.length+1;i++){
            var tempS = document.createElement("span");
            if(i==0){
                tempS.classList.add("bar");
                tempS.classList.add("bar-title");
                tempS.classList.add("inline-button");
            }else{
                tempS.innerHTML=selectionHeaderData[i-1];
                tempS.classList.add("bar");
                tempS.classList.add("bar-sel");
                tempS.classList.add("bar-title");
                tempS.style.width=selectionContDimensions[i-1];
            }
            list.append(tempS);
        }
        selectionHeader.append(list);
        resolve();
    })
}
function createselectionCont(selectionCont){
    return new Promise(resolve=>{
        for(var i=0;i<selectionContData.length;i++){
            var list = document.createElement("div");
            list.classList.add("list");
            list.classList.add("disk");
            //Append inline button
            var tempS = document.createElement("span");
            tempS.classList.add("bar");
            tempS.classList.add("inline-button");
            list.append(tempS);
            //Append all other
            var j=0;
            for(var key in selectionContData[i]){
                var tempP = document.createElement("span");
                tempP.innerHTML=selectionContData[i][key];
                tempP.classList.add("bar");
                tempP.classList.add("bar-sel");
                tempP.style.width=selectionContDimensions[j];
                list.append(tempP);
                j++;
            }
            selectionCont.append(list);
        }
        resolve();
    })
}

function selectionScroll(selectionCont, selectionHeader){
    selectionCont.addEventListener("scroll",function(){
        var left=selectionCont.scrollLeft;
        selectionHeader.scrollLeft=left;
    })
}

function diskSelected(){
    var diskList = document.getElementsByClassName("disk");
    for(var d=0;d<diskList.length;d++){
        diskList[d].addEventListener("click",function(){
            alert(this.children[2].innerHTML);
        })
    }
}

async function createSelectionArea(selectionCont, selectionHeader){
    await Promise.all([createSelectionHeader(selectionHeader),createselectionCont(selectionCont,selectionContData)]);
    selectionScroll(selectionCont, selectionHeader);
    diskSelected();
}

function backClick(){
    document.getElementsByClassName("btn-back")[0].addEventListener("click",function(){
        document.location.href="..\\lang_region\\lang_region_H.html";
    })
}