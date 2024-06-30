
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      var ytplayer;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: '11buZ9nptrU',
          playerVars: {
            'rel': 0,  
          }
        });
    }


    function stopVideo() {
        player.stopVideo();
    }

    function pauseVideo() {
        player.pauseVideo();
    }

    function playVideo() {
        player.playVideo();
    }

    function getPlayerState() {
        return player.getPlayerState();
    }

