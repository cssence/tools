!function(a,b){"use strict";if("object"==typeof b.data&&b.data.hasOwnProperty("length")){var c=a.createElement("ul");a.body.appendChild(c),b.data.forEach(function(b){var d,e,f;b.url&&(d=a.createElement("li"),e=a.createElement("a"),e.href=b.url,e.target="_blank",b.icon&&(f=a.createElement("img"),f.src=b.icon,e.appendChild(f)),e.appendChild(a.createTextNode(b.name||b.url)),d.appendChild(e),c.appendChild(d))})}}(document,App);