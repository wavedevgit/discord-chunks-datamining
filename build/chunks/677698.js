/** Chunk was on web.js **/
/** chunk id: 677698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => _
});
var Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk927813 = require("./927813.js"),
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
  p = 20 * Chunk927813.A.Millis.SECOND,
  _ = {
    getActiveErrors: () => {
      let e = a.A.getRTCConnection();
      if (null == e) return null;
      let t = e.getMediaEngineConnectionId();
      if (null == t || !i.A.isVideoEnabled()) return null;
      let n = a.A.getLastNonZeroRemoteVideoSinkWantsTime();
      if (null != n && performance.now() - n < p || !e.hasActiveRemoteWants()) return null;
      let s = (0, c.xA)(t, r.default.getId());
      return null == s ? null : s.short.frameRate < f || s.long.frameRate < f ? [d({
        type: o.iy.CAMERA_SEND_LOW_FPS,
        userId: r.default.getId()
      }, (0, l.jY)())] : true
    },
    makeErrorContextKey: e => "".concat(e.mediaSessionId)
  }