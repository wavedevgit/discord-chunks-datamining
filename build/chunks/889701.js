/** Chunk was on web.js **/
/** chunk id: 889701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => u
});
var Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk458725 = require("./458725.js"),
  Chunk442741 = require("./442741.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = {
  getActiveErrors: e => {
    let {
      voiceChannelId: t,
      voiceState: n
    } = e, l = r.Z.getChannel(t), u = (null == l ? true : l.isGuildStageVoice()) && (null == n ? true : n.suppress), d = o.Z.getMediaSessionId();
    if (null != l && null != d && false === i.Z.getInputDetected() && !u && !i.Z.isSelfMute()) return [c({
      type: a.u.NO_AUDIO_INPUT_DETECTED
    }, (0, s.Y9)())]
  },
  makeErrorContextKey: e => "".concat(e.mediaSessionId, ":").concat(e.audioInputDeviceName)
}