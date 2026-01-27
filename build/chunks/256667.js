/** Chunk was on web.js **/
/** chunk id: 256667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => u
});
var Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk487329 = require("./487329.js"),
  Chunk601900 = require("./601900.js");

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
    } = e, l = r.A.getChannel(t), u = (null == l ? true : l.isGuildStageVoice()) && (null == n ? true : n.suppress), d = a.A.getMediaSessionId();
    if (null != l && null != d && false === i.A.getInputDetected() && !u && !i.A.isSelfMute()) return [c({
      type: o.iy.NO_AUDIO_INPUT_DETECTED
    }, (0, s.jY)())]
  },
  makeErrorContextKey: e => "".concat(e.mediaSessionId, ":").concat(e.audioInputDeviceName)
}