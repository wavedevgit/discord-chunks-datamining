/** Chunk was on web.js **/
/** chunk id: 625557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nV: () => r,
  uk: () => i
});
let r = new WeakMap;

function i(e, t) {
  var n;
  let {
    id: i
  } = null != (n = r.get(e)) ? n : {};
  if (!i) throw Error("Unknown list");
  return `${i}-${a(t)}`
}

function a(e) {
  return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e
}