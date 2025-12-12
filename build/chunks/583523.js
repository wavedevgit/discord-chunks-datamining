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
  let e = Chunk944486.Z.getVoiceChannelId(),
    t = Chunk967368.Z.bitrate;
  if (null == module) return;
  let n = Chunk592125.Z.getChannel(module);
  null != require && exports !== require.bitrate && Chunk570140.Z.dispatch({
    type: "SET_CHANNEL_BITRATE",
    bitrate: require.bitrate
  })
}

function p() {
  var e;
  let t = Chunk944486.Z.getVoiceChannelId(),
    n = Chunk631768.Z.mode;
  if (null == exports) return;
  let i = Chunk592125.Z.getChannel(exports);
  if (null == Chunk147913) return;
  let o = null != (e = Chunk147913.videoQualityMode) ? module : Chunk981631.Ucd.AUTO;
  require !== Chunk314897 && Chunk570140.Z.dispatch({
    type: "SET_CHANNEL_VIDEO_QUALITY_MODE",
    mode: Chunk314897
  })
}

function _() {
  f(), p()
}

function m(e) {
  let {
    channels: t
  } = e;
  for (let e of t) l.Z.getVoiceChannelId() === e.id && _()
}

function h(e) {
  let {
    voiceStates: t
  } = e;
  t.forEach(e => {
    o.default.getSessionId() === e.sessionId && _()
  })
}
class g extends Chunk147913.Z {
  constructor(...e) {
    super(...e), d(this, "actions", {
      CHANNEL_UPDATES: m,
      VOICE_STATE_UPDATES: h
    })
  }
}
let E = new g