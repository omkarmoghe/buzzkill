var enabled;
chrome.storage.sync.get("buzzkill", function(data) {
    enabled = data.buzzkill;
});

var blacklist = ["buzzfeed", "bzfd", "universityprimetime"];
var prevLinksLength = 0;

var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        console.log(document.readyState);
        clearInterval(readyStateCheckInterval);
        buzzkill();
    }
}, 100);

function buzzkill () {
    if(enabled) {
        var links = document.links;
        prevLinksLength = links.length;
        for (var i = 0; i < links.length; ++i) {
            var link_href = links[i].href.toLowerCase();
            if (checkLinks(link_href)) {
                links[i].remove();
                --i;
            }
        }
    } else return;
}

function checkLinks(link) {
    for (var j = 0; j < blacklist.length; ++j) {
        if (link.indexOf(blacklist[j]) != -1) {
            return true;
        }
    }

    return false;
}

var test = setInterval(function() {
    var newLinks = document.links;
    if (newLinks.length > prevLinksLength) buzzkill();
}, 3000);