//your JS code here. If required.
let url=window.navigator;
let body=document.getElementsByTagName("body")[0];
body.innerHTML=`<div id="browser-info">You are using ${url.appName} version ${url.appVersion}</div>`;