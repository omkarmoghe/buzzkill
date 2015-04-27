var enabled;
chrome.storage.sync.get("buzzkill", function(data) {
    enabled = data.buzzkill;
});

var blacklist = ["buzzfeed", "bzfd"];

setTimeout(function(){
    if (enabled == 1) {
        buzzkill();
    }
}, 5000);

function buzzkill () {
    console.log("reached here");
    var links = document.links;
    for (var i = 0; i < links.length; ++i) {
        var link_href = links[i].href.toLowerCase();
        console.log(link_href);
        if (checkLinks(link_href)) {
            console.log(link_href);
            links[i].remove();
        }
    }
}

function checkLinks(link) {
    for (var j = 0; j < blacklist.length; ++j) {
        if (link.indexOf(blacklist[j]) != -1) {
            return true;
        }
    }

    return false;
}

buzzkill();