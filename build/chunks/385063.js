/** Chunk was on 52272 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(739566),
  o = n(834129),
  a = n(388032),
  l = n(355839);

function s(e) {
  let {
    message: t,
    usernameHook: s,
    compact: c,
    isForumPost: u
  } = e, d = (0, i.ZP)(t), p = s(d);
  return (0, r.jsx)(o.Z, {
    compact: c,
    className: l.channelNameChange,
    icon: n(819373),
    timestamp: t.timestamp,
    children: a.NW.format(u ? a.t.SOQ4hI : a.t.oItgEx, {
      username: d.nick,
      usernameHook: p,
      channelName: t.content
    })
  })
}