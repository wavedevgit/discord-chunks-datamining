/** Chunk was on web.js **/
/** chunk id: 112457, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  }
}

function i(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  }
}

function a(e) {
  var t = e.clientOffset,
    n = e.initialClientOffset,
    a = e.initialSourceClientOffset;
  return t && n && a ? i(r(t, a), n) : null
}

function o(e) {
  var t = e.clientOffset,
    n = e.initialClientOffset;
  return t && n ? i(t, n) : null
}
require.d(exports, {
  YY: () => a,
  ar: () => o
})