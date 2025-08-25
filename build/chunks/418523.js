/** Chunk was on web.js **/
/** chunk id: 418523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i,
  c: () => o
});
var Chunk88058 = require("./88058.js");

function i(e) {
  return 0 === e.mozInputSource && !!e.isTrusted || ((0, r.Dt)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
}

function o(e) {
  return !(0, r.Dt)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
}