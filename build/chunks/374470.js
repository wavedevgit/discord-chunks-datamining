/** Chunk was on web.js **/
/** chunk id: 374470, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  var n, r;
  if (null == e) returnfalse;
  let i = null == e || null == (n = e.ownerDocument) ? true : n.defaultView;
  if (null == i) return console.warn("Unable to determine render window for element", e), false;
  let o = null != (r = null == t ? true : t.name) ? r : "Element",
    a = i[o];
  return null == a ? (console.warn('Unable to find element constructor "'.concat(o, '" in'), i), false) : e instanceof a
}

function i(e) {
  let t = parseInt(e, 10);
  return isNaN(t) ? 0 : t
}
require.d(exports, {
  MD: () => d,
  Mg: () => i,
  VG: () => l,
  kK: () => r,
  sK: () => u,
  uB: () => c
}), require("./388685.js"), require("./35282.js");
let o = /input/i,
  a = /textarea/i,
  s = new Set(["text", "password", "number", "date", "datetime-local", "time", "week", "month", "email", "search", "tel", "url"]);

function l(e) {
  if (null == e) returnfalse;
  if ("true" === e.getAttribute("contenteditable") || a.test(e.tagName)) returntrue;
  if (o.test(e.tagName)) {
    var t;
    let n = null != (t = e.getAttribute("type")) ? t : "text";
    if (s.has(n)) returntrue
  }
  returnfalse
}

function c(e) {
  let {
    target: t
  } = e;
  return null == t ? null : "ownerDocument" in t ? t.ownerDocument : "document" in t ? t.document : (console.warn("Unable to get owner document from event", e.type), null)
}

function u(e, t) {
  let n = e.parentElement;
  for (; null != n;) {
    if (n.classList.contains(t)) return n;
    n = n.parentElement
  }
  return null
}

function d(e, t) {
  let n = e.parentElement;
  for (; null != n;) {
    if (null != n.getAttribute(t)) return n;
    n = n.parentElement
  }
  return null
}