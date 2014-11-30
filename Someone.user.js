// ==UserScript==
// @name         Someone
// @version      0.1
// @description  Replaces all Friend names on Fecebox with "Someone"
// @author       mcclanahoochie
// @include      http://*.facebook.com/*
// @include      https://*.facebook.com/*
// @match        http://*.facebook.com/*
// @match        https://*.facebook.com/*
// ==/UserScript==

console.log('start');
function replace(){
    console.log('replace begin');
    var elements;
    //elements = document.getElementsByClassName("fbxWelcomeBoxName")[0].innerHTML = 'Someone';
    elements = document.getElementsByClassName("profileLink");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Someone';
    }
    elements = document.getElementsByClassName("fwb fcg");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Someone';
    }
    elements = document.getElementsByClassName("mbs fwb");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Someone';
    }
    elements = document.getElementsByClassName("fwb");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Someone';
    }
    elements = document.getElementsByClassName("_55lr");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Someone';
    }
    elements = document.getElementsByClassName(" UFICommentActorName");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Someone';
    }
    console.log('replace end');
}
window.onload = function() {
    replace();
}
var wait = 9;
window.onscroll = function (event) {
    --wait;
    if(wait==0) {
        replace();
        wait = 9;
    }
}
console.log('finish');
