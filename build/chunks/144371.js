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
      let t = i.Z.getCurrentUserActiveStream();
      if (null == t || 0 === i.Z.getViewerIds(t).length) return null;
      let n = null == (e = a.Z.getRTCConnection((0, r.V9)(t))) ? true : e.getMediaEngineConnectionId();
      if (null == n) return null;
      let c = (0, l.hj)(n, t.ownerId);
      return null == c ? null : 100 * c.short.packetLossRate > d || 100 * c.long.packetLossRate > d ? [u({
        type: o.u.STREAM_SEND_HIGH_PACKET_LOSS
      }, (0, s.rT)((0, r.V9)(t)))] : true
    },
    makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
  }