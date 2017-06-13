# IMStreamer
Browser plugin for streaming movies via IMDB through the VoDlocker.to API

At the moment, this is merely a proof of concept and there are plenty of bugs and design issues.
The plugin embeds movies from the VoDlocker.to API to movies found on IMDB. The plugin currently only supports movies (altough the API has support for series as well) and will therefore generate errors if tried on anything other than movies.
All content is sourced from vodlocker.to via their API.

<del>Plugin page for the Firefox browser (currently waiting for manual review):</del>

The addon was not approved to be published on the Firefox addon store, therefore it's selfhosted via Github for now.

## How to install
Start by downloading the signed .xpi file for Firefox. You can either download it and then choose to open it with Firefox, or directly choose <i>Open With</i> when downloading the file.

<img src="https://i.imgur.com/8XReW6h.png" alt="open_with_firefox" height="340" width="460"/>

This should open a new tab asking you if you want to install <i>IMStreamer</i>. Click <i>Install</i> and the plugin should now be working with IMDB.

<img src="https://i.imgur.com/cN8Zesd.png" alt="install_example" height="200" width="500"/>

<img src="https://i.imgur.com/CKMbquK.png" alt="install_example" height="100" width="380"/>

## How to use
Navigate to a movie you want to watch on IMDB. Wait for the page to finish loading and then find the blue button <i>Watch full movie</i> under the movie summary.

<img src="https://i.imgur.com/ChkMqFx.png" alt="use_example" height="440" width="660"/>

This will open a box that will try to find a link for the movie via the VoDlocker.to API.

<img src="https://i.imgur.com/5lVxVos.png" alt="use_loading" height="430" width="700"/>

If it's successful, you'll be able to play the movie.

<img src="https://i.imgur.com/qdFt7RL.png" alt="use_playable" height="430" width="700"/>

<img src="https://i.imgur.com/c0iP9hy.png" alt="use_loading" height="430" width="700"/>
