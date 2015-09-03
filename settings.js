var enabled;
chrome.storage.sync.get("buzzkill", function(data) {
    enabled = data.buzzkill;
    console.log(enabled);
});

var empty_radios = document.getElementsByName("ed_radio");
if(enabled == 1) {
    empty_radios[0].checked = true;
    empty_radios[1].checked = false;
} else {
    empty_radios[1].checked = true;
    empty_radios[0].checked = false;
}

document.getElementById("update").addEventListener("click", function() {
    // check enabled or disabled
    var radios = document.getElementsByName("ed_radio");
    for(var i = 0; i < radios.length; ++i) {
        console.log(radios[i].checked);
        if(radios[i].checked) {
            if(radios[i].value == "enabled") {
                chrome.storage.sync.set({"buzzkill": 1});
            } else {
                chrome.storage.sync.set({"buzzkill": 0});
            }

            break; // only one radio can be checked
        }
    }

    reload();
});

function reload () {
    window.reload();
}