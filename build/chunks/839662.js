/** Chunk was on 12416 **/
n.d(t, {
  Z: () => i
});
var r = n(44136),
  l = n(354459);

function i(e, t) {
  var n, i;
  let o = null,
    a = null,
    s = null,
    c = !1,
    u = !1;
  switch (e.type) {
    case l.fO.ACTIVITY:
      break;
    case l.fO.USER:
      o = e.streamId, s = e.voiceState, c = e.speaking, u = e.ringing;
      break;
    case l.fO.STREAM:
      o = e.streamId, a = e.stream
  }
  return {
    streamId: o,
    stream: a,
    speaking: c,
    ringing: u,
    muted: null !== (n = null == s ? void 0 : s.isVoiceMuted()) && void 0 !== n && n,
    deafen: null !== (i = null == s ? void 0 : s.isVoiceDeafened()) && void 0 !== i && i,
    mirror: e.type === l.fO.USER && e.user.id === t,
    hasVideo: (0, r.ZP)(e)
  }
}