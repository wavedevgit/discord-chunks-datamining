/** Chunk was on web.js **/
/** chunk id: 46802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => o
});
var Chunk297987 = require("./297987.js");
let i = "u" > typeof Element && "checkVisibility" in Element.prototype;

function a(e) {
  let t = (0, r.mD)(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) returnfalse;
  let {
    display: n,
    visibility: i
  } = e.style, a = "none" !== n && "hidden" !== i && "collapse" !== i;
  if (a) {
    let {
      getComputedStyle: t
    } = e.ownerDocument.defaultView, {
      display: n,
      visibility: r
    } = t(e);
    a = "none" !== n && "hidden" !== r && "collapse" !== r
  }
  return a
}

function s(e, t) {
  return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
}

function o(e, t) {
  return i ? e.checkVisibility({
    visibilityProperty: true
  }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && a(e) && s(e, t) && (!e.parentElement || o(e.parentElement, e))
}