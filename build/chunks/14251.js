/** Chunk was on 25176 **/
r.d(t, {
  a: () => d,
  r: () => u
}), r(47120);
var n = r(200651),
  s = r(481060),
  a = r(785232),
  i = r(594174),
  l = r(5192),
  o = r(388032),
  c = r(310821);
let u = (e, t) => {
    if (1 === e.length) {
      let r = i.default.getUser(e[0]);
      return null != r ? (0, n.jsx)(s.qEK, {
        src: r.getAvatarURL(t, 32),
        size: s.EFr.SIZE_32,
        "aria-hidden": !0
      }) : (0, n.jsx)(s.tBG, {})
    }
    return (0, n.jsx)(a.Z, {
      recipients: e,
      size: s.EFr.SIZE_32
    })
  },
  d = (e, t, r, a) => {
    let u = [...e].map(e => i.default.getUser(e)),
      d = e => (0, n.jsx)(s.Text, {
        variant: "text-md/semibold",
        className: c.username,
        children: l.ZP.getName(r, a, e)
      });
    return t >= 4 ? o.NW.format(o.t.qfo6KS, {
      usernameHook1: () => d(u[0]),
      usernameHook2: () => d(u[1]),
      numberOfOtherUsers: t - e.length
    }) : 3 === t ? o.NW.format(o.t["67ZE+/"], {
      usernameHook1: () => d(u[0]),
      usernameHook2: () => d(u[1])
    }) : 2 === t ? o.NW.format(o.t.veV4IC, {
      usernameHook1: () => d(u[0]),
      usernameHook2: () => d(u[1])
    }) : o.NW.format(o.t["4WHCtr"], {
      usernameHook: () => d(u[0])
    })
  }