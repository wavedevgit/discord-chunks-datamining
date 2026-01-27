/** Chunk was on web.js **/
/** chunk id: 601900, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  id: () => f,
  jY: () => d
});
var Chunk205693 = require("./205693.js"),
  Chunk652896 = require("./652896.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk162605 = require("./162605.js");

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
  let t = s.A.getVoiceChannelId();
  return u({
    channelId: null != t ? t : true,
    mediaSessionId: null != (e = o.A.getMediaSessionId()) ? e : true,
    rtcConnectionId: o.A.getRTCConnectionId(),
    mediaContext: r.x.DEFAULT
  }, p())
}

function f(e) {
  var t;
  let {
    channelId: n,
    ownerId: a
  } = (0, i.Iy)(e), o = l.A.getRTCConnection(e);
  return u({
    channelId: n,
    mediaSessionId: null != (t = null == o ? true : o.getMediaSessionId()) ? t : true,
    rtcConnectionId: null == o ? true : o.getRTCConnectionId(),
    mediaContext: r.x.STREAM,
    streamKey: e,
    userId: a
  }, p())
}

function p() {
  var e, t, n;
  return {
    videoDeviceName: null == (e = a.A.getVideoDevices()[a.A.getVideoDeviceId()]) ? true : e.name,
    audioInputDeviceName: null == (t = a.A.getInputDevices()[a.A.getInputDeviceId()]) ? true : t.name,
    audioOutputDeviceName: null == (n = a.A.getOutputDevices()[a.A.getOutputDeviceId()]) ? true : n.name
  }
}