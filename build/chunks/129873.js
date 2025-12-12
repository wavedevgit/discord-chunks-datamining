/** Chunk was on web.js **/
/** chunk id: 129873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => p
}), require("./539854.js");
var Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk959457 = require("./959457.js"),
  Chunk458725 = require("./458725.js"),
  Chunk442741 = require("./442741.js"),
  Chunk150457 = require("./150457.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = 10,
  p = {
    getActiveErrors: () => (0, Chunk150457.LN)() ? Chunk199902.Z.getAllActiveStreams().reduce((e, t) => {
      var n;
      let i = null == (n = a.Z.getRTCConnection((0, r.V9)(t))) ? true : n.getMediaEngineConnectionId();
      if (null == i || t.ownerId === o.default.getId()) return e;
      let u = (0, c.hj)(i, t.ownerId);
      return null == u || (100 * u.short.packetLossRate > f || 100 * u.long.packetLossRate > f) && e.push(d({
        type: s.u.STREAM_VIEW_HIGH_PACKET_LOSS
      }, (0, l.rT)((0, r.V9)(t)))), e
    }, []) : null,
    makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
  }