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
  let t = Chunk944486.Z.getVoiceChannelId();
  return u({
    channelId: null != exports ? exports : true,
    mediaSessionId: null != (e = Chunk19780.Z.getMediaSessionId()) ? module : true,
    rtcConnectionId: Chunk19780.Z.getRTCConnectionId(),
    mediaContext: Chunk46973.Yn.DEFAULT
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
    videoDeviceName: null == (e = Chunk131951.Z.getVideoDevices()[Chunk131951.Z.getVideoDeviceId()]) ? true : module.name,
    audioInputDeviceName: null == (t = Chunk131951.Z.getInputDevices()[Chunk131951.Z.getInputDeviceId()]) ? true : exports.name,
    audioOutputDeviceName: null == (n = Chunk131951.Z.getOutputDevices()[Chunk131951.Z.getOutputDeviceId()]) ? true : require.name
  }
}