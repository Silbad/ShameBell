/* eslint-disable no-console */
/// <reference types="web-ext-types"/>

const shame = new Audio(chrome.runtime.getURL("sounds/shame.mp3"));

browser.browserAction.onClicked.addListener(() => {
    shame.play();
});
