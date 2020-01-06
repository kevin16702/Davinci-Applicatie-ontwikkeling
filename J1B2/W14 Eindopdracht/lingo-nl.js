var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"adres",
	"avond",
	"aders",
	"alarm",
	"boten",
	"balen",
	"beter",
	"bomen",
	"boren",
	"boven",
	"boxen",
	"brood",
	"broek",
	"brand",
	"breed",
	"benen",
	"beeld",
	"brief",
	"beten",
	"basis",
	"blauw",
	"beren",
	"buren",
	"banen",
	"bloed",
	"broer",
	"blond",
	"boter",
	"beleg",
	"breng",
	"baken",
	"beker",
	"blind",
	"bezig",
	"baden",
	"bedel",
	"bazen",
	"bazin",
	"baren",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"conus",
	"cello",
	"creme",
	"cloud",
	"cacao",
	"cadet",
	"cavia",
	"ceder",
	"combi",
	"china",
	"clown",
	"draai",
	"deden",
	"dalen",
	"derde",
	"delen",
	"dwaas",
	"daden",
	"dader",
	"dames",
	"diner",
	"datum",
	"dozen",
	"dreun",
	"duits",
	"dagen",
	"deren",
	"dwerg",
	"dwaal",
	"dwing",
	"druil",
	"droog",
	"draad",
	"dweil",
	"drank",
	"duren",
	"dwars",
	"drugs",
	"daten",
	"daler",
	"doorn",
	"disco",
	"degen",
	"droom",
	"dient",
	"drone",
	"dadel",
	"duwen",
	"druif",
	"deken",
	"deler",
	"elven",
	"eigen",
	"enger",
	"engel",
	"elder",
	"enkel",
	"effen",
	"email",
	"egaal",
	"fiets",
	"friet",
	"files",
	"forel",
	"films",
	"feest",
	"fruit",
	"falen",
	"flora",
	"fauna",
	"feeen",
	"freak",
	"forum",
	"fusie",
	"geven",
	"gaven",
	"groen",
	"graai",
	"getal",
	"grens",
	"grond",
	"groef",
	"graal",
	"gewei",
	"games",
	"grote",
	"groet",
	"garen",
	"gebak",
	"graag",
	"genre",
	"glans",
	"geluk",
	"geeuw",
	"horen",
	"heren",
	"halen",
	"hagel",
	"haren",
	"helen",
	"harde",
	"hemel",
	"hoofd",
	"huren",
	"hamer",
	"haken",
	"heden",
	"hotel",
	"hobby",
	"heler",
	"hoger",
	"ieder",
	"index",
	"immer",
	"icoon",
	"inlog",
	"inzet",
	"innig",
	"jovel",
	"jaren",
	"jicht",
	"jabot",
	"jacht",
	"jaden",
	"jagen",
	"jager",
	"japon",
	"jarig",
	"jawel",
	"jeans",
	"jemig",
	"jeugd",
	"joint",
	"jonas",
	"joule",
	"koken",
	"kreet",
	"koker",
	"kerst",
	"kegel",
	"koude",
	"kader",
	"krent",
	"kamer",
	"kaars",
	"kaart",
	"kraan",
	"krant",
	"keren",
	"kruid",
	"kerel",
	"kubus",
	"kraal",
	"kleur",
	"kroon",
	"klein",
	"korst",
	"klopt",
	"kabel",
	"kunst",
	"kopje",
	"krans",
	"klimt",
	"kater",
	"klink",
	"kudde",
	"kruis",
	"lopen",
	"laten",
	"lepel",
	"links",
	"laden",
	"leven",
	"lezen",
	"lucht",
	"lenen",
	"laser",
	"lente",
	"licht",
	"lader",
	"leder",
	"lunch",
	"lijst",
	"leger",
	"leden",
	"legen",
	"lagen",
	"lezer",
	"lever",
	"lingo",
	"loper",
	"luier",
	"lager",
	"leeuw",
	"maand",
	"malen",
	"maken",
	"media",
	"meter",
	"motor",
	"maten",
	"markt",
	"mazen",
	"molen",
	"meest",
	"meren",
	"model",
	"meden",
	"maden",
	"macht",
	"meeuw",
	"mager",
	"magen",
	"maren",
	"manen",
	"noord",
	"nieuw",
	"negen",
	"namen",
	"neven",
	"nodig",
	"naden",
	"neder",
	"nemen",
	"onder",
	"optel",
	"ovaal",
	"ovale",
	"onwel",
	"optie",
	"orden",
	"oppas",
	"ouder",
	"ophef",
	"oases",
	"palen",
	"plein",
	"pegel",
	"paars",
	"prijs",
	"piano",
	"pixel",
	"paden",
	"pasta",
	"pizza",
	"poten",
	"paard",
	"puber",
	"pauze",
	"preek",
	"polis",
	"pater",
	"proef",
	"panda",
	"penis",
	"prins",
	"pluto",
	"polen",
	"plint",
	"quota",
	"quant",
	"quark",
	"queue",
	"quilt",
	"quote",
	"robot",
	"reken",
	"raden",
	"regen",
	"radio",
	"rente",
	"regio",
	"rugby",
	"reden",
	"roken",
	"ruzie",
	"ruist",
	"regel",
	"racen",
	"races",
	"riool",
	"ramen",
	"radar",
	"roman",
	"rokje",
	"razen",
	"roede",
	"staan",
	"staal",
	"speel",
	"steeg",
	"stoel",
	"stook",
	"steek",
	"schep",
	"spijs",
	"stoep",
	"shirt",
	"samen",
	"sites",
	"sport",
	"spalk",
	"sjaal",
	"storm",
	"staat",
	"steun",
	"strak",
	"serie",
	"shows",
	"schat",
	"snoep",
	"sfeer",
	"smeer",
	"speer",
	"scene",
	"speld",
	"smeed",
	"smaak",
	"super",
	"stand",
	"steer",
	"smelt",
	"sedan",
	"skier",
	"sluis",
	"sneer",
	"steel",
	"truck",
	"terug",
	"typen",
	"talen",
	"taboe",
	"tegel",
	"taart",
	"tafel",
	"trouw",
	"teken",
	"teren",
	"taken",
	"treur",
	"tenen",
	"titel",
	"thuis",
	"tiara",
	"teder",
	"toets",
	"tabak",
	"trein",
	"tarwe",
	"telen",
	"teler",
	"uiten",
	"uilig",
	"uitje",
	"uiver",
	"ultra",
	"uniek",
	"uppie",
	"uraan",
	"uiers",
	"velen",
	"vloer",
	"video",
	"varen",
	"vegen",
	"veren",
	"vader",
	"vaten",
	"vuren",
	"vrouw",
	"vlees",
	"vogel",
	"vroeg",
	"vezel",
	"veins",
	"vorst",
	"veder",
	"vanaf",
	"vieze",
	"veger",
	"villa",
	"veler",
	"vrede",
	"vries",
	"woord",
	"wagen",
	"wonen",
	"waren",
	"warme",
	"weten",
	"water",
	"weren",
	"wazig",
	"wegen",
	"weven",
	"wezen",
	"weken",
	"wraak",
	"wilde",
	"wreed",
	"wrede",
	"wenst",
	"woest",
	"xenon",
	"yacht",
	"yucca",
	"zwaar",
	"zware",
	"zesde",
	"zagen",
	"zalig",
	"zomer",
	"zeden",
	"zwart",
	"zeven",
	"zicht",
	"zadel",
	"zweet",
	"zenuw",
	"zweer",
	"zweef",
	"zaden",
	"zaken",
	"zeker",
	"zever",
	"zeeen"];
	var wordsplit = [];
	var textbox = document.createElement("input");
	var container = document.createElement("div");
	var button = document.createElement("button");
	var turn = 0;
	var e = 0;
	var count = 0;
	var i = 0;
	textbox.setAttribute("id", "textbox",);
	container.setAttribute("id", "container");
	button.setAttribute("id", "button");
	button.innerHTML = "check"
	document.body.appendChild(container);
	container.appendChild(textbox);
	container.appendChild(button);
	var sameletter = (/([a-zA-Z]).*?\1/).test(word);

	//changeclass function


	var changeclass = function(cng, old, newClass){
		cng.className = cng.className.replace(old, newClass);
	}



	createboxes();
	function checklength(){
		if(textbox.value.length==word.length){
			lingo()
		}
		else{
			checklength();
		}
		return;
	}
	// print the letters
function lingo(){
	if(e<=4){
		input = textbox.value.toLowerCase();
		console.log(input);
		++e
		var row = "boxcontainer" + turn;
		turn++
		count = 0;
		var childboxes = document.getElementById(row).getElementsByTagName('div');
			for(var i=0; i<childboxes.length;i++){
			childboxes[i].innerHTML = input[i];
			if(input[i] == word[i]){
				changeclass(childboxes[i],'default', 'green')
				count++
			}
			else if(word.indexOf(input[i])!=-1){
				if(sameletter === false && childboxes[word.indexOf(input[i])].className != "green"){
					changeclass(childboxes[i], 'default', 'yellow')
				}
				else if(sameletter === true && childboxes[word.indexOf(input[i])].className == "green"){
				}
				else if(sameletter === true){
					var ind = getalindexes(word, input[i])
					if(ind.length > 1){
						for(var l=0; l<ind.length;l++){
							if(childboxes[ind[l]].className != "green" && childboxes[ind[l]].className != "yellow"){
								changeclass(childboxes[i], 'default', 'yellow');
							}
						}
					}
					else if(childboxes[word.indexOf(input[i])].className1 != "green"){
						changeclass(childboxes[i], 'default', 'yellow');
					}
				}
			}
			if(count === 5){
				end();
			}
			else{}
		}
	}
		else{
			alert("je hebt verloren. het woord was " + word)
	}
}
	var getalindexes = function getalindex(arr, val){
		var indexes = [], i;
		for(i = 0; i < arr.length; i++){
			if (arr[i]=== val)
			indexes.push(i);
			return indexes;
		}
	}
	var word = words[Math.floor(Math.random() * words.length)];
	var hasDuplicates = (/([a-zA-Z]).*?\1/).test(word)
	console.log(word);
document.getElementById('boxcontainer0').firstElementChild.innerHTML = word[0];
button.onclick = checklength;
var row = "boxcontainer" + turn;
var childboxes = document.getElementById(row).getElementsByTagName('div');




// create the boxes
function createboxes(){
	for(y=0; y<=4; y++){
		var boxcontainer = document.createElement("div");
		document.body.appendChild(boxcontainer);
		boxcontainer.setAttribute("id", "boxcontainer" + y);
		boxcontainer.style.height = "100px";
		boxcontainer.style.width= "500px";
		boxcontainer.style.display = "flex"
		boxcontainer.style.margin = "0 auto"
	for(o=0; o<=4; o++){
		var box = document.createElement("div");
		box.setAttribute("id", "box" + o);
		box.setAttribute("class", "default")	
		box.style.width = "100px";
		box.style.height = "100px";
		box.style.fontSize = "75px";
		box.style.textShadow = "1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey, -1px -1px 0 grey"
		box.style.fontFamily = "Arial, Helvetica, sans-serif"
		box.style.fontWeight = "600"
		box.style.lineHeight = "100px";
		box.style.color = "white";
		boxcontainer.appendChild(box);
		}
	}
}
function end(){
	alert("je hebt het spel gewonnen")
	container.removeChild(textbox);
	container.removeChild(button);
}