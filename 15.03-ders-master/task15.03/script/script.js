/* ============ Blogun basligini h1  ===============================*/
var headTxt =[
	"Press On Read More To Open",
	"Links Can Be Direct Or As Read More Buttons Inside The News Reader",
	"This Item Is An External Link",
	"Custome Link Text, Hover When Chosen To Check.",
	"8 Different Arrow Layouts",
	"Supports RSS Feeds!"
];
/* ============ Blogun basligini p  ===============================*/
var headDate= [
	"March 12th, 2013",
	"March 12th, 2013",
	"March 12th, 2013",
	"March 12th, 2013",
	"March 12th, 2013",
	"March 12th, 2013"


];

/* ============ Blogun basligini bloqdaki fotolar  ===============================*/
var imgArr = [
	"img/1.jpg",
	"img/2.jpg",
	"img/2.jpg",
	null,
	null,
	null
];

/* =================Blogdaki   statlar    =========================*/
var statArr = [
	'2 Different Styles to continue reading this. The Full page Style and In-Widget Style. This is the full page view. Check examples for the In-widget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutp [...]',
	'Links can be 2 types "readmore" links and "direct" links. The readmore type will add a Continue reading button at the end of the article however the direct type will open the article in a new tab (can be self). To define a readmore link, add data-link-type to the list item. Otherwise the link will be direct. Lorem ipsum dolor [...]',
	'When this is pressed, the user will be redirected to a link predefined. You can set the target.',
	'You can add custom link text to any specific item. You can also choose to show the title or not, and where. Add to any news item the following code and viola!: data-link-text="CUSTOM LINK TEXT!" d [...]',
	'The plugin includes 8 different Arrow layouts including: left right sides top-left top-right bottom-left bottom-right top/bottom Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio [...]',
	'The plugin supports external/internal RSS Feeds. You can set the number of items to load. You must use a proxy to load external rss feeds, i included one. It is a basic one. Prefferable to use a more advanced and secure one. Google links to many.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis [...]'
];

/* =====================Asagidaki  linkler  ================================*/
var readArr = [
	"Read: Press on Read More to Open ",
	"Read: Links can be direct or as Read More buttons inside the News Reader",
	"Read: This item is an external link",
	"View Custome Link Text, hover when chosen to check.",
	"Read: 8 Different Arrow Layouts",
	"Read: Supports RSS Feeds!"

];
var main = document.getElementsByClassName('main')[0]; // umumi blog divi
var con = document.getElementsByClassName('con')[0]; 
var content =  document.getElementsByClassName("content")[0];
var selectBlog = document.getElementsByClassName('selectBlog')[0];
var chose = document.getElementsByClassName("chose")[0];

/*   ===========  blogun yaradilmasi   */
for(var i = 0; i<headTxt.length; i++){
var mainContent = document.createElement('div');
	var conHead = document.createElement("div");
	var conh1 = document.createElement("h1");
	var conp = document.createElement("p");
	var conStat = document.createElement("div");

	conHead.appendChild(conh1);
	conHead.appendChild(conp);
	mainContent.appendChild(conHead);

	/* ====================== eger blogda foto varsa yaratsin =============*/
if(imgArr[i]!=null){
	var conImg = document.createElement("img");
	mainContent.appendChild(conImg);
	conImg.setAttribute("src", imgArr[i]);
	mainContent.appendChild(conStat);
	conImg.style.height = "300px";
	conStat.style.height = "100px";
}
	/* ====================== eger blogda foto yoxdur ==================*/
else{
	mainContent.appendChild(conStat);
	conStat.style.height = "300px";
	conHead.style.marginTop = "100px";
}
	 conh1.style.color = "black";
	 conHead.style.height = "100px";
	 conHead.setAttribute("class","conHead");



	conh1.innerHTML = headTxt[i];
	conp.innerHTML = headDate[i];
	conStat.innerHTML = statArr[i];

	con.appendChild(mainContent);

	/* ===== Chose blog Acardionun yaradilmasi ============= */
	if(i<headTxt.length-1){
	var selectItem = document.createElement("div");
	selectBlog.appendChild(selectItem);
	selectItem.style.height="48.5px";
	selectItem.style.background="black"; 
	selectItem.style.cursor = "pointer";
		selectItem.innerHTML=headTxt[i+1];
		selectItem.style.color = "white";
		selectItem.style.fontSize = "12px";
		selectItem.style.lineHeight = "40px";
		selectItem.setAttribute("name",i);
	if(i!=0){selectItem.style.marginTop="2px";}
	}
}

var btns = document.getElementsByClassName("btn");
con.style.top = "0px";
selectBlog.style.top = "0px";
con.style.height = (1-headTxt.length)*(-500)+"px";
var t=0;  // hansi bloqun oldugunu teyin edir 

/* =====  sag klik altdaki bloqu getirir ============  */
function right(param) {
		if(t < headTxt.length-1){
		t++;
		con.style.top =parseInt(con.style.top) - 500+"px";
		selectBlog.style.top = parseFloat(selectBlog.style.top) - 50.5 + "px";
		btnCol();
		}else{
			return false;
		}
}

/* =====  sol klik ustdeki bloqu getirir ============  */
function left(param) {
	if(t > 0){
		t--;
		con.style.top =parseInt(con.style.top) + 500+"px";
		selectBlog.style.top = parseFloat(selectBlog.style.top) + 50.5 + "px";
		btnCol();
	}else{
		return false;
	}	
}

/* ============ Chose acardion ile blogu secmek ============= */
for(var j = 0; j<selectBlog.children.length;j++){
	
	selectBlog.children[j].addEventListener("click",function(){
		t2 = parseInt(this.getAttribute("name"))+1;
		t2 = t2 - t;
		console.log(t2);
		con.style.top =parseInt(con.style.top) - 500*t2+"px";
		selectBlog.style.top = parseFloat(selectBlog.style.top) - 50.5*t2 + "px";
		t=parseInt(this.getAttribute("name"))+1;
		btnCol();
	});
}
/* ============ sag veya sol klikin aktiv veya passiv oldugunu gosterir ============ */
function btnCol(){

	if(t==0){
		btns[0].style.background = "gray";
		btns[0].style.cursor = "default";

		btns[1].style.background = "black";
		btns[1].style.cursor = "pointer";
	}else if(t == headTxt.length-1){
		btns[1].style.background = "gray";
		btns[1].style.cursor = "default";

		btns[0].style.background = "black";
		btns[0].style.cursor = "pointer";
	}else{
		btns[0].style.background = "black";
		btns[0].style.cursor = "pointer";
		btns[1].style.background = "black";
		btns[1].style.cursor = "pointer";
	}

}

/* ====================== asagida cixan link =============*/

	read = document.getElementsByClassName("read")[0];

main.addEventListener("mouseover",function(){
	main.style.color = "#bbb";
	read.style.display = "block";
	var readP = read.childNodes[1];
	readP.style.left = "-100px";
	readP.innerHTML = readArr[t];
 	
 	var p=-100;
	var interval = setInterval(function(){
		readP.style.left = p+"px";
		p+=20;
		if(p > 70){
			clearInterval(interval);
		}
	},0.1);
		
});
main.addEventListener("mouseout",function(){
	main.style.color = "#888";
	read.style.display = "none";
});









