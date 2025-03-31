/** Chunk was on 83379 **/
n.d(t, {
  Z: () => l
});
var r = n(200651);
n(192379);
var i = n(739566),
  a = n(834129),
  o = n(388032);

function l(e) {
  let {
    message: t,
    channel: l,
    targetUser: s,
    actorUsernameHook: c,
    targetUsernameHook: u,
    compact: d
  } = e, p = (0, i.ZP)(t), m = (0, i.Sw)(s, l), f = c(p), h = u(null != m ? m : void 0), g = o.NW.format(o.t["32QI5+"], {
    actorName: p.nick,
    actorHook: f,
    targetName: null == m ? void 0 : m.nick,
    targetHook: h
  });
  return (0, r.jsx)(a.Z, {
    icon: n(474019),
    timestamp: t.timestamp,
    compact: d,
    children: g
  })
}