/** Chunk was on web.js **/
/** chunk id: 467276, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t = typeof e;
  if ("object" == t) {
    if (Array.isArray(e)) return "array";
    if (null === e) return "null"
  }
  return t
}

function i(e) {
  return null !== e && "object" == typeof e && !Array.isArray(e)
}
require.d(exports, {
  O: () => i,
  V: () => r
})