/** Chunk was on web.js **/
/** chunk id: 857500, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk961350 = require("./961350.js"),
  Chunk131319 = require("./131319.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk117549 = require("./117549.js"),
  Chunk652215 = require("./652215.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f() {
  let e = l.A.getVoiceChannelId(),
    t = s.A.bitrate;
  if (null == e) return;
  let n = o.A.getChannel(e);
  null == n || t !== n.bitrate && r.h.dispatch({
    type: "SET_CHANNEL_BITRATE",
    bitrate: n.bitrate
  })
}

function p() {
  var e;
  let t = l.A.getVoiceChannelId(),
    n = c.A.mode;
  if (null == t) return;
  let i = o.A.getChannel(t);
  if (null == i) return;
  let a = null != (e = i.videoQualityMode) ? e : u.K3c.AUTO;
  n !== a && r.h.dispatch({
    type: "SET_CHANNEL_VIDEO_QUALITY_MODE",
    mode: a
  })
}

function _() {
  f(), p()
}

function h(e) {
  let {
    channels: t
  } = e;
  for (let e of t) l.A.getVoiceChannelId() === e.id && _()
}

function m(e) {
  let {
    voiceStates: t
  } = e;
  t.forEach(e => {
    a.default.getSessionId() === e.sessionId && _()
  })
}
class g extends Chunk439372.A {
  constructor(...e) {
    super(...e), d(this, "actions", {
      CHANNEL_UPDATES: h,
      VOICE_STATE_UPDATES: m
    })
  }
}
let E = new g