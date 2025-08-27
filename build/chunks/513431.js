/** Chunk was on web.js **/
/** chunk id: 513431, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  var n, r;
  if (null == e) returnfalse;
  let i = null == e || null == (n = e.ownerDocument) ? true : n.defaultView;
  if (null == i) return console.warn("Unable to determine render window for element", e), false;
  let a = null != (r = null == t ? true : t.name) ? r : "Element",
    o = i[a];
  return null == o ? (console.warn('Unable to find element constructor "'.concat(a, '" in'), i), false) : e instanceof o
}

function i(e) {
  let t = parseInt(e, 10);
  return isNaN(t) ? 0 : t
}
require.d(exports, {
  M: () => i,
  k: () => r
})