!function(t,e){"use strict";"object"==typeof e.data&&e.data.hasOwnProperty("length")&&e.data.forEach(function(e){var a;e.url&&(a=t.createElement("iframe"),a.src=e.url,(e.style||"").split(";").forEach(function(t){t=t.split(":"),a.style[t[0]]=t[1]}),t.body.appendChild(a))})}(document,App);