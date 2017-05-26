// Get extension URL for paths to local files
var fullURL = chrome.runtime.getURL("/");

// Create the button and set id and class
var IMSgetStream = document.createElement("button");
IMSgetStream.id = 'IMSButton';
IMSgetStream.className = 'titleReviewBarItem';
IMSgetStream.innerHTML = "Watch full movie";

// Create divider to fit design
var divider = document.createElement("div");
divider.className = 'divider';

// Append (as child of div) divider and IMSButton to correct class
var buttonAppender = document.getElementsByClassName("plot_summary ")[0];
buttonAppender.appendChild(divider);
buttonAppender.appendChild(IMSgetStream);

// Get current url to extract IMDB tt-link
var URL = window.location.href;
var IMDBvar = URL.match("title/(.*)/");

// Event handler for button_click
	IMSgetStream.addEventListener ("click", function() {
		// Check if videoplayer element exists via unique ID
		if (document.getElementById("IMSVidContainer")) {
			// Videoplayer element does exist
			// Get the modal and change display setting from none to block
			var modal = document.getElementById('IMSVidContainer');
			modal.style.display = "block";			
			
			// Fade in modal
  			var OpacityTrack = 0;
  			var OpacityInterval = setInterval(function() { fadeIn() }, 5);
  			function fadeIn() {
  				if (OpacityTrack >= 1)
  				{
  					//Make sure settings are correct when exiting interval
  					modal.style.opacity = 1;
  					modal.style.display = "block";
  					clearInterval(OpacityInterval);
  				}
  				else
  				{
	  				OpacityTrack += 0.05;
  					modal.style.opacity = OpacityTrack;	
  				}
  			}
		}
		else
		{
			// Videoplayer element doesn't exist
			// Create element for videoplayer
			var IMSvideoPlayer = document.createElement("div");
			//Set ID and class
			IMSvideoPlayer.id = 'IMSVidContainer';
			IMSvideoPlayer.className = 'modal';

			// Insert embedded video from vodlocker.to to modal with divs.
			IMSvideoPlayer.innerHTML='<div class="modal-content"><span class="close">&times;</span><div id="loadingBG" align="center"><iframe src="http://vodlocker.to/embed?i=' + IMDBvar[1] + ' " width="80%" height="720" allowscriptaccess="always" allowfullscreen="true" scrolling="no" frameborder="0"></iframe></div></div>';
			
			// Append IMSvideoPlayer element to top of code
			var videoAppender = document.getElementsByTagName('html')[0];
	  		videoAppender.prepend(IMSvideoPlayer);
			
			// Set background to loading gif if video is slow to load
			var IMSloading = document.getElementById('loadingBG');
			var temp = "url(" + fullURL + "resources/loading.gif) center center no-repeat";
			IMSloading.style.background = temp;
	  		
	  		// Fade in modal
			var OpacityTrack = 0;
	  		var OpacityInterval = setInterval(function() { fadeIn() }, 5);
	  		function fadeIn() {
	  			if (OpacityTrack >= 1)
	  			{
	  				IMSvideoPlayer.style.opacity = 1;
	  				clearInterval(OpacityInterval);
	  			}
	  			else
	  			{
	  				OpacityTrack += 0.05;
	  				IMSvideoPlayer.style.opacity = OpacityTrack;	
	  			}
	  		}

	  		// Get the modal (legacy)
			var modal = document.getElementById('IMSVidContainer');

			// Get the span element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks on span then close the modal
			span.onclick = function() {
				// Fade out modal
				var OpacityTrack = 1;
	  			var OpacityInterval = setInterval(function() { fadeOut() }, 20);
	  			function fadeOut() {
	  				if (OpacityTrack <= 0)
	  				{
	  					// Make sure settings are correct, display (none) needed for clickthrough
	  					modal.style.opacity = 0;
	  					modal.style.display = "none";
	  					clearInterval(OpacityInterval);
	  				}
	  				else
	  				{
		  				OpacityTrack -= 0.05;
	  					modal.style.opacity = OpacityTrack;	
	  				}
	  			}
			}
			// When the user clicks anywhere outside of the modal, close it - same as span
			window.onclick = function(event) {
			    if (event.target == modal) {
			        var OpacityTrack = 1;
	  				var OpacityInterval = setInterval(function() { fadeOut() }, 20);
	  				function fadeOut() {
		  				if (OpacityTrack <= 0)
		  				{
		  					modal.style.opacity = 0;
		  					modal.style.display = "none";
		  					clearInterval(OpacityInterval);
		  				}
		  				else
		  				{
			  				OpacityTrack -= 0.05;
		  					modal.style.opacity = OpacityTrack;	
		  				}
	  				}
			    }
			}
		}
});
