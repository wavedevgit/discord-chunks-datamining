/** Chunk was on 1272 **/
n.d(t, {
  Z: () => g
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(812206),
  a = n(324262),
  s = n(434404),
  c = n(106976),
  u = n(270144),
  d = n(981631),
  p = n(388032),
  h = n(466389);

function g(e) {
  let t, {
      guild: n
    } = e,
    g = (0, u.h6)(n),
    f = () => (0, c.sB)(n.id),
    m = i.useMemo(() => new Set(g.map(e => e.applicationId)), [g]),
    b = (0, l.Wu)([o.Z], () => {
      let e = [];
      for (let t of m) {
        let n = o.Z.getApplication(t);
        null != n && e.push(n)
      }
      return e
    }, [m]);
  return 0 === b.length ? null : (t = 1 === b.length ? p.NW.formatToPlainString(p.t["Egq+Gx"], {
    a: b[0].name
  }) : 2 === b.length ? p.NW.formatToPlainString(p.t.LxU9R0, {
    a: b[0].name,
    b: b[1].name
  }) : 3 === b.length ? p.NW.formatToPlainString(p.t.crKXMD, {
    a: b[0].name,
    b: b[1].name,
    c: b[2].name
  }) : p.NW.string(p.t.MvfowM), (0, r.jsx)(a.Z, {
    guild: n,
    onDismissed: f,
    message: t,
    type: d.vID.APPLICATION_SUBSCRIPTION_EXPIRATION,
    image: h,
    onClick: () => {
      f(), s.Z.open(n.id, d.pNK.INTEGRATIONS)
    },
    imageMarginTop: 6,
    imageMarginX: 46,
    cta: p.NW.string(p.t.Rr3MAQ)
  }))
}