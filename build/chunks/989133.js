/** Chunk was on web.js **/
/** chunk id: 989133, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  if (e.score === t.score) {
    var n, r, i, a, o, s;
    let l = null != (n = null != (r = e.sortable) ? r : null == (o = e.comparator) ? true : o.toLocaleLowerCase()) ? n : "",
      c = null != (i = null != (a = e.sortable) ? a : null == (s = t.comparator) ? true : s.toLocaleLowerCase()) ? i : "";
    if (l < c) return false;
    if (l > c) return 1
  }
  return t.score - e.score
}
require.d(exports, {
  A: () => r
})