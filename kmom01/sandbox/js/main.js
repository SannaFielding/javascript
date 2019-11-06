(function () {
    'use strict';

    var myContent = document.getElementById('content');

    myContent.innerHTML = '<h3>This is a template!</h3>';

    window.console.log('Sandbox is ready!');
})();

var dt = new Date();
var y = dt.getFullYear();
var m = dt.getMonth();
var d;
var h = dt.getHours();
var mi;
var s;

if (dt.getDate() < 10) {
    d = "0" + dt.getDate();
} else {
    d = dt.getDate();
}
if (dt.getMinutes() < 10) {
    mi = "0" + dt.getMinutes();
} else {
    mi = dt.getMinutes();
}
if (dt.getSeconds() < 10) {
    s = "0" + dt.getSeconds();
} else {
    s = dt.getSeconds();
}

var formattedDate = y + "/" + m + "/" + d + " " + h + ":" + mi + ":"+ s;

document.getElementById("datetime").innerHTML = formattedDate;
