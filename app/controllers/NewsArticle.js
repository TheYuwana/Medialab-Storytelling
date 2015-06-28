var args = arguments[0] || {};

var mainView = $.container;
var articleTitle = $.headerTitle;
var articleImage = $.headerContainer;

articleTitle.text = args.title;
articleImage.backgroundImage = "/" + args.image;

function backToNews(e){
	
	mainView.close();
}

function openAdd(e){
	
	var controller = Alloy.createController('ArticleEdit', {
		mode: "new"
	}).getView();
	
	controller.open();
}


