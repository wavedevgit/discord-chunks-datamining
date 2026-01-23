/** Chunk was on 31748 **/
/** chunk id: 110234, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk51082 = require("./51082.js"),
  Chunk806931 = require("./806931.js");

function i(e, t) {
  var n, i;
  let a = null,
    o = null,
    s = null,
    c = false,
    u = false,
    d = false;
  switch (e.type) {
    case l.lp.ACTIVITY:
      break;
    case l.lp.USER:
      a = e.streamId, s = e.voiceState, c = e.speaking, u = e.latched, d = e.ringing;
      break;
    case l.lp.STREAM:
      a = e.streamId, o = e.stream
  }
  return {
    streamId: a,
    stream: o,
    speaking: c,
    latched: u,
    ringing: d,
    muted: null != (n = null == s ? true : s.isVoiceMuted()) && n,
    deafen: null != (i = null == s ? true : s.isVoiceDeafened()) && i,
    mirror: e.type === l.lp.USER && e.user.id === t,
    hasVideo: (0, r.Ay)(e)
  }
}