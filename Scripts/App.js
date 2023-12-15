//joseph
//7
//11/12/23

/*THIS makes the most beautiful christmas card one has ever seen*/

document.body.style.backgroundImage = "url(Images/moon.gif)";

//tree
var TREE = document.createElement("div");
var tree = document.createElement("img");
tree.src = "https://uxwing.com/wp-content/themes/uxwing/download/festival-culture-religion/christmas-tree-xmas-icon.png";
document.body.append(tree);
document.body.append(TREE);
tree.style.position = ("absolute");
tree.style.left = ("165px");
tree.style.bottom = ("0px");

//allen
var ALLEN = document.createElement("div");
var allen = document.createElement("img");
allen.src = "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif";
document.body.append(allen);
document.body.append(ALLEN);
allen.style.position = ("absolute");
allen.style.left = ("960px");
allen.style.bottom = ("480px");

//wakk
var wall = document.createElement("div");
wall.style.width = "400px";
wall.style.height = "200px";
wall.style.border = "black solid 5px";
wall.style.backgroundColor = "white"
wall.style.borderRadius = "50%"
wall.style.position = ("absolute");
wall.style.left = ("120px");
wall.style.bottom = ("0px");
document.body.append(wall);

var II = document.createElement("div");
var i = document.createElement("img");
i.src = "https://en-wiki.metin2.gameforge.com/images/b/ba/Hungry_Alpha_Wolf.png";
document.body.append(i);
document.body.append(II);
i.style.position = ("absolute");
i.style.left = ("150px");
i.style.bottom = ("0px");

//cage
var CAGE = document.createElement("div");
var cage = document.createElement("img");
cage.src = "https://static.vecteezy.com/system/resources/thumbnails/008/505/771/small/wire-fence-illustration-png.png";
document.body.append(cage);
document.body.append(CAGE);
cage.style.position = ("absolute");
cage.style.left = ("150px");
cage.style.bottom = ("0px");

//pole
var box = document.createElement("div");
box.style.width = "50px";
box.style.height = "250px";
box.style.border = "black solid 5px";
box.style.backgroundColor = "#5C4033"
box.style.borderRadius = "0"
box.style.position = ("absolute");
box.style.left = ("100px");
box.style.bottom = ("0px");
document.body.append(box);

var box2 = document.createElement("div");
box2.style.width = "50px";
box2.style.height = "250px";
box2.style.border = "black solid 5px";
box2.style.backgroundColor = "#5C4033"
box2.style.borderRadius = "0"
box2.style.position = ("absolute");
box2.style.left = ("498px");
box2.style.bottom = ("0px");
document.body.append(box2);

// snoop dogg
var DOGG = document.createElement("div");
var dogg = document.createElement("img");
dogg.src = "https://purepng.com/public/uploads/large/snoop-dogg-4v7.png";
document.body.append(dogg);
document.body.append(DOGG);
dogg.style.position = ("absolute");
dogg.style.left = ("400px");
dogg.style.bottom = ("0px");

//music
var AU = document.createElement("div");
var au = new Audio("Music/Laufey - Winter Wonderland.mp3");
var play = prompt("do you want music? y or n");
if (play == "y") {
    au.autoplay = true;
    au.controls = true;
    au.loop = true;
    document.body.appendChild(au);
    document.body.append(AU);
  } else {
    au.autoplay = false; 
    au.controls = false;
    au.loop = false;
}

//cross
var cross1 = document.createElement("div");
cross1.style.width = "25px";
cross1.style.height = "400px";
cross1.style.border = "black solid 5px";
cross1.style.backgroundColor = "red"
cross1.style.borderRadius = "0"
cross1.style.position = ("absolute");
cross1.style.left = ("100px");
cross1.style.top = ("75px");
document.body.append(cross1);

var cross2 = document.createElement("div");
cross2.style.width = "0px";
cross2.style.height = "0px";
cross2.style.backgroundColor = "green";
cross2.style.border = "black solid 100px";
cross2.style.borderleftColor = "transparent";
cross2.style.borderrightColor = "transparent";
cross2.style.borderBottomColor = "transparent";
cross2.style.position = ("absolute");
cross2.style.left = ("15px");
cross2.style.top = ("80px");
document.body.append(cross2);

//text
var text1 = document.createElement("p");
text1.innerHTML = ("MERRY HOLLIDAYS TO ALL PEOPLE");
document.body.append(text1);
text1.style.position = ("absolute");
text1.style.left = ("50px");
text1.style.bottom = ("550px");
text1.style.color = ("pink");
text1.style.fontSize = ("3em");
text1.style.fontStyle = "italic, bold"
text1.style.fontFamily = "cursive"

//menorah
var CANDEL = document.createElement("div");
var candel = document.createElement("img");
candel.src = "https://icon2.cleanpng.com/20171220/xhw/candle-menora-png-image-5a3b3c14da3467.9863936915138314448938.jpg";
document.body.append(candel);
document.body.append(CANDEL);
candel.style.position = ("absolute");
candel.style.left = ("900px");
candel.style.top = ("350px");

var text2 = document.createElement("p");
text2.innerHTML = ("SNOOP DOGGS DOG ALMOST GOT THE MENORAH SO SNOOP DOGG LOCKED UP SNOOP DOGGS DOG");
document.body.append(text2);
text2.style.position = ("absolute");
text2.style.left = ("905px");
text2.style.bottom = ("450px");
text2.style.color = ("orange");
text2.style.fontSize = ("12px");
text2.style.fontStyle = "italic, bold"

var text3 = document.createElement("p");
text3.innerHTML = ("THIS CAT IS SCHMOOVIN AND GROOVIN");
document.body.append(text3);
text3.style.position = ("absolute");
text3.style.left = ("905px");
text3.style.bottom = ("430px");
text3.style.color = ("yellow");
text3.style.fontSize = ("12px");
text3.style.fontStyle = "italic, bold"