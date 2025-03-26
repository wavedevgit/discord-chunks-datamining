/** Chunk was on 52272 **/
n.d(t, {
  Z: () => c
}), n(47120), n(301563);
var r = n(200651);
n(192379);
var i = n(592125),
  o = n(430824),
  a = n(496675),
  l = n(983436),
  s = n(981631);

function c(e) {
  let {
    code: t,
    messageData: n
  } = e, [c, u] = t.split("/"), d = i.Z.getChannel(u), p = o.Z.getGuild(c);
  return null != d && d.isGuildVocal() && null != p && a.Z.can(s.Plq.VIEW_CHANNEL, d) && a.Z.can(s.Plq.CONNECT, d) ? (0, r.jsx)(l.Z, {
    guild: p,
    channel: d,
    messageData: n
  }) : null
}