/** Chunk was on web.js **/
/** chunk id: 44718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => _
});
var Chunk624694 = require("./624694.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk927813 = require("./927813.js"),
  Chunk709710 = require("./709710.js"),
  Chunk601900 = require("./601900.js");

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
  f = 10 * Chunk927813.A.Millis.SECOND,
  p = 30,
  _ = {
    getActiveErrors: () => {
      var e, t, n, o, c, _;
      if ((null != (e = null == (n = a.A.getRTCConnection()) ? true : n.getDurationSeconds()) ? e : 0) < d || performance.now() - i.A.getLastAudioInputDeviceChangeTimestamp() < f) return;
      let h = null != (t = null == (c = r.A.getConnectionStats(null == (_ = a.A.getRTCConnection()) ? true : _.getMediaEngineConnectionId())) || null == (o = c.stats.rtp.outbound.find(e => "audio" === e.type)) ? true : o.sampleRateMismatchPercent) ? t : 0;
      if (Math.abs(h) > p) return [u({
        type: s.iy.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
        audioCaptureSampleRateMismatchPercent: h
      }, (0, l.jY)())]
    },
    makeErrorContextKey: e => "".concat(e.mediaSessionId, ":").concat(e.audioInputDeviceName)
  }