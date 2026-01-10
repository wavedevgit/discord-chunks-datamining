/** Chunk was on 69813 **/
/** chunk id: 839662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk44136 = require("./44136.js"),
  Chunk354459 = require("./354459.js");

function i(e, t) {
  var n, i;
  let a = null,
    o = null,
    c = null,
    s = false,
    u = false,
    d = false;
  switch (e.type) {
    case l.fO.ACTIVITY:
      break;
    case l.fO.USER:
      a = e.streamId, c = e.voiceState, s = e.speaking, u = e.latched, d = e.ringing;
      break;
    case l.fO.STREAM:
      a = e.streamId, o = e.stream
  }
  return {
    streamId: a,
    stream: o,
    speaking: s,
    latched: u,
    ringing: d,
    muted: null != (n = null == c ? true : c.isVoiceMuted()) && n,
    deafen: null != (i = null == c ? true : c.isVoiceDeafened()) && i,
    mirror: e.type === l.fO.USER && e.user.id === t,
    hasVideo: (0, r.ZP)(e)
  }
}