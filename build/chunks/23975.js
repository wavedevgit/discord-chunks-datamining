/** Chunk was on web.js **/
/** chunk id: 23975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => a,
  Y: () => i
});
var Chunk408713 = require("./408713.js");

function i(e) {
  return "" === e.pointerType && !!e.isTrusted || ((0, r.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
}

function a(e) {
  return !(0, r.m0)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
}