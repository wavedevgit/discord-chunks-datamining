/** Chunk was on 8473 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(352736),
  a = n(739566),
  o = n(834129),
  l = n(388032);

function s(e) {
  let {
    message: t,
    usernameHook: s,
    compact: c,
    guildId: u
  } = e, d = (0, a.ZP)(t), p = s(d), m = i.Z.getWelcomeMessageKind(u), f = i.Z.getSystemMessageUserJoin(t.id, m), h = l.NW.format(f, {
    username: d.nick,
    usernameHook: p
  });
  return (0, r.jsx)(o.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: c,
    children: h
  })
}