/** Chunk was on web.js **/
/** chunk id: 297808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NI: () => s,
  bE: () => o,
  vY: () => a
});
var Chunk477232 = require("./477232.js"),
  Chunk154343 = require("./154343.js");

function o(e, t) {
  if (!(0, i.Wr)()) return !!t && !!e && e.contains(t);
  if (!e || !t) returnfalse;
  let n = t;
  for (; null !== n;) {
    if (n === e) returntrue;
    n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : (0, r.Zq)(n) ? n.host : n.parentNode
  }
  returnfalse
}
let a = (e = document) => {
  var t;
  if (!(0, i.Wr)()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (null == (t = n.shadowRoot) ? true : t.activeElement);) n = n.shadowRoot.activeElement;
  return n
};

function s(e) {
  return (0, i.Wr)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
}