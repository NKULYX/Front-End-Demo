// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ua.ulearning.cn/learnCourse/learnCourse.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ulearning.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    console.log("autoStudy begin!!!");
    window.setInterval(function () {
        if($(".mejs__overlay-button").attr("aria-pressed")=='false') {
            $(".mejs__overlay-button").click();
        }
        if($(".video-progress .text span").text() == '已看完') {
            $(".next-page-btn").click();
        }
    },1000);
})();