/** Chunk was on 96123 **/
n.d(t, {
  V: () => l
}), n(399606);
var i = n(87051),
  a = n(9156),
  r = n(621600),
  o = n(113449),
  c = n(686660),
  s = n(981631),
  d = n(526761);

function l(e, t) {
  let n = a.ZP.getGuildFlags(e);
  t === c.s8.ALL_MESSAGES ? i.Z.updateGuildNotificationSettings(e, {
    message_notifications: s.bL.ALL_MESSAGES,
    flags: (0, o.Q4)(n, d.vc.UNREADS_ALL_MESSAGES)
  }, r.ZB.PresetAll) : t === c.s8.MENTIONS ? i.Z.updateGuildNotificationSettings(e, {
    message_notifications: s.bL.ONLY_MENTIONS,
    flags: (0, o.Q4)(n, d.vc.UNREADS_ONLY_MENTIONS)
  }, r.ZB.PresetMentions) : t === c.s8.NOTHING && i.Z.updateGuildNotificationSettings(e, {
    message_notifications: s.bL.NO_MESSAGES,
    flags: (0, o.Q4)(n, d.vc.UNREADS_ONLY_MENTIONS)
  }, r.ZB.PresetNothing)
}