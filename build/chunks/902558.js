/** Chunk was on web.js **/
/** chunk id: 902558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk268146 = require("./268146.js"),
  Chunk46973 = require("./46973.js"),
  Chunk147913 = require("./147913.js"),
  Chunk314897 = require("./314897.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");

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
  for (let e of [r.X4.HasRTCConnection, r.X4.IsSendingVideo, r.X4.IsSendingStream, r.X4.IsReceivingVideo, r.X4.IsReceivingStream]) s.ZP.setCrashInformation(e, 0)
}

function f(e) {
  switch (e) {
    case i.Yn.DEFAULT:
      return r.X4.VideoMediaSessionId;
    case i.Yn.STREAM:
      return r.X4.StreamMediaSessionId
  }
}

function p(e) {
  var t;
  s.ZP.setCrashInformation(f(e.context), null != (t = e.mediaSessionId) ? t : null)
}

function _(e) {
  var t;
  let n = (null != (t = e.channelId) ? t : "unknown") + e.context;
  switch (e.state) {
    case l.hes.RTC_CONNECTED:
      u.add(n), s.ZP.setCrashInformation(r.X4.HasRTCConnection, 1);
      break;
    case l.hes.DISCONNECTED:
      s.ZP.setCrashInformation(f(e.context), null), u.delete(n), 0 === u.size && d()
  }
}

function m(e) {
  let t = e.userId === o.default.getId(),
    n = null != e.streamId,
    a = null;
  switch (e.context) {
    case i.Yn.DEFAULT:
      a = t ? r.X4.IsSendingVideo : r.X4.IsReceivingVideo;
      break;
    case i.Yn.STREAM:
      a = t ? r.X4.IsSendingStream : r.X4.IsReceivingStream
  }
  s.ZP.setCrashInformation(a, +!!n)
}
class h extends Chunk147913.Z {
  constructor(...e) {
    super(...e), c(this, "actions", {
      RTC_CONNECTION_STATE: _,
      RTC_CONNECTION_VIDEO: m,
      MEDIA_SESSION_JOINED: p
    })
  }
}
let g = new h