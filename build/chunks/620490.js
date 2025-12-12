/** Chunk was on web.js **/
/** chunk id: 620490, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  if (e.score === t.score) {
    var n, r, i, a, o, s;
    let l = null != (a = null != (i = e.sortable) ? i : null == (n = e.comparator) ? true : n.toLocaleLowerCase()) ? a : "",
      c = null != (s = null != (o = e.sortable) ? o : null == (r = t.comparator) ? true : r.toLocaleLowerCase()) ? s : "";
    if (l < c) return false;
    if (l > c) return 1
  }
  return t.score - e.score
}
require.d(exports, {
  Z: () => r
})