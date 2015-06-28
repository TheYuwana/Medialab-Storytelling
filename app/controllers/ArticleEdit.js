var args = arguments[0] || {};

var mainView = $.container;

var bodyHeader = $.bodyHeader;
var bodyTags = $.bodyTags;
var bodyContent = $.bodyContent;
var headerTitle = $.headerTitle;

bodyHeader.value = "Espresso Dates moest na twee jaar verhuizen, omdat de verhuurder zelf een koffiebar wilde beginnen. Hierdoor werd de facebookpagina 'boycot 2e middellandstraat te rotterdam' in het leven geroepen.";
bodyTags.value = "Tags: Espressobar Dates Koffiebar Facebook";
bodyContent.value = "Na twee jaar keihard te hebben gewerkt, zit de tijd van Espressobar Dates aan de 2e Middellandstraat 27 er definitief op. De huisbaas heeft besloten de huurovereenkomst op te zeggen. En niet zomaar!";
headerTitle.value = "Kabauter butplug of Santa Claus?";

/*
 * 
 * Buttons
 * 
 */

function back(e){
	
	mainView.close();
}
