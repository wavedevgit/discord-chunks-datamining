/** Chunk was on web.js **/
/** chunk id: 211224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => u
});
var Chunk959457 = require("./959457.js"),
  Chunk823379 = require("./823379.js"),
  Chunk458725 = require("./458725.js"),
  Chunk442741 = require("./442741.js"),
  Chunk981631 = require("./981631.js");

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
  getActiveErrors: () => Chunk959457.Z.getAllActiveStreamKeys().map(e => r.Z.getQuality(e) === s.IE4.BAD ? c({
    type: o.u.STREAM_BAD_NETWORK_QUALITY
  }, (0, a.rT)(e)) : null).filter(Chunk823379.lm),
  makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
}