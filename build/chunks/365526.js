/** Chunk was on web.js **/
/** chunk id: 365526, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return "string" == typeof e.content || true === e.content ? e.content : t(e.content, n)
}

function i(e) {
  return "home" === e || "browse" === e || "customize" === e || "guide" === e || "linked-roles" === e
}
require.d(exports, {
  d: () => i,
  t: () => r
})