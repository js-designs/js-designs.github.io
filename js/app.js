function startApp () {

	hide();

    $(".linkHome").click(showHomeView);
    $(".linkAbout").click(showAboutView);
    $(".linkPortfolio").click(showPortfolioView);
    $(".linkContact").click(showContactView);

	function showHomeView () {
        showView("viewHome");
    }

    function showAboutView () {
    	showView("viewAbout");
    }

	function showPortfolioView () {
		showView("viewPortfolio");
	}   	

	function showContactView () {
		showView("viewContactMe");
	}

    function showView (viewName) {
        $("main > section").hide();
        $("#" + viewName).show();
    }

    function hide() {
    	$("#viwHome").hide();
    	$("#viewAbout").hide();
    	$("#viewPortfolio").hide();
    	$("#viewContactMe").hide();
    }
}