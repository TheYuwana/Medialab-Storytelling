var args = arguments[0] || {};

var mainView = $.container;
var mediaImage = $.media_image;
var mediaTitle = $.media_title;
var currentID = args.data.id;

var images = [
	"/item1.png", "/item3.png", "/item4.jpg", "/item5.jpg", "/item6.jpg", "/itemTwo.png",
	"/item1.png", "/item3.png", "/item4.jpg", "/item5.jpg", "/item6.jpg", "/itemTwo.png",
	"/item1.png", "/item3.png", "/item4.jpg", "/item5.jpg", "/item6.jpg", "/itemTwo.png",
	"/item1.png", "/item3.png", "/item4.jpg", "/item5.jpg", "/item6.jpg", "/itemTwo.png"
];

var titles =[
	"Bijen en een Camera", "Kabauter Butplug", "Koffieshop", "Martkhal awesomeness", "Wonen in een Kubus", "Dating en koffie",
	"Bijen en een Camera", "Kabauter Butplug", "Koffieshop", "Martkhal awesomeness", "Wonen in een Kubus", "Dating en koffie",
	"Bijen en een Camera", "Kabauter Butplug", "Koffieshop", "Martkhal awesomeness", "Wonen in een Kubus", "Dating en koffie",
	"Bijen en een Camera", "Kabauter Butplug", "Koffieshop", "Martkhal awesomeness", "Wonen in een Kubus", "Dating en koffie"
];

populate();

/*
 *
 * Button functions
 *  
 */
function back(e){
	
	mainView.close();
}

function openAdd(e){
	
	var controller = Alloy.createController('ArticleEdit', {
		mode: "new"
	}).getView();
	
	controller.open();
}

function prevMedia(e){
	
	currentID--;
	
	if(currentID < 0){
		currentID = titles.length - 1;
	}
	
	populate();
}

function nextMedia(e){
	
	currentID++;
	
	if(currentID >= titles.length){
		currentID = 0;
	}
	
	populate();
}

/*
 *
 * Helpers
 *  
 */

function populate(){
	
	mediaImage.setImage(images[currentID]);
	mediaTitle.text = titles[currentID];
}
