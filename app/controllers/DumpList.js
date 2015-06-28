/*
 *
 * Global Variables
 *  
 */
var args = arguments[0] || {};

var mainView = $.container;
var headerTitle = $.header_title;
var headerTags = $.header_tags;
var contentView = $.content;
var footer = $.footer;


var navStory = $.nav_stories;
var navStoryText = $.nav_stories_text;

var navMedia = $.nav_media;
var navMediaText = $.nav_media_text;

var mediaView;
var listView;
var sections = [];
var itemTemplate;

/*
 *
 * Start here
 *  
 */

// Populate header
headerTitle.text = args.title;
headerTags.text = "Tags: " + args.tags;

// Set initial navigation
navStory.setBackgroundColor("#01FF36");
navStoryText.setColor("#000000");

// Create list of articles
createArticleList();

/*
 *
 * Button functions
 *  
 */
function backToDump(e){
	
	mainView.close();
}

function openAdd(e){
	
	var controller = Alloy.createController('ArticleEdit', {
		mode: "new"
	}).getView();
	
	controller.open();
}


function getStoryList(e){
	
	footer.setVisible(false);
	
	navStory.setBackgroundColor("#01FF36");
	navStoryText.setColor("#000000");
	
	navMedia.setBackgroundColor("#303030");
	navMediaText.setColor("#01FF36");
	
	clearView(mediaView);
	
	createArticleList();
}

function getMediaView(e){
	
	navStory.setBackgroundColor("#303030");
	navStoryText.setColor("#01FF36");
	
	navMedia.setBackgroundColor("#01FF36");
	navMediaText.setColor("#000000");
	
	clearView(listView);
	
	createMediaView();
	
	footer.setVisible(true);
}

function openMedia(e){
		
		var item = e.section.getItemAt(e.itemIndex);
		
		var controller = Alloy.createController('DumpList', {
			data: item.data.text
		}).getView();
		
		controller.open();
}

/*
 *
 * List creator
 *  
 */

function createMediaView(){
	
	mediaView = Ti.UI.createScrollView({
		width: "100%",
		height: "72%"
	});
	
	var container = Ti.UI.createView({
		layout: "horizontal",
		width: "100%"
	});
	
	mediaView.add(container);
	
	// Create the media list
	var mediaItem;
	var images = [
		"/item1.png", "/item3.png", "/item4.jpg", "/item5.jpg", "/item6.jpg", "/itemTwo.png",
		"/item1.png", "/item3.png", "/item4.jpg", "/item5.jpg", "/item6.jpg", "/itemTwo.png",
		"/item1.png", "/item3.png", "/item4.jpg", "/item5.jpg", "/item6.jpg", "/itemTwo.png",
		"/item1.png", "/item3.png", "/item4.jpg", "/item5.jpg", "/item6.jpg", "/itemTwo.png"
	];
	
	for(var i = 0; i < images.length; i++){
		
		mediaItem = Ti.UI.createImageView({
		
			image: images[i],
			width: "198dp",
			height: "150dp",
			left: 1,
			top: 1,
			onClick: "openMedia",
			data: {'title': 'Mooie Foto', 'id': i}
		});
		
		mediaItem.addEventListener('click', function(e){
			
			var controller = Alloy.createController('DumpMedia', {
				data: e.source.data
			}).getView();
			
			controller.open();
			
		});
		
		container.add(mediaItem);
	}
	
	contentView.add(mediaView);
}

function createArticleList(){
	
	createArticleTemplate();
	
	var dumpSection;
	var dumpData;
	var item;
	var data = [
		{"title": "Expressobar Dates Moet Sluiten", "author": "Yvo van Oosterum", "photo": "3", "video": "1", "audio": "10", "votes": "420"},
		{"title": "Huisbaas neemt Expressobar over", "author": "Danielle Visser", "photo": "3", "video": "1", "audio": "10", "votes": "456"},
		{"title": "Expressobar Dates", "author": "Jonathan van Putten", "photo": "3", "video": "1", "audio": "10", "votes": "123"},
		{"title": "Einde in zicht voor koffiebar", "author": "Charlie Voorn", "photo": "3", "video": "1", "audio": "10", "votes": "348"},
		{"title": "Een lekker bakkie troost", "author": "Michiel Zoonen", "photo": "3", "video": "1", "audio": "10", "votes": "276"},
		{"title": "Support your local koffie", "author": "Ward van Aller", "photo": "3", "video": "1", "audio": "10", "votes": "922"},
		{"title": "Bakkie plur", "author": "Yannick Tillemans", "photo": "3", "video": "1", "audio": "10", "votes": "245"},
		{"title": "Koffiebar middelandstraat gaat verhuizen", "author": "Wouter Struyvenburg", "photo": "3", "video": "1", "audio": "10", "votes": "100"},
		{"title": "Verhuurder Expressobar begint nu eigen koffiebar", "author": "Lola Verhouten", "photo": "3", "video": "1", "audio": "10", "votes": "767"},
		{"title": "Expressobar Dates Moet Sluiten", "author": "Yvo van Oosterum", "photo": "3", "video": "1", "audio": "10", "votes": "420"},
		{"title": "Huisbaas neemt Expressobar over", "author": "Danielle Visser", "photo": "3", "video": "1", "audio": "10", "votes": "456"},
		{"title": "Expressobar Dates", "author": "Jonathan van Putten", "photo": "3", "video": "1", "audio": "10", "votes": "123"},
		{"title": "Einde in zicht voor koffiebar", "author": "Charlie Voorn", "photo": "3", "video": "1", "audio": "10", "votes": "348"},
		{"title": "Een lekker bakkie troost", "author": "Michiel Zoonen", "photo": "3", "video": "1", "audio": "10", "votes": "276"},
		{"title": "Support your local koffie", "author": "Ward van Aller", "photo": "3", "video": "1", "audio": "10", "votes": "922"},
		{"title": "Bakkie plur", "author": "Yannick Tillemans", "photo": "3", "video": "1", "audio": "10", "votes": "245"},
		{"title": "Koffiebar middelandstraat gaat verhuizen", "author": "Wouter Struyvenburg", "photo": "3", "video": "1", "audio": "10", "votes": "100"},
		{"title": "Verhuurder Expressobar begint nu eigen koffiebar", "author": "Lola Verhouten", "photo": "3", "video": "1", "audio": "10", "votes": "767"}
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
			item_author:{text: item.author},
			item_photo_text:{text: item.photo},
			item_video_text:{text: item.video},
			item_audio_text:{text: item.audio},
			item_vote_text:{text: item.votes},
			properties: {backgroundColor: back, height: "80dp"}
		}];
		
		dumpSection.setItems(dumpData);
		sections.push(dumpSection);
	}
	
	listView.sections = sections;
	contentView.add(listView);
}

/*
 *
 * Templates
 *  
 */

function createArticleTemplate(){
	
	itemTemplate = {
		childTemplates: [{
			
			// Title
			type: 'Ti.UI.Label',
			bindId: 'item_title',
			properties: { 
				color: "#000000",
				font: {fontSize: "20dp", fontWeight: 'bold'},
				left: 15,
				top: 10
			 }
		},{
			
			// Author
			type: 'Ti.UI.Label',
			bindId: 'item_author',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp"},
				top: 42,
				left: 35
			 }
			
		},{
			
			// Author icon
			type: 'Ti.UI.ImageView',
			bindId: 'item_author_icon',
			properties: { 
				top: 48,
				left: 15,
				image: "/Icons/profile.png",
				width: "12dp",
				height: "16dp"
			 }
		},{
			
			// Photo icon
			type: 'Ti.UI.ImageView',
			bindId: 'item_photo_icon',
			properties: { 
				top: 48,
				left: 300,
				image: "/Icons/camera.png",
				width: "26dp",
				height: "18dp"
			 }
		},{
			
			// Photo text
			type: 'Ti.UI.Label',
			bindId: 'item_photo_text',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp", fontWeight: 'bold'},
				top: 44,
				left: 335
			 }
		},{
			
			// Video icon
			type: 'Ti.UI.ImageView',
			bindId: 'item_video_icon',
			properties: { 
				top: 48,
				left: 375,
				image: "/Icons/video.png",
				width: "26dp",
				height: "18dp"
			 }
		},{
			
			// Video text
			type: 'Ti.UI.Label',
			bindId: 'item_video_text',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp", fontWeight: 'bold'},
				top: 44,
				left: 410
			 }
		},{
			
			// Audio icon
			type: 'Ti.UI.ImageView',
			bindId: 'item_audio_icon',
			properties: { 
				top: 48,
				left: 450,
				image: "/Icons/mic.png",
				width: "14dp",
				height: "23dp"
			 }
		},{
			
			// Audio text
			type: 'Ti.UI.Label',
			bindId: 'item_audio_text',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp", fontWeight: 'bold'},
				top: 44,
				left: 475
			 }
		},{
			
			// Vote up
			type: 'Ti.UI.ImageView',
			bindId: 'item_vote_up',
			properties: { 
				top: 5,
				right: 20,
				image: "/Icons/vote.png",
				width: "16dp",
				height: "21dp"
			 }
		},{
			
			// Vote text
			type: 'Ti.UI.Label',
			bindId: 'item_vote_text',
			properties: { 
				color: "#000000",
				font: {fontSize: "18dp", fontWeight: 'bold'},
				top: 24,
				right: 15,
				textAlign: "center"
			 }
		},{
			
			// Vote Down
			type: 'Ti.UI.ImageView',
			bindId: 'item_vote_down',
			properties: { 
				top: 50,
				right: 20,
				image: "/Icons/voteDown.png",
				width: "16dp",
				height: "21dp"
			 }
		}]
	};
	
	addTemplateToListView();
}

/*
 *
 * Helpers
 *  
 */

function clearView(viewElem){
	
	sections = [];
	contentView.remove(viewElem);
}

function addTemplateToListView(){
	
	// Create listView
	listView = Ti.UI.createListView({
		templates: {'template': itemTemplate},
		defaultItemTemplate: 'template'
	});
}
