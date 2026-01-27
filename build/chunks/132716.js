/** Chunk was on web.js **/
/** chunk id: 132716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fe: () => l,
  HI: () => d,
  rd: () => s
});
var Chunk401705 = require("./401705.js"),
  Chunk408713 = require("./408713.js"),
  Chunk64700 = require("./64700.js");
let o = (0, Chunk64700.createContext)({
  isNative: true,
  open: u,
  useHref: e => e
});

function s() {
  return (0, a.useContext)(o)
}

function l(e, t, n = true) {
  var a, o;
  let {
    metaKey: s,
    ctrlKey: c,
    altKey: u,
    shiftKey: d
  } = t;
  (0, i.gm)() && (null == (o = window.event) || null == (a = o.type) ? true : a.startsWith("key")) && "_blank" === e.target && ((0, i.cX)() ? s = true : c = true);
  let f = (0, i.Tc)() && (0, i.cX)() && !(0, i.bh)() && 1 ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: s,
    ctrlKey: c,
    altKey: u,
    shiftKey: d
  }) : new MouseEvent("click", {
    metaKey: s,
    ctrlKey: c,
    altKey: u,
    shiftKey: d,
    bubbles: true,
    cancelable: true
  });
  l.isOpening = n, (0, r.e)(e), e.dispatchEvent(f), l.isOpening = false
}

function c(e, t) {
  if (e instanceof HTMLAnchorElement) t(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
  }
}

function u(e, t) {
  c(e, e => l(e, t))
}

function d(e) {
  var t;
  let n = s().useHref(null != (t = e.href) ? t : "");
  return {
    "data-href": e.href ? n : true,
    "data-target": e.target,
    "data-rel": e.rel,
    "data-download": e.download,
    "data-ping": e.ping,
    "data-referrer-policy": e.referrerPolicy
  }
}
l.isOpening = false