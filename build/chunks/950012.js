/** Chunk was on 95468 (519df0bb10da206c.js) **/
n.d(t, {
  Z: () => u
}), n(47120);
var l = n(200651),
  r = n(192379),
  i = n(994640),
  s = n(247007),
  a = n(999464),
  o = n(503406),
  c = n(463115),
  d = n(888592);
let u = e => {
  let {
    onClose: t,
    invite: n,
    forceGuildScrollHeight: u = !0,
    isNUXFlow: m
  } = e, [N, x] = r.useState([d.tF.VERIFY_EMAIL]), [h, v] = r.useState(""), [_, g] = r.useState(""), [f, p] = r.useState(void 0), [E, S] = r.useState([]), I = e => {
    x(N.concat(e).slice(-4))
  };
  switch (N[N.length - 1]) {
    case d.tF.VERIFY_EMAIL:
      return (0, l.jsx)(i.Z, {
        setGuildsInfo: S,
        setStep: I,
        email: h,
        setEmail: v,
        setGuildId: p,
        invite: n,
        onClose: t,
        isNUXFlow: m
      });
    case d.tF.SELECT_SCHOOL:
      return (0, l.jsx)(s.Z, {
        guildsInfo: E,
        setStep: I,
        email: h,
        setGuildId: p,
        forceGuildScrollHeight: u
      });
    case d.tF.SUBMIT_SCHOOL:
      return (0, l.jsx)(a.Z, {
        onBack: () => {
          N.length > 1 && x(N.slice(0, -1).slice(-4))
        },
        setStep: I,
        email: h,
        school: _,
        setSchool: g
      });
    case d.tF.VERIFY_PIN:
      return (0, l.jsx)(o.Z, {
        email: h,
        onClose: t,
        guildId: f
      });
    case d.tF.EMAIL_WAITLIST:
      return (0, l.jsx)(c.Z, {
        setStep: I,
        school: _
      });
    default:
      return null
  }
}