/** Chunk was on web.js **/
/** chunk id: 435987, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  if (!e) returnfalse;
  let n = window.getComputedStyle(e),
    r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r
}
require.d(exports, {
  o: () => r
})