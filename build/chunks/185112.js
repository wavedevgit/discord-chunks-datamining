/** Chunk was on web.js **/
/** chunk id: 185112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => _
});
var Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk70956 = require("./70956.js"),
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
  p = 20 * Chunk70956.Z.Millis.SECOND,
  _ = {
    getActiveErrors: () => {
      let e = a.Z.getRTCConnection();
      if (null == e) return null;
      let t = e.getMediaEngineConnectionId();
      if (null == t || !i.Z.isVideoEnabled()) return null;
      let n = a.Z.getLastNonZeroRemoteVideoSinkWantsTime();
      if (null != n && performance.now() - n < p || !e.hasActiveRemoteWants()) return null;
      let o = (0, c.hj)(t, r.default.getId());
      return null == o ? null : o.short.frameRate < f || o.long.frameRate < f ? [d({
        type: s.u.CAMERA_SEND_LOW_FPS,
        userId: r.default.getId()
      }, (0, l.Y9)())] : true
    },
    makeErrorContextKey: e => "".concat(e.mediaSessionId)
  }