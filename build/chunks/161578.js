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

function a(e) {
  return (0, r.qo)(e).map(t => {
    let n = e.getPropertyValue(t),
      r = e.getPropertyPriority(t);
    return `${t}: ${n}${r?" !important":""};`
  }).join(" ")
}

function o(e, t, n) {
  let r = `.${e}:${t}`,
    o = n.cssText ? i(n) : a(n);
  return document.createTextNode(`${r}{${o}}`)
}

function s(e, t, n) {
  let i = window.getComputedStyle(e, n),
    a = i.getPropertyValue("content");
  if ("" === a || "none" === a) return;
  let s = (0, r.Vj)();
  try {
    t.className = `${t.className} ${s}`
  } catch (e) {
    return
  }
  let l = document.createElement("style");
  l.appendChild(o(s, n, i)), t.appendChild(l)
}

function l(e, t) {
  s(e, t, ":before"), s(e, t, ":after")
}