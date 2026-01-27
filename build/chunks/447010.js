/** Chunk was on web.js **/
/** chunk id: 447010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => u
});
var Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk709710 = require("./709710.js"),
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
    } = e, l = r.A.getChannel(t), u = (null == l ? true : l.isGuildStageVoice()) && (null == n ? true : n.suppress), d = 0 === Object.keys(i.A.getInputDevices()).length, f = a.A.getMediaSessionId();
    if (d && null != l && null != f && !u) return [c({
      type: o.iy.NO_INPUT_DEVICES
    }, (0, s.jY)())]
  },
  makeErrorContextKey: e => "".concat(e.mediaSessionId)
}