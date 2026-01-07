/** Chunk was on web.js **/
/** chunk id: 442741, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y9: () => d,
  rT: () => f
});
var Chunk46973 = require("./46973.js"),
  Chunk569545 = require("./569545.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk959457 = require("./959457.js");

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

function d() {
  var e;
  let t = s.Z.getVoiceChannelId();
  return u({
    channelId: null != t ? t : true,
    mediaSessionId: null != (e = o.Z.getMediaSessionId()) ? e : true,
    rtcConnectionId: o.Z.getRTCConnectionId(),
    mediaContext: r.Yn.DEFAULT
  }, p())
}

function f(e) {
  var t;
  let {
    channelId: n,
    ownerId: a
  } = (0, i.my)(e), o = l.Z.getRTCConnection(e);
  return u({
    channelId: n,
    mediaSessionId: null != (t = null == o ? true : o.getMediaSessionId()) ? t : true,
    rtcConnectionId: null == o ? true : o.getRTCConnectionId(),
    mediaContext: r.Yn.STREAM,
    streamKey: e,
    userId: a
  }, p())
}

function p() {
  var e, t, n;
  return {
    videoDeviceName: null == (e = a.Z.getVideoDevices()[a.Z.getVideoDeviceId()]) ? true : e.name,
    audioInputDeviceName: null == (t = a.Z.getInputDevices()[a.Z.getInputDeviceId()]) ? true : t.name,
    audioOutputDeviceName: null == (n = a.Z.getOutputDevices()[a.Z.getOutputDeviceId()]) ? true : n.name
  }
}