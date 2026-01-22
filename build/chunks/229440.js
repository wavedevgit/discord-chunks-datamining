/** Chunk was on web.js **/
/** chunk id: 229440, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => p
}), require("./321073.js");
var Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk162605 = require("./162605.js"),
  Chunk487329 = require("./487329.js"),
  Chunk601900 = require("./601900.js"),
  Chunk548370 = require("./548370.js");

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
    getActiveErrors: () => (0, c.D$)() ? i.A.getAllActiveStreams().reduce((e, t) => {
      var n;
      let i = null == (n = s.A.getRTCConnection((0, r._z)(t))) ? true : n.getMediaEngineConnectionId();
      if (null == i || t.ownerId === a.default.getId()) return e;
      let u = (0, c.xA)(i, t.ownerId);
      return null == u || (100 * u.short.packetLossRate > f || 100 * u.long.packetLossRate > f) && e.push(d({
        type: o.iy.STREAM_VIEW_HIGH_PACKET_LOSS
      }, (0, l.id)((0, r._z)(t)))), e
    }, []) : null,
    makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
  }