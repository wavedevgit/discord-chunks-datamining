/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";

function r(e, t) {
  var n, r;
  if (null == e) return !1;
  let i = null == e ? void 0 : null === (n = e.ownerDocument) || void 0 === n ? void 0 : n.defaultView;
  if (null == i) return console.warn("Unable to determine render window for element", e), !1;
  let o = null !== (r = null == t ? void 0 : t.name) && void 0 !== r ? r : "Element",
    a = i[o];
  return null == a ? (console.warn('Unable to find element constructor "'.concat(o, '" in'), i), !1) : e instanceof a
}

function i(e) {
  let t = parseInt(e, 10);
  return isNaN(t) ? 0 : t
}
n.d(t, {
  M: () => i,
  k: () => r
})