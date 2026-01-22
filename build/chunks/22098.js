/** Chunk was on web.js **/
/** chunk id: 22098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => i
});
var Chunk711371 = require("./711371.js");

function i(e, t, n, i) {
  var a, s;
  let o = 0;
  for (let a = 0; a < n.length; a++) {
    let s = n[a];
    if (null == s) continue;
    let l = o + s.length;
    if (i <= l) {
      let n = r.PW.child(t, a),
        s = r.VW.node(e, n)[0];
      if (r.l5.isText(s)) return {
        path: n,
        offset: Math.min(Math.max(i - o, 0), s.text.length)
      }
    }
    o = l
  }
  let l = n.length - 1;
  return {
    path: r.PW.child(t, l),
    offset: null != (a = null == (s = n[l]) ? true : s.length) ? a : 0
  }
}