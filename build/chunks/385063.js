/** Chunk was on 8473 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(739566),
  a = n(834129),
  o = n(388032),
  l = n(355839);

function s(e) {
  let {
    message: t,
    usernameHook: s,
    compact: c,
    isForumPost: u
  } = e, d = (0, i.ZP)(t), p = s(d);
  return (0, r.jsx)(a.Z, {
    compact: c,
    className: l.channelNameChange,
    icon: n(819373),
    timestamp: t.timestamp,
    children: o.NW.format(u ? o.t.SOQ4hI : o.t.oItgEx, {
      username: d.nick,
      usernameHook: p,
      channelName: t.content
    })
  })
}