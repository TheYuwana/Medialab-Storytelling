$.index.open();

/*
 *
 * Global Variables
 *  
 */

var displayWidth = Titanium.Platform.DisplayCaps.platformWidth;

var mainView = $.index;
var contentView = $.content;
var activeNav = $.nav_button_active;
var navNews = $.nav_news;
var navTrend = $.nav_trending;
var navDump = $.nav_dump;
var loadingElem = $.loader;
var animationSpeed = 250;

var listView;
var sections = [];
var itemTemplate;

// Start here
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
		{"title": "Expressobar Dates Moet Sluiten", "tags": "Tags:", "elems": "Expressobar  Dates  Koffie  Koffiebar  Facebook"},
		{"title": "Tabakzaak ZwartJanstraat", "tags": "Tags:", "elems": "Tabakzaak  ZwartJanstraat  Sluiten"},
		{"title": "CHIO", "tags": "Tags:", "elems": "Manege  Paarden  Kralingshe Bos  CHIO"},
		{"title": "DakPark", "tags": "Tags:", "elems": "Dakpark  Winkelcentrum  Park  Vierhavenstraat"},
		{"title": "De Nieuwe Kuip", "tags": "Tags:", "elems": "Feyenoord  Kuip  Gemeenteraad"},
		{"title": "Foodtruck Grats Hamburgers", "tags": "Tags:", "elems": "Hamburgers  Foodtruck  Gratis  Eindrachtsplein"},
		{"title": "Boijmans van Beuningen", "tags": "Tags:", "elems": "Museum  Boijmans  Beuningen  Expositie"},
		{"title": "Kabouter Buttplug", "tags": "Tags:", "elems": "Eindrachtsplein  Kabouter  Buttplug  Kerstman"},
		{"title": "Stadhuis Tijdelijk Dicht", "tags": "Tags:", "elems": "Stadhuis  Gesloten  Tijdelijk  Coolsingel"}		
	];
	
	for(var i = 0; i < data.length; i++){
		
		item = data[i];
		
		dumpSection = Ti.UI.createListSection();
		
		if(i%2 === 0){
			
			dumpData = [
				{item_title:{text: item.title},
				 item_tags:{text: item.tags},
				  item_tags_elems:{text: item.elems},
				   properties: {backgroundColor: "#EAEAEA", height: "80dp"}}
			];
			
		}else{
			dumpData = [
				{item_title:{text: item.title},
				 item_tags:{text: item.tags},
				  item_tags_elems:{text: item.elems},
				   properties: {backgroundColor: "#FFFFFF", height: "80dp"}}
			];
		}
		
		dumpSection.setItems(dumpData);
		sections.push(dumpSection);
	}

	listView.sections = sections;
	contentView.add(listView);
	loadingElem.setVisible(false);
}

function createNewsList(){
	
	createNewsTemplate();
	
	var dumpSection;
	var dumpData;
	var item;
	var data = [
		{"title": "Bijenvolk bespied op Ommoordse kinderboerderij", "image": "item1.png"},
		{"title": "Verhuurder Espressobar begint nu eigen koffiebar", "image": "itemTwo.png"},
		{"title": "Santa Claus of Kabouter Buttplug", "image": "item3.png"}
			
	];
	
	for(var i = 0; i < data.length; i++){
		
		item = data[i];
		
		dumpSection = Ti.UI.createListSection();
		
		dumpData = [
			{item_image: {image: item.image},
			 item_title: {text: item.title}}
		];
		
		dumpSection.setItems(dumpData);
		sections.push(dumpSection);
	}
	
	listView.addEventListener('itemclick', function(e){
		
		var item = e.section.getItemAt(e.itemIndex);
		
		var controller = Alloy.createController('NewsArticle', {title: item.item_title.text}).getView();
		
		controller.open();
		
	});
	
	listView.sections = sections;
	contentView.add(listView);
	loadingElem.setVisible(false);
	
}

function createTrendingList(){
	
	createTrendingTemplate();
	
	var dumpSection;
	var dumpData;
	var item;
	var data = [
		{"title": "Expressesobar Dates moet sluiten", "image": "item4.jpg", "item_user_madeby_value": "Yvo van Oosterum", "item_user_lastedit_value": "Charlie Voorn", "item_user_headerAmnt_value": "4", "item_user_approveAmnt_value": "3"},
		{"title": "Markthal staat op instorten", "image": "item5.jpg", "item_user_madeby_value": "Yvo van Oosterum", "item_user_lastedit_value": "Charlie Voorn", "item_user_headerAmnt_value": "4", "item_user_approveAmnt_value": "3"},
		{"title": "Kubuswoningen wederom mooiste gebouw van Rotterdam", "image": "item6.jpg", "item_user_madeby_value": "Yvo van Oosterum", "item_user_lastedit_value": "Charlie Voorn", "item_user_headerAmnt_value": "4", "item_user_approveAmnt_value": "3"}
			
	];
	
	for(var i = 0; i < data.length; i++){
		
		item = data[i];
		
		dumpSection = Ti.UI.createListSection();
		
		dumpData = [
			{item_image: {image: item.image},
			 item_title: {text: item.title},
			 item_user_madeby: {text: "Aangemaakt door:"},
			 item_user_lastedit: {text: "Laatst geweizigd:"},
			 item_user_headerAmnt: {text: "Aantal hoofdstukken:"},
			 item_user_approveAmnt: {text: "Aantal keer goedgekeurd:"},
			 item_user_madeby_value: {text: item.item_user_madeby_value},
			 item_user_lastedit_value: {text: item.item_user_lastedit_value},
			 item_user_headerAmnt_value: {text: item.item_user_headerAmnt_value},
			 item_user_approveAmnt_value: {text: item.item_user_approveAmnt_value}}
		];
		
		dumpSection.setItems(dumpData);
		sections.push(dumpSection);
	}

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
				backgroundColor: "#000000",
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
		}]
	};
	
	addTemplateToListView();
}

function createTrendingTemplate(){
	
	var userLabelValueLeft = 220;
	
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
				top:0,
				height: 50,
				backgroundColor: "#000000",
				opacity: 0.8
			 }
		},{
			
			// Label
			type: 'Ti.UI.Label',
			bindId: 'item_title',
			properties: { 
				color: "#FFFFFF",
				font: {fontSize: "20dp", fontWeight: 'bold'},
				top: 10,
				textAlign: "center"
			 }
		},{
			
			// Background for user info
			type: 'Ti.UI.View',
			bindId: 'item_user_bg',
			properties: { 
				top: 160,
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
				top: 165,
				left:10
			 }
		},{
			
			// Last edit label
			type: 'Ti.UI.Label',
			bindId: 'item_user_lastedit',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: 192,
				left:10
			 }
		},{
			
			// Amount headers label
			type: 'Ti.UI.Label',
			bindId: 'item_user_headerAmnt',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: 220,
				left:10
			 }
		},{
			
			// Amount approved label
			type: 'Ti.UI.Label',
			bindId: 'item_user_approveAmnt',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: 248,
				left:10
			 }
		},{
			
			// Made By label value
			type: 'Ti.UI.Label',
			bindId: 'item_user_madeby_value',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: 165,
				left: userLabelValueLeft
			 }
		},{
			
			// Last edit label value
			type: 'Ti.UI.Label',
			bindId: 'item_user_lastedit_value',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: 192,
				left: userLabelValueLeft
			 }
		},{
			
			// Amount header label value
			type: 'Ti.UI.Label',
			bindId: 'item_user_headerAmnt_value',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: 220,
				left: userLabelValueLeft
			 }
		},{
			
			// Amount approved label value
			type: 'Ti.UI.Label',
			bindId: 'item_user_approveAmnt_value',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: 248,
				left: userLabelValueLeft
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
