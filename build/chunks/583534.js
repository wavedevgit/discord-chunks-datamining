/** Chunk was on web.js **/
/** chunk id: 583534, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk141931 = require("./141931.js"),
  Chunk205693 = require("./205693.js"),
  Chunk439372 = require("./439372.js"),
  Chunk961350 = require("./961350.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Set;

function d() {
  for (let e of [r.du.HasRTCConnection, r.du.IsSendingVideo, r.du.IsSendingStream, r.du.IsReceivingVideo, r.du.IsReceivingStream]) s.Ay.setCrashInformation(e, 0)
}

function f(e) {
  switch (e) {
    case i.x.DEFAULT:
      return r.du.VideoMediaSessionId;
    case i.x.STREAM:
      return r.du.StreamMediaSessionId
  }
}

function p(e) {
  var t;
  s.Ay.setCrashInformation(f(e.context), null != (t = e.mediaSessionId) ? t : null)
}

function _(e) {
  var t;
  let n = (null != (t = e.channelId) ? t : "unknown") + e.context;
  switch (e.state) {
    case l.S7L.RTC_CONNECTED:
      u.add(n), s.Ay.setCrashInformation(r.du.HasRTCConnection, 1);
      break;
    case l.S7L.DISCONNECTED:
      s.Ay.setCrashInformation(f(e.context), null), u.delete(n), 0 === u.size && d()
  }
}

function h(e) {
  let t = e.userId === o.default.getId(),
    n = null != e.streamId,
    a = null;
  switch (e.context) {
    case i.x.DEFAULT:
      a = t ? r.du.IsSendingVideo : r.du.IsReceivingVideo;
      break;
    case i.x.STREAM:
      a = t ? r.du.IsSendingStream : r.du.IsReceivingStream
  }
  s.Ay.setCrashInformation(a, +!!n)
}
class m extends Chunk439372.A {
  constructor(...e) {
    super(...e), c(this, "actions", {
      RTC_CONNECTION_STATE: _,
      RTC_CONNECTION_VIDEO: h,
      MEDIA_SESSION_JOINED: p
    })
  }
}
let g = new m