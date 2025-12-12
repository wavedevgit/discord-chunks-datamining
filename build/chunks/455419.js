/** Chunk was on web.js **/
/** chunk id: 455419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _e: () => r,
  iS: () => a,
  u: () => s,
  z9: () => o
});
let r = new WeakMap;

function i(e) {
  return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e
}

function o(e, t) {
  let n = r.get(e);
  if (!n) throw Error("Unknown grid");
  return `${n}-${i(t)}`
}

function a(e, t, n) {
  let o = r.get(e);
  if (!o) throw Error("Unknown grid");
  return `${o}-${i(t)}-${i(n)}`
}

function s(e, t) {
  return [...e.collection.rowHeaderColumnKeys].map(n => a(e, t, n)).join(" ")
}