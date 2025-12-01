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
      let e = Chunk199902.Z.getCurrentUserActiveStream();
      if (null == module || module.state === Chunk981631.jm8.PAUSED || 0 === Chunk199902.Z.getViewerIds(module).length) return null;
      let t = (0, Chunk569545.V9)(module),
        n = Chunk959457.Z.getRTCConnection(exports);
      if (null == require) return null;
      let s = require.getMediaEngineConnectionId();
      if (null == Chunk70956) return null;
      let p = Chunk959457.Z.getLastNonZeroRemoteVideoSinkWantsTime(exports);
      if (null != p && performance.now() - p < m || !require.hasActiveRemoteWants()) return null;
      let h = Chunk358221.Z.getParticipant(module.channelId, (0, Chunk569545.V9)(module));
      if (null == h) return null;
      let g = (0, Chunk150457.hj)(Chunk70956, module.ownerId);
      if (null == g) return null;
      let E = (0, Chunk557457.Wc)(h);
      return null == E ? null : g.short.frameRate < (0, Chunk150457.dj)(E.maxFrameRate) || g.long.frameRate < (0, Chunk150457.dj)(E.maxFrameRate) ? [_({
        type: Chunk458725.u.STREAM_SEND_LOW_FPS
      }, (0, Chunk442741.rT)((0, Chunk569545.V9)(module)))] : null
    },
    makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
  }