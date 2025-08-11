/** Chunk was on web.js **/
/** chunk id: 839662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk44136 = require("./44136.js"),
  Chunk354459 = require("./354459.js");

function o(e, t) {
  var n, o;
  let a = null,
    s = null,
    l = null,
    c = false,
    u = false;
  switch (e.type) {
    case i.fO.ACTIVITY:
      break;
    case i.fO.USER:
      a = e.streamId, l = e.voiceState, c = e.speaking, u = e.ringing;
      break;
    case i.fO.STREAM:
      a = e.streamId, s = e.stream
  }
  return {
    streamId: a,
    stream: s,
    speaking: c,
    ringing: u,
    muted: null != (n = null == l ? true : l.isVoiceMuted()) && n,
    deafen: null != (o = null == l ? true : l.isVoiceDeafened()) && o,
    mirror: e.type === i.fO.USER && e.user.id === t,
    hasVideo: (0, r.ZP)(e)
  }
}