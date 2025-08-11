/** Chunk was on web.js **/
/** chunk id: 872801, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  let n = e.parentElement;
  for (; null != n;) {
    if (n.classList.contains(t)) return n;
    n = n.parentElement
  }
  return null
}
require.d(exports, {
  Z: () => r
})