/** Chunk was on web.js **/
/** chunk id: 144371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => f
});
var Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk959457 = require("./959457.js"),
  Chunk458725 = require("./458725.js"),
  Chunk442741 = require("./442741.js"),
  Chunk150457 = require("./150457.js");

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
      let t = Chunk199902.Z.getCurrentUserActiveStream();
      if (null == exports || 0 === Chunk199902.Z.getViewerIds(exports).length) return null;
      let n = null == (e = Chunk959457.Z.getRTCConnection((0, Chunk569545.V9)(exports))) ? true : module.getMediaEngineConnectionId();
      if (null == require) return null;
      let c = (0, Chunk150457.hj)(require, exports.ownerId);
      return null == c ? null : 100 * c.short.packetLossRate > d || 100 * c.long.packetLossRate > d ? [u({
        type: Chunk458725.u.STREAM_SEND_HIGH_PACKET_LOSS
      }, (0, Chunk442741.rT)((0, Chunk569545.V9)(exports)))] : true
    },
    makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
  }