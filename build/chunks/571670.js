/** Chunk was on 85911 **/
/** chunk id: 571670, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NI: () => a,
  bE: () => o,
  vY: () => u
});
var Chunk253231 = require("./253231.js"),
  Chunk109683 = require("./109683.js");

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
let u = (e = document) => {
  var t;
  if (!(0, i.Wr)()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (null == (t = n.shadowRoot) ? true : t.activeElement);) n = n.shadowRoot.activeElement;
  return n
};

function a(e) {
  return (0, i.Wr)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
}