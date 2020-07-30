(function() {
    var reqURL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UClbDvbWhzImDvV831Jaco7g';
    fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(reqURL))
        .then((res) => {
            res.json()
                .then(data => {
                    var link = data.items[0].link;
                    var id = link.substr(link.indexOf('=')+1);
                    document.getElementById("youtube_embed").setAttribute('src', 'https://youtube.com/embed/' + id )
                });
        });
})();
