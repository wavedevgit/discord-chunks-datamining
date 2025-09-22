/** Chunk was on web.js **/
/** chunk id: 945109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => o
});
var Chunk253231 = require("./253231.js");

function i(e) {
  let t = (0, r.kR)(e);
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

function a(e, t) {
  return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
}

function o(e, t) {
  return "#comment" !== e.nodeName && i(e) && a(e, t) && (!e.parentElement || o(e.parentElement, e))
}