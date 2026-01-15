/** Chunk was on web.js **/
/** chunk id: 433883, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => _
});
var Chunk450109 = require("./450109.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk70956 = require("./70956.js"),
  Chunk458725 = require("./458725.js"),
  Chunk442741 = require("./442741.js");

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
let d = 30,
  f = 10 * Chunk70956.Z.Millis.SECOND,
  p = 30,
  _ = {
    getActiveErrors: () => {
      var e, t, n, o, c, _;
      if ((null != (c = null == (e = a.Z.getRTCConnection()) ? true : e.getDurationSeconds()) ? c : 0) < d || performance.now() - i.Z.getLastAudioInputDeviceChangeTimestamp() < f) return;
      let h = null != (_ = null == (n = r.Z.getConnectionStats(null == (o = a.Z.getRTCConnection()) ? true : o.getMediaEngineConnectionId())) || null == (t = n.stats.rtp.outbound.find(e => "audio" === e.type)) ? true : t.sampleRateMismatchPercent) ? _ : 0;
      if (Math.abs(h) > p) return [u({
        type: s.u.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
        audioCaptureSampleRateMismatchPercent: h
      }, (0, l.Y9)())]
    },
    makeErrorContextKey: e => "".concat(e.mediaSessionId, ":").concat(e.audioInputDeviceName)
  }