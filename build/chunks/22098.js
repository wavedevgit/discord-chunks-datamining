/** Chunk was on web.js **/
/** chunk id: 22098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => i
});
var Chunk711371 = require("./711371.js");

function i(e, t, n, i) {
  var a, o;
  let s = 0;
  for (let a = 0; a < n.length; a++) {
    let o = n[a];
    if (null == o) continue;
    let l = s + o.length;
    if (i <= l) {
      let n = r.PW.child(t, a),
        o = r.VW.node(e, n)[0];
      if (r.l5.isText(o)) return {
        path: n,
        offset: Math.min(Math.max(i - s, 0), o.text.length)
      }
    }
    s = l
  }
  let l = n.length - 1;
  return {
    path: r.PW.child(t, l),
    offset: null != (a = null == (o = n[l]) ? true : o.length) ? a : 0
  }
}