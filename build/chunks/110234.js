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
    s = null,
    o = null,
    c = false,
    u = false,
    d = false;
  switch (e.type) {
    case r.lp.ACTIVITY:
      break;
    case r.lp.USER:
      a = e.streamId, o = e.voiceState, c = e.speaking, u = e.latched, d = e.ringing;
      break;
    case r.lp.STREAM:
      a = e.streamId, s = e.stream
  }
  return {
    streamId: a,
    stream: s,
    speaking: c,
    latched: u,
    ringing: d,
    muted: null != (n = null == o ? true : o.isVoiceMuted()) && n,
    deafen: null != (i = null == o ? true : o.isVoiceDeafened()) && i,
    mirror: e.type === r.lp.USER && e.user.id === t,
    hasVideo: (0, l.Ay)(e)
  }
}