/** Chunk was on web.js **/
/** chunk id: 161578, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g,"")}';`
}

function i(e) {
  return toArray(e).map(t => {
    let n = e.getPropertyValue(t),
      r = e.getPropertyPriority(t);
    return `${t}: ${n}${r?" !important":""};`
  }).join(" ")
}

function o(e, t, n) {
  let o = `.${e}:${t}`,
    a = n.cssText ? r(n) : i(n);
  return document.createTextNode(`${o}{${a}}`)
}
require("./961742.js")