/** Chunk was on 11010 **/
/** chunk id: 839662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk44136 = require("./44136.js"),
  Chunk354459 = require("./354459.js");

function l(e, t) {
  var n, l;
  let a = null,
    o = null,
    c = null,
    s = false,
    u = false,
    d = false;
  switch (e.type) {
    case i.fO.ACTIVITY:
      break;
    case i.fO.USER:
      a = e.streamId, c = e.voiceState, s = e.speaking, u = e.latched, d = e.ringing;
      break;
    case i.fO.STREAM:
      a = e.streamId, o = e.stream
  }
  return {
    streamId: a,
    stream: o,
    speaking: s,
    latched: u,
    ringing: d,
    muted: null != (n = null == c ? true : c.isVoiceMuted()) && n,
    deafen: null != (l = null == c ? true : c.isVoiceDeafened()) && l,
    mirror: e.type === i.fO.USER && e.user.id === t,
    hasVideo: (0, r.ZP)(e)
  }
}