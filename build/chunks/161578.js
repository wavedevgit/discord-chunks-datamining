/** Chunk was on web.js **/
/** chunk id: 161578, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => l
});
var Chunk961742 = require("./961742.js");

function i(e) {
  let t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g,"")}';`
}

function o(e) {
  return (0, r.qo)(e).map(t => {
    let n = e.getPropertyValue(t),
      r = e.getPropertyPriority(t);
    return `${t}: ${n}${r?" !important":""};`
  }).join(" ")
}

function a(e, t, n) {
  let r = `.${e}:${t}`,
    a = n.cssText ? i(n) : o(n);
  return document.createTextNode(`${r}{${a}}`)
}

function s(e, t, n) {
  let i = window.getComputedStyle(e, n),
    o = i.getPropertyValue("content");
  if ("" === o || "none" === o) return;
  let s = (0, r.Vj)();
  try {
    t.className = `${t.className} ${s}`
  } catch (e) {
    return
  }
  let l = document.createElement("style");
  l.appendChild(a(s, n, i)), t.appendChild(l)
}

function l(e, t) {
  s(e, t, ":before"), s(e, t, ":after")
}