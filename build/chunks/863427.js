/** Chunk was on web.js **/
/** chunk id: 863427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i,
  c: () => a
});
var Chunk927917 = require("./927917.js");

function i(e) {
  return "" === e.pointerType && !!e.isTrusted || ((0, r.Dt)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
}

function a(e) {
  return !(0, r.Dt)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
}