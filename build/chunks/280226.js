/** Chunk was on web.js **/
/** chunk id: 280226, original params: e,t (module,exports,re quire) **/
"use strict";
var n = Symbol.for("react.transitional.element");

function r(e, t, r) {
  var i = null;
  if (true !== r && (i = "" + r), true !== t.key && (i = "" + t.key), "key" in t)
    for (var a in r = {}, t) "key" !== a && (r[a] = t[a]);
  else r = t;
  return {
    $$typeof: n,
    type: e,
    key: i,
    ref: true !== (t = r.ref) ? t : null,
    props: r
  }
}
exports.Fragment = Symbol.for("react.fragment"), exports.jsx = r, exports.jsxs = r