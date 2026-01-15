/** Chunk was on web.js **/
/** chunk id: 583523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk314897 = require("./314897.js"),
  Chunk967368 = require("./967368.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk631768 = require("./631768.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f() {
  let e = l.Z.getVoiceChannelId(),
    t = o.Z.bitrate;
  if (null == e) return;
  let n = s.Z.getChannel(e);
  null != n && t !== n.bitrate && r.Z.dispatch({
    type: "SET_CHANNEL_BITRATE",
    bitrate: n.bitrate
  })
}

function p() {
  var e;
  let t = l.Z.getVoiceChannelId(),
    n = c.Z.mode;
  if (null == t) return;
  let i = s.Z.getChannel(t);
  if (null == i) return;
  let a = null != (e = i.videoQualityMode) ? e : u.Ucd.AUTO;
  n !== a && r.Z.dispatch({
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
  for (let e of t) l.Z.getVoiceChannelId() === e.id && _()
}

function m(e) {
  let {
    voiceStates: t
  } = e;
  t.forEach(e => {
    a.default.getSessionId() === e.sessionId && _()
  })
}
class g extends Chunk147913.Z {
  constructor(...e) {
    super(...e), d(this, "actions", {
      CHANNEL_UPDATES: h,
      VOICE_STATE_UPDATES: m
    })
  }
}
let E = new g