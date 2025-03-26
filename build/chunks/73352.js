/** Chunk was on 52272 **/
n.d(t, {
  Z: () => l
});
var r = n(200651);
n(192379);
var i = n(739566),
  o = n(834129),
  a = n(388032);

function l(e) {
  let {
    message: t,
    otherUsername: l,
    usernameHook: s,
    otherUsernameHook: c,
    compact: u
  } = e, {
    nick: d
  } = (0, i.ZP)(t), p = s(), m = c(), f = a.NW.format(a.t.MMN2Ji, {
    username: d,
    usernameHook: p,
    otherUsername: l,
    otherUsernameHook: m
  });
  return (0, r.jsx)(o.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: u,
    children: f
  })
}