/** Chunk was on web.js **/
/** chunk id: 241827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  bq: () => s,
  sD: () => a,
  wt: () => o
});
var Chunk297987 = require("./297987.js"),
  Chunk790637 = require("./790637.js");

function a(e, t) {
  if (!(0, i.Nf)()) return !!t && !!e && e.contains(t);
  if (!e || !t) returnfalse;
  let n = t;
  for (; null !== n;) {
    if (n === e) returntrue;
    n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : (0, r.Ng)(n) ? n.host : n.parentNode
  }
  returnfalse
}
let s = (e = document) => {
  var t;
  if (!(0, i.Nf)()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (null == (t = n.shadowRoot) ? true : t.activeElement);) n = n.shadowRoot.activeElement;
  return n
};

function o(e) {
  return (0, i.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
}