/** Chunk was on web.js **/
/** chunk id: 112908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => u
});
var Chunk162605 = require("./162605.js"),
  Chunk403362 = require("./403362.js"),
  Chunk487329 = require("./487329.js"),
  Chunk601900 = require("./601900.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = {
  getActiveErrors: () => r.A.getAllActiveStreamKeys().map(e => r.A.getQuality(e) === s.bFR.BAD ? c({
    type: a.iy.STREAM_BAD_NETWORK_QUALITY
  }, (0, o.id)(e)) : null).filter(i.Vq),
  makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
}