/** Chunk was on 13873 **/
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
    s = null,
    c = false,
    u = false;
  switch (e.type) {
    case i.fO.ACTIVITY:
      break;
    case i.fO.USER:
      a = e.streamId, s = e.voiceState, c = e.speaking, u = e.ringing;
      break;
    case i.fO.STREAM:
      a = e.streamId, o = e.stream
  }
  return {
    streamId: a,
    stream: o,
    speaking: c,
    ringing: u,
    muted: null != (n = null == s ? true : s.isVoiceMuted()) && n,
    deafen: null != (l = null == s ? true : s.isVoiceDeafened()) && l,
    mirror: e.type === i.fO.USER && e.user.id === t,
    hasVideo: (0, r.ZP)(e)
  }
}