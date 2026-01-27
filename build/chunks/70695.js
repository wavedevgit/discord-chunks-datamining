/** Chunk was on web.js **/
/** chunk id: 70695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => m
});
var Chunk313961 = require("./313961.js"),
  Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk162605 = require("./162605.js"),
  Chunk927813 = require("./927813.js"),
  Chunk650338 = require("./650338.js"),
  Chunk709710 = require("./709710.js"),
  Chunk601900 = require("./601900.js"),
  Chunk548370 = require("./548370.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let h = 20 * Chunk927813.A.Millis.SECOND,
  m = {
    getActiveErrors: () => {
      let e = a.A.getCurrentUserActiveStream();
      if (null == e || e.state === f.XYD.PAUSED || 0 === a.A.getViewerIds(e).length) return null;
      let t = (0, i._z)(e),
        n = o.A.getRTCConnection(t);
      if (null == n) return null;
      let s = n.getMediaEngineConnectionId();
      if (null == s) return null;
      let p = o.A.getLastNonZeroRemoteVideoSinkWantsTime(t);
      if (null != p && performance.now() - p < h || !n.hasActiveRemoteWants()) return null;
      let m = r.A.getParticipant(e.channelId, (0, i._z)(e));
      if (null == m) return null;
      let g = (0, d.xA)(s, e.ownerId);
      if (null == g) return null;
      let E = (0, l.wz)(m);
      return null == E ? null : g.short.frameRate < (0, d.s1)(E.maxFrameRate) || g.long.frameRate < (0, d.s1)(E.maxFrameRate) ? [_({
        type: c.iy.STREAM_SEND_LOW_FPS
      }, (0, u.id)((0, i._z)(e)))] : null
    },
    makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
  }