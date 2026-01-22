/** Chunk was on web.js **/
/** chunk id: 998280, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  if (null === e || true === e || false === e) return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}
require.d(exports, {
  A: () => r
})