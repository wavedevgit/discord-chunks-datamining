/** Chunk was on web.js **/
/** chunk id: 621466, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  var n, r;
  if (null == e) returnfalse;
  let i = null == e || null == (r = e.ownerDocument) ? true : r.defaultView;
  if (null == i) return console.warn("Unable to determine render window for element", e), false;
  let a = null != (n = null == t ? true : t.name) ? n : "Element",
    o = i[a];
  return null == o ? (console.warn('Unable to find element constructor "'.concat(a, '" in'), i), false) : e instanceof o
}

function i(e) {
  let t = parseInt(e, 10);
  return isNaN(t) ? 0 : t
}
require.d(exports, {
  BF: () => c,
  Cw: () => l,
  p3: () => u,
  vq: () => r,
  wB: () => d,
  xI: () => i
}), require("./896048.js"), require("./747238.js");
let a = /input/i,
  o = /textarea/i,
  s = new Set(["text", "password", "number", "date", "datetime-local", "time", "week", "month", "email", "search", "tel", "url"]);

function l(e) {
  if (null == e) returnfalse;
  if ("true" === e.getAttribute("contenteditable") || o.test(e.tagName)) returntrue;
  if (a.test(e.tagName)) {
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