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
    compact: l,
    missed: s,
    joinable: c,
    usernameHook: u,
    onClickJoinCall: d
  } = e, p = (0, i.ZP)(t), m = p.nick, f = u(p), h = function(e) {
    let t = null != e.call ? e.call.duration : null;
    return null != t ? t.humanize() : null
  }(t);
  return s ? (0, r.jsx)(o.Z, {
    icon: n(154239),
    timestamp: t.timestamp,
    compact: l,
    children: null != h ? a.NW.format(a.t.AcqBmJ, {
      username: m,
      usernameHook: f,
      callDuration: h
    }) : a.NW.format(a.t["43phHx"], {
      username: m,
      usernameHook: f
    })
  }) : (0, r.jsxs)(o.Z, {
    icon: n(344163),
    timestamp: t.timestamp,
    compact: l,
    children: [null != h ? a.NW.format(a.t["7TeC1N"], {
      username: m,
      usernameHook: f,
      callDuration: h
    }) : a.NW.format(a.t.LuB5RE, {
      username: m,
      usernameHook: f
    }), c ? (0, r.jsx)(o.Z.Action, {
      onClick: d,
      children: a.NW.string(a.t.oa9mvb)
    }) : null]
  })
}