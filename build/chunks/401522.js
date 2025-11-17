/** Chunk was on web.js **/
/** chunk id: 401522, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(...e) {
  return 1 === e.length && e[0] ? e[0] : t => {
    let n = false,
      r = e.map(e => {
        let r = i(e, t);
        return n || (n = "function" == typeof r), r
      });
    if (n) return () => {
      r.forEach((t, n) => {
        "function" == typeof t ? t() : i(e[n], null)
      })
    }
  }
}

function i(e, t) {
  if ("function" == typeof e) return e(t);
  null != e && (e.current = t)
}
require.d(exports, {
  l: () => r
})