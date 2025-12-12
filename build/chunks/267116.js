/** Chunk was on web.js **/
/** chunk id: 267116, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => s
});
var Chunk477232 = require("./477232.js");
let i = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

function o(e) {
  let t = (0, r.kR)(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) returnfalse;
  let {
    display: n,
    visibility: i
  } = e.style, o = "none" !== n && "hidden" !== i && "collapse" !== i;
  if (o) {
    let {
      getComputedStyle: t
    } = e.ownerDocument.defaultView, {
      display: n,
      visibility: r
    } = t(e);
    o = "none" !== n && "hidden" !== r && "collapse" !== r
  }
  return o
}

function a(e, t) {
  return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
}

function s(e, t) {
  return i ? e.checkVisibility({
    visibilityProperty: true
  }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && o(e) && a(e, t) && (!e.parentElement || s(e.parentElement, e))
}