/** Chunk was on web.js **/
/** chunk id: 731031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => h
});
var Chunk358221 = require("./358221.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk959457 = require("./959457.js"),
  Chunk70956 = require("./70956.js"),
  Chunk557457 = require("./557457.js"),
  Chunk458725 = require("./458725.js"),
  Chunk442741 = require("./442741.js"),
  Chunk150457 = require("./150457.js"),
  Chunk981631 = require("./981631.js");

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
let m = 20 * Chunk70956.Z.Millis.SECOND,
  h = {
    getActiveErrors: () => {
      let e = a.Z.getCurrentUserActiveStream();
      if (null == e || e.state === f.jm8.PAUSED || 0 === a.Z.getViewerIds(e).length) return null;
      let t = (0, i.V9)(e),
        n = o.Z.getRTCConnection(t);
      if (null == n) return null;
      let s = n.getMediaEngineConnectionId();
      if (null == s) return null;
      let p = o.Z.getLastNonZeroRemoteVideoSinkWantsTime(t);
      if (null != p && performance.now() - p < m || !n.hasActiveRemoteWants()) return null;
      let h = r.Z.getParticipant(e.channelId, (0, i.V9)(e));
      if (null == h) return null;
      let g = (0, d.hj)(s, e.ownerId);
      if (null == g) return null;
      let E = (0, l.Wc)(h);
      return null == E ? null : g.short.frameRate < (0, d.dj)(E.maxFrameRate) || g.long.frameRate < (0, d.dj)(E.maxFrameRate) ? [_({
        type: c.u.STREAM_SEND_LOW_FPS
      }, (0, u.rT)((0, i.V9)(e)))] : null
    },
    makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
  }