/** Chunk was on web.js **/
/** chunk id: 601339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  fU: () => d,
  nG: () => l,
  tv: () => s
});
var Chunk928276 = require("./928276.js"),
  Chunk21814 = require("./21814.js"),
  Chunk473749 = require("./473749.js");
let o = (0, Chunk473749.createContext)({
  isNative: true,
  open: u,
  useHref: e => e
});

function s() {
  return (0, Chunk473749.useContext)(o)
}

function l(e, t, n = true) {
  var a, o;
  let {
    metaKey: s,
    ctrlKey: c,
    altKey: u,
    shiftKey: d
  } = t;
  (0, i.vU)() && (null == (o = window.event) || null == (a = o.type) ? true : a.startsWith("key")) && "_blank" === e.target && ((0, i.V5)() ? s = true : c = true);
  let f = (0, i.Pf)() && (0, i.V5)() && !(0, i.zc)() && 1 ? new KeyboardEvent("keydown", {
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
  l.isOpening = n, (0, r.A)(e), e.dispatchEvent(f), l.isOpening = false
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