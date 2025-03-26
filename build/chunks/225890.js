/** Chunk was on 52272 **/
n.d(t, {
  Z: () => b
}), n(47120), n(301563);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(305325),
  l = n(281956),
  s = n(922482),
  c = n(592125),
  u = n(271383),
  d = n(430824),
  p = n(594174),
  m = n(897285),
  f = n(924301),
  h = n(482241),
  g = n(11868),
  _ = n(231338);

function b(e) {
  let {
    code: t
  } = e, [n, b, v] = t.split("-"), {
    guildScheduledEvent: x,
    guild: y,
    channel: E,
    isMember: O
  } = (0, o.cj)([f.ZP, d.Z, c.Z, u.ZP, p.default], () => {
    var e, t;
    let r = null !== (t = f.ZP.getGuildScheduledEvent(b)) && void 0 !== t ? t : void 0,
      i = d.Z.getGuild(n),
      o = c.Z.getChannel(null == r ? void 0 : r.channel_id);
    return {
      guildScheduledEvent: r,
      guild: i,
      channel: o,
      isMember: u.ZP.isMember(n, null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
    }
  }, [n, b]);
  return i.useEffect(() => {
    (null == x ? void 0 : x.id) == null && h.Z.fetchGuildEvent(n, b), m.Z.getGuildEventUserCounts(n, b, null != v ? [v] : []), m.Z.getGuildEventsForCurrentUser(n)
  }, [b, n, null == x ? void 0 : x.id, v]), (0, r.jsx)(g.ZP, {
    guild: y,
    channel: E,
    guildScheduledEvent: x,
    isMember: O,
    onAcceptInstantInvite: _.dG,
    onTransitionToInviteChannel: function() {
      if ((0, l.n)(n)) {
        (0, a.hk)(n);
        return
      }(null == E ? void 0 : E.isGuildStageVoice()) ? (0, s.Cq)(E) : (null == E ? void 0 : E.isGuildVoice()) && h.Z.joinVoiceEvent(E.guild_id, E.id)
    },
    recurrenceId: v
  })
}