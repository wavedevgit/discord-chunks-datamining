/** Chunk was on web.js **/
/** chunk id: 588225, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Co: () => r,
  XQ: () => i
});
let r = new WeakMap;

function i(e, t) {
  var n;
  let {
    id: i
  } = null != (n = r.get(e)) ? n : {};
  if (!i) throw Error("Unknown list");
  return `${i}-${o(t)}`
}

function o(e) {
  return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e
}