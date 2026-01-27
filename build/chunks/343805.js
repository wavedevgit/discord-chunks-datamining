/** Chunk was on web.js **/
/** chunk id: 343805, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => f
});
var Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk162605 = require("./162605.js"),
  Chunk709710 = require("./709710.js"),
  Chunk601900 = require("./601900.js"),
  Chunk548370 = require("./548370.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
let d = 10,
  f = {
    getActiveErrors: () => {
      var e;
      let t = i.A.getCurrentUserActiveStream();
      if (null == t || 0 === i.A.getViewerIds(t).length) return null;
      let n = null == (e = a.A.getRTCConnection((0, r._z)(t))) ? true : e.getMediaEngineConnectionId();
      if (null == n) return null;
      let c = (0, l.xA)(n, t.ownerId);
      return null == c ? null : 100 * c.short.packetLossRate > d || 100 * c.long.packetLossRate > d ? [u({
        type: o.iy.STREAM_SEND_HIGH_PACKET_LOSS
      }, (0, s.id)((0, r._z)(t)))] : true
    },
    makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
  }