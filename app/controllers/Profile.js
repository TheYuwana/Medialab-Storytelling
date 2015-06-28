var args = arguments[0] || {};

var mainView = $.container;

/*
 *
 * Button functions
 *  
 */
function backToHome(e){
	
	mainView.close();
}

function openAdd(e){
	
	var controller = Alloy.createController('ArticleEdit', {
		mode: "new"
	}).getView();
	
	controller.open();
}