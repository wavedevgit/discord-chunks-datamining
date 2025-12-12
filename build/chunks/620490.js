/** Chunk was on web.js **/
/** chunk id: 620490, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  if (e.score === t.score) {
    var n, r, i, o, a, s;
    let l = null != (o = null != (i = e.sortable) ? i : null == (n = e.comparator) ? true : n.toLocaleLowerCase()) ? o : "",
      c = null != (s = null != (a = e.sortable) ? a : null == (r = t.comparator) ? true : r.toLocaleLowerCase()) ? s : "";
    if (l < c) return false;
    if (l > c) return 1
  }
  return t.score - e.score
}
require.d(exports, {
  Z: () => r
})