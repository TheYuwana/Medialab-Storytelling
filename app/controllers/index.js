$.index.open();

/*
 *
 * Global Variables
 *  
 */

var displayWidth = Titanium.Platform.displayCaps.platformWidth;

var actionMenu = $.menu;
var menuState = false;

var mainView = $.index;
var contentView = $.content;
var activeNav = $.nav_button_active;
var navNews = $.nav_news;
var navTrend = $.nav_trending;
var navDump = $.nav_dump;
var loadingElem = $.loader;

var itemArrowOne = $.menu_item_arrow_one;
var itemArrowTwo = $.menu_item_arrow_two;
var itemArrowThree = $.menu_item_arrow_three;
var itemArrowFour = $.menu_item_arrow_four;

var animationSpeed = 250;

var listView;
var sections = [];
var itemTemplate;

// Start here

// Rotate arrows
itemArrowOne.transform = Ti.UI.create2DMatrix().rotate(180);
itemArrowTwo.transform = Ti.UI.create2DMatrix().rotate(180);
itemArrowThree.transform = Ti.UI.create2DMatrix().rotate(180);
itemArrowFour.transform = Ti.UI.create2DMatrix().rotate(180);

//Make sure the menu goes offscreen
var actionMenuWidth = (displayWidth / 100) * parseInt(actionMenu.width);
actionMenu.setLeft(-actionMenuWidth);

// Start with creating the first list view
createNewsList();

/*
 *
 * Listview creator
 *  
 */

function createDumpList(){
	
	createDumpTemplate();
	
	var dumpSection;
	var dumpData;
	var item;
	var data = [
		{"title": "Expressobar Dates Moet Sluiten", "tags": "Tags:", "elems": "Expressobar  Dates  Koffie  Koffiebar  Facebook","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Tabakzaak ZwartJanstraat", "tags": "Tags:", "elems": "Tabakzaak  ZwartJanstraat  Sluiten","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "CHIO", "tags": "Tags:", "elems": "Manege  Paarden  Kralingshe Bos  CHIO","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "DakPark", "tags": "Tags:", "elems": "Dakpark  Winkelcentrum  Park  Vierhavenstraat","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "De Nieuwe Kuip", "tags": "Tags:", "elems": "Feyenoord  Kuip  Gemeenteraad","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Foodtruck Grats Hamburgers", "tags": "Tags:", "elems": "Hamburgers  Foodtruck  Gratis  Eindrachtsplein","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Boijmans van Beuningen", "tags": "Tags:", "elems": "Museum  Boijmans  Beuningen  Expositie","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Kabouter Buttplug", "tags": "Tags:", "elems": "Eindrachtsplein  Kabouter  Buttplug  Kerstman","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Stadhuis Tijdelijk Dicht", "tags": "Tags:", "elems": "Stadhuis  Gesloten  Tijdelijk  Coolsingel","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Expressobar Dates Moet Sluiten", "tags": "Tags:", "elems": "Expressobar  Dates  Koffie  Koffiebar  Facebook","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Tabakzaak ZwartJanstraat", "tags": "Tags:", "elems": "Tabakzaak  ZwartJanstraat  Sluiten","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "CHIO", "tags": "Tags:", "elems": "Manege  Paarden  Kralingshe Bos  CHIO","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "DakPark", "tags": "Tags:", "elems": "Dakpark  Winkelcentrum  Park  Vierhavenstraat","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "De Nieuwe Kuip", "tags": "Tags:", "elems": "Feyenoord  Kuip  Gemeenteraad","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Foodtruck Grats Hamburgers", "tags": "Tags:", "elems": "Hamburgers  Foodtruck  Gratis  Eindrachtsplein","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Boijmans van Beuningen", "tags": "Tags:", "elems": "Museum  Boijmans  Beuningen  Expositie","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Kabouter Buttplug", "tags": "Tags:", "elems": "Eindrachtsplein  Kabouter  Buttplug  Kerstman","chat": "24", "camera": "16", "video": "12", "audio": "20"},
		{"title": "Stadhuis Tijdelijk Dicht", "tags": "Tags:", "elems": "Stadhuis  Gesloten  Tijdelijk  Coolsingel","chat": "24", "camera": "16", "video": "12", "audio": "20"}
	];
	
	for(var i = 0; i < data.length; i++){
		
		item = data[i];
		
		dumpSection = Ti.UI.createListSection();
		
		if(i%2 === 0){
			var back = "#EAEAEA";
		}else{
			var back = "#FFFFFF";
		}
		
		dumpData = [{
			item_title:{text: item.title},
			item_tags:{text: item.tags},
			item_tags_elems:{text: item.elems},
			item_icon_chat_text: {text: item.chat},
			item_icon_camera_text: {text: item.camera},
			item_icon_video_text: {text: item.video},
			item_icon_audio_text: {text: item.audio},
			properties: {backgroundColor: back, height: "80dp"}
		}];
		
		dumpSection.setItems(dumpData);
		sections.push(dumpSection);
	}
	
	listView.addEventListener('itemclick', function(e){
		
		var item = e.section.getItemAt(e.itemIndex);
		
		var controller = Alloy.createController('DumpList', {
			title: item.item_title.text,
			tags: item.item_tags_elems.text
		}).getView();
		
		controller.open();
		
	});
	
	listView.sections = sections;
	contentView.add(listView);
	loadingElem.setVisible(false);
}

function createNewsList(){
	
	createNewsTemplate();
	
	var vis;
	var dumpSection;
	var dumpData;
	var item;
	var data = [
		{"title": "Bijenvolk bespied op Ommoordse kinderboerderij", "image": "item1.png", "admin" : "false"},
		{"title": "Verhuurder Espressobar begint nu eigen koffiebar", "image": "itemTwo.png", "admin" : "false"},
		{"title": "Santa Claus of Kabouter Buttplug", "image": "item3.png", "admin" : "true"},
		{"title": "Bijenvolk bespied op Ommoordse kinderboerderij", "image": "item1.png", "admin" : "false"},
		{"title": "Verhuurder Espressobar begint nu eigen koffiebar", "image": "itemTwo.png", "admin" : "false"},
		{"title": "Santa Claus of Kabouter Buttplug", "image": "item3.png", "admin" : "true"}
			
	];
	
	for(var i = 0; i < data.length; i++){
		
		item = data[i];
		
		dumpSection = Ti.UI.createListSection();
		
		if(item.admin == "true"){
			vis = true;
		}else{
			vis = false;
		}
		
		dumpData = [{
			item_image: {image: item.image},
			item_title: {text: item.title},
			item_user_icon_OR: {visible: vis}
		}];
		
		dumpSection.setItems(dumpData);
		sections.push(dumpSection);
	}
	
	listView.addEventListener('itemclick', function(e){
		
		var item = e.section.getItemAt(e.itemIndex);
		
		var controller = Alloy.createController('NewsArticle', {
			title: item.item_title.text,
			image: item.item_image.image
		}).getView();
		
		controller.open();
		
	});
	
	listView.sections = sections;
	contentView.add(listView);
	loadingElem.setVisible(false);
	
}

function createTrendingList(){
	
	createTrendingTemplate();
	
	var vis;
	var dumpSection;
	var dumpData;
	var item;
	var data = [
		{"title": "Expressesobar Dates moet sluiten", "image": "/images/ESPRESSOBARGRAY.png", "item_user_madeby_value": "Yvo van Oosterum", "item_user_lastedit_value": "Charlie Voorn", "item_user_headerAmnt_value": "4", "item_user_approveAmnt_value": "3", "admin" : "false"},
		{"title": "Markthal staat op instorten", "image": "/images/MARKTHALGRAY.png", "item_user_madeby_value": "Yvo van Oosterum", "item_user_lastedit_value": "Charlie Voorn", "item_user_headerAmnt_value": "4", "item_user_approveAmnt_value": "3", "admin" : "true"},
		{"title": "Kubuswoningen wederom mooiste gebouw van Rotterdam", "image": "/images/KUBUSGRAY.png", "item_user_madeby_value": "Yvo van Oosterum", "item_user_lastedit_value": "Charlie Voorn", "item_user_headerAmnt_value": "4", "item_user_approveAmnt_value": "3", "admin" : "false"},
		{"title": "Expressesobar Dates moet sluiten", "image": "/images/ESPRESSOBARGRAY.png", "item_user_madeby_value": "Yvo van Oosterum", "item_user_lastedit_value": "Charlie Voorn", "item_user_headerAmnt_value": "4", "item_user_approveAmnt_value": "3", "admin" : "false"},
		{"title": "Markthal staat op instorten", "image": "/images/MARKTHALGRAY.png", "item_user_madeby_value": "Yvo van Oosterum", "item_user_lastedit_value": "Charlie Voorn", "item_user_headerAmnt_value": "4", "item_user_approveAmnt_value": "3", "admin" : "true"},
		{"title": "Kubuswoningen wederom mooiste gebouw van Rotterdam", "image": "/images/KUBUSGRAY.png", "item_user_madeby_value": "Yvo van Oosterum", "item_user_lastedit_value": "Charlie Voorn", "item_user_headerAmnt_value": "4", "item_user_approveAmnt_value": "3", "admin" : "false"}
			
	];
	
	for(var i = 0; i < data.length; i++){
		
		item = data[i];
		
		dumpSection = Ti.UI.createListSection();
		
		if(item.admin == "true"){
			vis = true;
		}else{
			vis = false;
		}
		
		dumpData = [{
			item_image: {image: item.image},
			item_title: {text: item.title},
			item_user_madeby: {text: "Aangemaakt door:"},
			item_user_lastedit: {text: "Laatst geweizigd:"},
			item_user_headerAmnt: {text: "Aantal hoofdstukken:"},
			item_user_approveAmnt: {text: "Aantal keer goedgekeurd:"},
			item_user_madeby_value: {text: item.item_user_madeby_value},
			item_user_lastedit_value: {text: item.item_user_lastedit_value},
			item_user_headerAmnt_value: {text: item.item_user_headerAmnt_value},
			item_user_approveAmnt_value: {text: item.item_user_approveAmnt_value},
			item_user_icon_OR: {visible: vis}
		}];
		
		dumpSection.setItems(dumpData);
		sections.push(dumpSection);
	}
	
	listView.addEventListener('itemclick', function(e){
		
		// Open trending editor
		/*
		var item = e.section.getItemAt(e.itemIndex);
		
		var controller = Alloy.createController('DumpList', {
			title: item.item_title.text,
			tags: item.item_tags_elems.text
		}).getView();
		
		controller.open();
		*/
		
	});

	listView.sections = sections;
	contentView.add(listView);
	loadingElem.setVisible(false);
}

/*
 *
 * Template functions
 *  
 */

function createDumpTemplate(){
	
	itemTemplate = {
		childTemplates: [{
			
			// Title
			type: 'Ti.UI.Label',
			bindId: 'item_title',
			properties: { 
				color: "#000000",
				font: {fontSize: "20dp", fontWeight: 'bold'},
				left: 10,
				top: 10
			 }
		},{
			
			// Tags
			type: 'Ti.UI.Label',
			bindId: 'item_tags',
			properties: { 
				color: "#01FF36",
				font: {fontSize: "20dp", fontWeight: 'bold'},
				left: 10,
				top: 40
			 }
		},{
			
			// Tag elements
			type: 'Ti.UI.Label',
			bindId: 'item_tags_elems',
			properties: { 
				color: "#000000",
				font: {fontSize: "16dp"},
				left: 65,
				top: 44
			 }
		},{
			
			// Chat Icon
			type: 'Ti.UI.ImageView',
			bindId: 'item_icon_chat',
			properties: { 
				image: "/Icons/chat2.png",
				right: 30,
				top: 5,
				width: "17dp",
				height: "13dp"
			 }
		},{
			
			// Chat Icon text
			type: 'Ti.UI.Label',
			bindId: 'item_icon_chat_text',
			properties: { 
				right: 10,
				top: 2,
				color: "#000000",
				font: {fontSize: "14dp"}
			 }
		},{
			
			// Camera Icon
			type: 'Ti.UI.ImageView',
			bindId: 'item_camera_image',
			properties: { 
				image: "/Icons/camera.png",
				right: 30,
				top: 25,
				width: "17dp",
				height: "12dp"
			 }
		},{
			
			// Camera Icon text
			type: 'Ti.UI.Label',
			bindId: 'item_icon_camera_text',
			properties: { 
				right: 10,
				top: 22,
				color: "#000000",
				font: {fontSize: "14dp"}
			 }
		},{
			
			// Video Icon
			type: 'Ti.UI.ImageView',
			bindId: 'item_video_image',
			properties: { 
				image: "/Icons/video.png",
				right: 30,
				top: 45,
				width: "17dp",
				height: "13dp"
			 }
		},{
			
			// Video Icon text
			type: 'Ti.UI.Label',
			bindId: 'item_icon_video_text',
			properties: { 
				right: 10,
				top: 42,
				color: "#000000",
				font: {fontSize: "14dp"}
			 }
		},{
			
			// Audio Icon
			type: 'Ti.UI.ImageView',
			bindId: 'item_audio_image',
			properties: { 
				image: "/Icons/mic.png",
				right: 30,
				top: 65,
				width: "9dp",
				height: "15dp"
			 }
		},{
			
			// Audio Icon text
			type: 'Ti.UI.Label',
			bindId: 'item_icon_audio_text',
			properties: { 
				right: 10,
				top: 62,
				color: "#000000",
				font: {fontSize: "14dp"}
			 }
		}]
	};
	
	addTemplateToListView();
}

function createNewsTemplate(){
	
	itemTemplate = {
		childTemplates: [{
			
			// Background
			type: 'Ti.UI.ImageView',
			bindId: 'item_image',
			properties: { 
				width: displayWidth,
				height: 300
			 }
		},{
			
			// Label Background
			type: 'Ti.UI.View',
			bindId: 'item_title_bg',
			properties: { 
				bottom: 0,
				width: "100%",
				height: 50,
				backgroundColor: "#303030",
				opacity: 0.8
			 }
		},{
			
			// Label
			type: 'Ti.UI.Label',
			bindId: 'item_title',
			properties: { 
				color: "#FFFFFF",
				font: {fontSize: "20dp", fontWeight: 'bold'},
				left: 10,
				bottom: 10
			 }
		},{
			
			// OPEN Rotterdam Icon 160
			type: 'Ti.UI.ImageView',
			bindId: 'item_user_icon_OR',
			properties: { 
				top: 0,
				right: 0,
				image: "/Icons/ORLogo.png",
				width: "60dp",
				height: "60dp"
			 }
		}]
	};
	
	addTemplateToListView();
}

function createTrendingTemplate(){
	
	var userLabelValueLeft = 220;
	var userInfoAncor = 0;
	
	itemTemplate = {
		childTemplates: [{
			
			// Background
			type: 'Ti.UI.ImageView',
			bindId: 'item_image',
			properties: { 
				width: displayWidth,
				height: 300
			 }
		},{
			
			// Label Background
			type: 'Ti.UI.View',
			bindId: 'item_title_bg',
			properties: { 
				width: "100%",
				bottom:0,
				height: 50,
				backgroundColor: "#303030",
				opacity: 0.8
			 }
		},{
			
			// Label
			type: 'Ti.UI.Label',
			bindId: 'item_title',
			properties: { 
				color: "#FFFFFF",
				font: {fontSize: "20dp", fontWeight: 'bold'},
				bottom: 10,
				textAlign: "center"
			 }
		},{
			
			// Background for user info 160
			type: 'Ti.UI.View',
			bindId: 'item_user_bg',
			properties: { 
				top: userInfoAncor,
				left:0,
				opacity: 0.7,
				width: "65%",
				height:"130dp",
				backgroundColor: "#FFFFFF"
			 }
		},{
			
			// Made by label
			type: 'Ti.UI.Label',
			bindId: 'item_user_madeby',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: (userInfoAncor + 5) ,
				left:10
			 }
		},{
			
			// Last edit label
			type: 'Ti.UI.Label',
			bindId: 'item_user_lastedit',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: (userInfoAncor + 32),
				left:10
			 }
		},{
			
			// Amount headers label
			type: 'Ti.UI.Label',
			bindId: 'item_user_headerAmnt',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: (userInfoAncor + 60),
				left:10
			 }
		},{
			
			// Amount approved label
			type: 'Ti.UI.Label',
			bindId: 'item_user_approveAmnt',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: (userInfoAncor + 88),
				left:10
			 }
		},{
			
			// Made By label value
			type: 'Ti.UI.Label',
			bindId: 'item_user_madeby_value',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: (userInfoAncor + 5),
				left: userLabelValueLeft
			 }
		},{
			
			// Last edit label value
			type: 'Ti.UI.Label',
			bindId: 'item_user_lastedit_value',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: (userInfoAncor + 32),
				left: userLabelValueLeft
			 }
		},{
			
			// Amount header label value
			type: 'Ti.UI.Label',
			bindId: 'item_user_headerAmnt_value',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: (userInfoAncor + 60),
				left: userLabelValueLeft
			 }
		},{
			
			// Amount approved label value
			type: 'Ti.UI.Label',
			bindId: 'item_user_approveAmnt_value',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: (userInfoAncor + 88),
				left: userLabelValueLeft
			 }
		},{
			
			// First profile icon
			type: 'Ti.UI.ImageView',
			bindId: 'item_user_icon_one',
			properties: { 
				top: (userInfoAncor + 10),
				left: (userLabelValueLeft - 25),
				image: "/Icons/profile.png",
				width: "12dp",
				height: "16dp"
			 }
		},{
			
			// Second profile icon
			type: 'Ti.UI.ImageView',
			bindId: 'item_user_icon_two',
			properties: { 
				top: (userInfoAncor + 38),
				left: (userLabelValueLeft - 25),
				image: "/Icons/profile.png",
				width: "12dp",
				height: "16dp"
			 }
		},{
			
			// OPEN Rotterdam Icon 160
			type: 'Ti.UI.ImageView',
			bindId: 'item_user_icon_OR',
			properties: { 
				top: 0,
				right: 0,
				image: "/Icons/ORLogo.png",
				width: "60dp",
				height: "60dp"
			 }
		}]
	};
	
	addTemplateToListView();
}

/*
 *
 * Button functions
 *  
 */

function openAdd(e){
	
	var controller = Alloy.createController('ArticleEdit', {
		mode: "new"
	}).getView();
	
	controller.open();
}

function openMenu(e){
	
	var transitionContent;
	var transitionMenu;
	
	if(menuState){
		
		transitionContent = 0;
		transitionMenu = -actionMenuWidth;
		
		menuState = false;
	
	}else{
		
		transitionContent = actionMenuWidth;
		transitionMenu = 0;
		
		menuState = true;
	}
	
	contentView.animate({left: transitionContent, duration: 250, curve: Titanium.UI.ANIMATION_CURVE_EASE_IN}, function(){});
	
	actionMenu.animate({left: transitionMenu, duration: 250, curve: Titanium.UI.ANIMATION_CURVE_EASE_IN}, function(){
		
		//Callback
	
	});
}

function getNewsList(e){
	
	clearView();
	activeNav.animate({left: 0, duration: animationSpeed, curve: Titanium.UI.ANIMATION_CURVE_EASE_IN}, function(){ createNewsList(); });
}

function getTrendingList(e){
	
	clearView();
	var newPos = navNews.size.width;
	activeNav.animate({left: navNews.width, duration: animationSpeed, curve: Titanium.UI.ANIMATION_CURVE_EASE_IN}, function(){ createTrendingList(); });
}


function getDumpList(e){
	
	clearView();
	var newPos = navNews.size.width + navTrend.size.width;
	activeNav.animate({left: newPos, duration: animationSpeed, curve: Titanium.UI.ANIMATION_CURVE_EASE_IN}, function(){ createDumpList(); });
}

function openProfile(e){
	
	var userName = $.menu_intro_text;
	
	var controller = Alloy.createController('Profile', {
		user: userName.text
	}).getView();
	
	controller.open();
}

/*
 *
 * Helper functions
 *  
 */
function clearView(){
	
	sections = [];
	contentView.remove(listView);
	loadingElem.setVisible(true);
}

function addTemplateToListView(){
	
	// Create listView
	listView = Ti.UI.createListView({
		templates: {'template': itemTemplate},
		defaultItemTemplate: 'template'
	});
}
