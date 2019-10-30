var countries = [
    "Please select a country",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic (CAR)",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (formerly Swaziland)",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia (formerly Macedonia)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (UAE)",
    "United Kingdom (UK)",
    "United States of America (USA)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City (Holy See)",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

var languages=[
    "Please select a language",
    "English",
    "Abkhaz",
    "Adyghe",
    "Afrikaans",
    "Akan",
    "Albanian",
    "Amharic",
    "Arabic",
    "Aragonese",
    "Aramaic",
    "Armenian",
    "Assamese",
    "Aymara",
    "Balinese",
    "Basque",
    "Betawi",
    "Bosnian",
    "Breton",
    "Bulgarian",
    "Cantonese",
    "Catalan",
    "Cherokee",
    "Chickasaw",
    "Chinese",
    "Coptic",
    "Cornish",
    "Corsican",
    "Crimean Tatar",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "Dawro",
    "Esperanto",
    "Estonian",
    "Ewe",
    "Fiji Hindi",
    "Filipino",
    "Finnish",
    "French",
    "Galician",
    "Georgian",
    "German",
    "Greek, Modern",
    "Greenlandic",
    "Haitian Creole",
    "Hawaiian",
    "Hebrew",
    "Hindi",
    "Hungarian",
    "Icelandic",
    "Indonesian",
    "Inuktitut",
    "Interlingua",
    "Irish",
    "Italian",
    "Japanese",
    "Javanese",
    "Kabardian",
    "Kalasha",
    "Kannada",
    "Kashubian",
    "Khmer",
    "Kinyarwanda",
    "Korean",
    "Kurdish/Kurdî",
    "Ladin",
    "Latgalian",
    "Latin",
    "Lingala",
    "Livonian",
    "Lojban",
    "Lower Sorbian",
    "Low German",
    "Macedonian",
    "Malay",
    "Malayalam",
    "Mandarin",
    "Manx",
    "Maori",
    "Mauritian Creole",
    "Middle English",
    "Middle Low German",
    "Min Nan",
    "Mongolian",
    "Norwegian",
    "Oriya",
    "Pangasinan",
    "Papiamentu",
    "Pashto",
    "Persian",
    "Pitjantjatjara",
    "Polish",
    "Portuguese",
    "Proto-Slavic",
    "Quenya",
    "Rajasthani",
    "Rapa Nui",
    "Romanian",
    "Russian",
    "Sanskrit",
    "Scots",
    "Scottish Gaelic",
    "Semai",
    "Serbian",
    "Serbo-Croatian",
    "Slovak",
    "Slovene",
    "Spanish",
    "Sinhalese",
    "Swahili",
    "Swedish",
    "Tagalog",
    "Tajik",
    "Tamil",
    "Tarantino",
    "Telugu",
    "Thai",
    "Tok Pisin",
    "Turkish",
    "Twi",
    "Ukrainian",
    "Upper Sorbian",
    "Urdu",
    "Uyghur",
    "Uzbek",
    "Venetian",
    "Vietnamese",
    "Vilamovian",
    "Volapük",
    "Võro",
    "Welsh",
    "Xhosa",
    "Yiddish",
    "Zazaki",
    "Zulu"
]

//Calling functions here
document.addEventListener("DOMContentLoaded",function(){
    var couList = document.getElementsByClassName("cou-lis")[0];
    var lanList = document.getElementsByClassName("lan-lis")[0];
    var couBox = document.getElementsByClassName("cou-box")[0];
    var lanBox = document.getElementsByClassName("lan-box")[0];
    var couCont = document.getElementsByClassName("cou-cont")[0];
    var lanCont = document.getElementsByClassName("lan-cont")[0];
    var couSearch = document.getElementsByClassName("cou-search")[0];
    var lanSearch = document.getElementsByClassName("lan-search")[0];
    var progBar = document.getElementsByClassName("prog-bar")[0];

    selectCountryLanguage(couList,lanList,couBox,lanBox,couCont,lanCont);
    dropBoxClick(couBox,lanBox,couCont,lanCont,couSearch,lanSearch);
    searchCou(couSearch,couList);
    searchLan(lanSearch,lanList);
    hideLists(couCont,lanCont);
    nextClickEvent(progBar);
});

//Functions
async function dropBoxClick(couBox,lanBox,couCont,lanCont,couSearch,lanSearch){
    await makeDropBox(couBox, lanBox);
    
    couBox.addEventListener("click",function(){
        var Coord = couBox.getBoundingClientRect();
        couCont.style.left=Coord.left;
        couCont.style.top=Coord.bottom;
        couCont.style.display="flex";
        couSearch.focus();
    })
    lanBox.addEventListener("click",function(){
        var Coord = lanBox.getBoundingClientRect();
        lanCont.style.left=Coord.left;
        lanCont.style.top=Coord.bottom;
        lanCont.style.display="flex";
        lanSearch.focus();
    })
}

function makeDropBox(couBox, lanBox){
    return new Promise(resolve=>{
        var tempC = document.createDocumentFragment();
        var spC = document.createElement("span");
        spC.innerHTML="Please select a country";
        spC.classList.add("inline-msg");
        var sp1 = document.createElement("span");
        sp1.innerHTML="#";
        sp1.classList.add("inline-button");
        tempC.append(spC);
        tempC.append(sp1);
        couBox.append(tempC);

        var tempL = document.createDocumentFragment();
        var spL = document.createElement("span");
        spL.innerHTML="Please select a language";
        spL.classList.add("inline-msg");
        var sp2 = document.createElement("span");
        sp2.innerHTML="#";
        sp2.classList.add("inline-button");
        tempL.append(spL);
        tempL.append(sp2);
        lanBox.append(tempL);
        resolve();
    })
}

function loadCou(couList){
    return new Promise(resolve=>{
        var aMain = document.createDocumentFragment();
        for(var i=0;i<countries.length;i++){
            var aTemp = document.createElement("div");
            aTemp.classList.add("cou");
            aTemp.classList.add("bar");
            aTemp.innerHTML= countries[i];
            aMain.append(aTemp);
        }
        couList.append(aMain);
        resolve();
    })
}

function loadLan(lanList){
    return new Promise(resolve=>{
        var bMain = document.createDocumentFragment();
        for(var i=0;i<languages.length;i++){
            var bTemp = document.createElement("div");
            bTemp.classList.add("lan");
            bTemp.classList.add("bar");
            bTemp.innerHTML= languages[i];
            bMain.append(bTemp);
        }
        lanList.append(bMain);
        resolve();
    })
}

function searchCou(couSearch,couList){
    couSearch.addEventListener('input',function(){
        for(var i=0;i<couList.children.length;i++){
            couList.children[i].classList.remove("hide");
            if(couList.children[i].innerHTML.toLowerCase().includes(couSearch.value.toLowerCase())){
                couList.children[i].classList.remove("hide");
            }else{
                couList.children[i].classList.add("hide");
            }
        }
    })
}

function searchLan(lanSearch,lanList){
    lanSearch.addEventListener('input',function(){
        for(var i=0;i<lanList.children.length;i++){
            lanList.children[i].classList.remove("hide");
            if(lanList.children[i].innerHTML.toLowerCase().includes(lanSearch.value.toLowerCase())){
                lanList.children[i].classList.remove("hide");
            }else{
                lanList.children[i].classList.add("hide");
            }
        }
    })
}

async function selectCountryLanguage(couList,lanList,couBox,lanBox,couCont,lanCont){
    await Promise.all([loadCou(couList), loadLan(lanList)]);
    var lists = document.getElementsByClassName("bar");
    for (var i = 0; i < lists.length; i++) {
        lists[i].addEventListener("click", function () {
            if(this.classList.contains("lan")){
                lanBox.children[0].innerHTML=this.innerHTML;
                lanCont.style.display="none";
            }else if(this.classList.contains("cou")){
                couBox.children[0].innerHTML=this.innerHTML;
                couCont.style.display="none";
            }
        });
    }
}

function buttonProgress(progBar){
    return new Promise(resolve=>{
        progBar.style.display="flex";
        progBar.style.color="black";
        var tempP = document.createDocumentFragment();
        if(progBar.innerHTML==""){
            for(var i=0;i<3;i++){
                var p = document.createElement("div");
                p.innerHTML=".";
                tempP.append(p);
            }
            progBar.append(tempP);
        }
        resolve(progBar);
    })
}
function progressDots(progBar){
    return new Promise(resolve=>{
        setTimeout(function(){
            progBar.children[0].classList.add("prog-anim");
        },200);
        setTimeout(function(){
            progBar.children[1].classList.add("prog-anim");
        },400);
        setTimeout(function(){
            progBar.children[2].classList.add("prog-anim");
            resolve();
        },600);
    });
}
async function nextClicked(progBar){
    await buttonProgress(progBar);
    await progressDots(progBar);
    document.location.href="..\\install_location\\install_location_H.html";
}

function nextClickEvent(progBar){
    document.getElementsByClassName("button")[0].addEventListener("click",function(){
        this.children[0].innerHTML="";
        nextClicked(progBar);
    })
}

function hideLists(couCont,lanCont){
    document.addEventListener("mouseup",function(){
        couCont.style.display="none";
        lanCont.style.display="none";
    })
}