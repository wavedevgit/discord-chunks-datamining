/** Chunk was on web.js **/
/** chunk id: 587993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qd: () => a,
  Qg: () => s
});
let r = Object.prototype.toString;

function i(e, t) {
  return r.call(e) === `[object ${t}]`
}

function a(e) {
  return i(e, "Object")
}

function s(e) {
  return !!(e && e.then && "function" == typeof e.then)
}