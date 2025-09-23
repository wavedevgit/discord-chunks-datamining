/** Chunk was on 47387 **/
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
    u = null,
    s = false,
    c = false;
  switch (e.type) {
    case l.fO.ACTIVITY:
      break;
    case l.fO.USER:
      a = e.streamId, u = e.voiceState, s = e.speaking, c = e.ringing;
      break;
    case l.fO.STREAM:
      a = e.streamId, o = e.stream
  }
  return {
    streamId: a,
    stream: o,
    speaking: s,
    ringing: c,
    muted: null != (n = null == u ? true : u.isVoiceMuted()) && n,
    deafen: null != (i = null == u ? true : u.isVoiceDeafened()) && i,
    mirror: e.type === l.fO.USER && e.user.id === t,
    hasVideo: (0, r.ZP)(e)
  }
}