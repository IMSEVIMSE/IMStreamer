//Import jQuery
//var script = document.createElement('script');
//script.src = '//code.jquery.com/jquery-3.2.1.min.js';
//script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(script);

// Create the button and set id and class
	var IMSgetStream = document.createElement("button");
	IMSgetStream.id = 'IMSButton';
	IMSgetStream.className = 'titleReviewBarItem';
	IMSgetStream.innerHTML = "Watch full movie";

// Create divider to fit design
	var divider = document.createElement("div");
	divider.className = 'divider';

// Append (as child of div) divider and IMSButton to correct class
	var buttonAppender = document.getElementsByClassName("titleReviewBar ")[0];
	buttonAppender.appendChild(divider);
	buttonAppender.appendChild(IMSgetStream);

// Get current url to extract IMDB tt-link
	var URL = window.location.href;
	var IMDBvar = URL.match("title/(.*)/");

// Event handler for button_click
	IMSgetStream.addEventListener ("click", function() {
		// Create element for videoplayer
		var IMSvideoPlayer = document.createElement("div");
		IMSvideoPlayer.width = '70%';
		IMSvideoPlayer.align = 'center';
		IMSvideoPlayer.id = 'IMSVPlay';
		// Insert embedded video from vodlocker.to
		IMSvideoPlayer.innerHTML='<iframe src="http://vodlocker.to/embed?i=' + IMDBvar[1] + ' " width="1280" height="720" allowscriptaccess="always" allowfullscreen="true" scrolling="no" frameborder="0"></iframe>';

		var videoAppender = document.getElementsByTagName('html')[0];
  		videoAppender.prepend(IMSvideoPlayer);
//http://vodlocker.to/embed?i=movTTlink&poster=1
});
