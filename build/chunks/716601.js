/** Chunk was on web.js **/
/** chunk id: 716601, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(...e) {
  return (...t) => {
    for (let n of e) "function" == typeof n && n(...t)
  }
}
require.d(exports, {
  t: () => r
})