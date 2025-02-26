/** Chunk was on 12416 **/
n.d(t, {
  Z: () => l
});
var r = n(44136),
  i = n(354459);

function l(e, t) {
  var n, l;
  let o = null,
    a = null,
    s = null,
    c = !1,
    u = !1;
  switch (e.type) {
    case i.fO.ACTIVITY:
      break;
    case i.fO.USER:
      o = e.streamId, s = e.voiceState, c = e.speaking, u = e.ringing;
      break;
    case i.fO.STREAM:
      o = e.streamId, a = e.stream
  }
  return {
    streamId: o,
    stream: a,
    speaking: c,
    ringing: u,
    muted: null !== (n = null == s ? void 0 : s.isVoiceMuted()) && void 0 !== n && n,
    deafen: null !== (l = null == s ? void 0 : s.isVoiceDeafened()) && void 0 !== l && l,
    mirror: e.type === i.fO.USER && e.user.id === t,
    hasVideo: (0, r.ZP)(e)
  }
}