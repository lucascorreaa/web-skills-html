var statusOnline = true
var statusOffline = false

function status() {
    var switchButton = document.getElementById("switch")
    var marker = document.querySelector(".marker")

    if (statusOnline) {
        switchButton.src = 'img/button-status-online.png'
        marker.classList.remove("marker-offline")
        marker.classList.add("marker-online")
        statusOnline = false
        
    } else {
        switchButton.src = 'img/button-status-offline.png'
        marker.classList.remove("marker-online")
        marker.classList.add("marker-offline")
        statusOnline = true
    }}

document.addEventListener("DOMContentLoaded", function () {
    var lastStatus = localStorage.getItem("buttonStatus");
    if (lastStatus == "online") {
        document.getElementById("switch").src = 'img/button-status-online.png'
        document.querySelector(".marker").classList.add("marker-online")
    } 
    else {
        document.getElementById("switch").src = 'img/button-status-offline.png'
        document.querySelector(".marker").classList.add("marker-offline")
    }
return lastStatus
})





