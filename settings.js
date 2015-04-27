document.getElementById("buzzkill_on").addEventListener("click", function() {
    chrome.storage.sync.set({"buzzkill": 1});
    reload();
});
document.getElementById("buzzkill_off").addEventListener("click", function () {
    chrome.storage.sync.set({"buzzkill": 0});
    reload();
});

function reload () {
    window.reload();
}