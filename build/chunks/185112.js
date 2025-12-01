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
      let e = Chunk19780.Z.getRTCConnection();
      if (null == module) return null;
      let t = module.getMediaEngineConnectionId();
      if (null == exports || !Chunk131951.Z.isVideoEnabled()) return null;
      let n = Chunk19780.Z.getLastNonZeroRemoteVideoSinkWantsTime();
      if (null != require && performance.now() - require < p || !module.hasActiveRemoteWants()) return null;
      let o = (0, Chunk150457.hj)(exports, Chunk314897.default.getId());
      return null == Chunk70956 ? null : Chunk70956.short.frameRate < f || Chunk70956.long.frameRate < f ? [d({
        type: Chunk458725.u.CAMERA_SEND_LOW_FPS,
        userId: Chunk314897.default.getId()
      }, (0, Chunk442741.Y9)())] : true
    },
    makeErrorContextKey: e => "".concat(e.mediaSessionId)
  }