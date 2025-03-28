/** Chunk was on 84181 **/
n.d(t, {
  F: () => p
});
var i = n(512722),
  r = n.n(i),
  d = n(846027),
  a = n(287734),
  l = n(131951),
  _ = n(254238),
  s = n(893387);

function p(e, t) {
  var n;
  let i = null !== (n = e.sessionId) && void 0 !== n ? n : "";
  (0, _._)(i), (0, _.s6)();
  let p = null != t ? t : e.channelId;
  r()(null != p, "attempted to transfer to unknown channel"), e.selfMute !== l.Z.isSelfMute() && d.Z.toggleSelfMute(), e.selfDeaf !== l.Z.isSelfDeaf() && d.Z.toggleSelfDeaf(), (0, s.Z)(p, "discord_client", i), a.default.selectVoiceChannel(p, !1)
}