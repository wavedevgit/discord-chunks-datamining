/** Chunk was on web.js **/
/** chunk id: 554997, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(...e) {
  return 1 === e.length && e[0] ? e[0] : t => {
    for (let n of e) "function" == typeof n ? n(t) : null != n && (n.current = t)
  }
}
require.d(exports, {
  l: () => r
})