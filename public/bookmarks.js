!function(e,a){"use strict";if("object"==typeof a.data&&a.data.hasOwnProperty("length")){var t=e.createElement("ul");e.body.appendChild(t),a.data.forEach(function(n){var d,i,l;n.url&&(d=e.createElement("li"),i=a.makeLink(n.url),n.icon&&(l=e.createElement("img"),l.src=n.icon,i.appendChild(l)),i.appendChild(e.createTextNode(n.name||n.url)),d.appendChild(i),t.appendChild(d))})}}(document,App);