/** Chunk was on 27978 **/
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(231239),
  l = n(129293),
  s = n(388905),
  c = n(703656),
  u = n(108427),
  d = n(844800),
  h = n(580497),
  p = n(981631),
  f = n(388032),
  g = n(887605);

function _(e) {
  let {
    location: t
  } = e, [_, m] = i.useState(!1), {
    verifySuccess: b,
    verifyErrors: x,
    redirectGuildId: N
  } = (0, o.e7)([d.Z], () => d.Z.getState());
  i.useEffect(() => {
    let e = (0, l.Z)(t);
    a.Z.verify(e), (0, u.e)("verify_hub_email")
  }, [t]);
  let v = () => {
    (0, h.Z)(N), m(!0)
  };
  return _ ? (0, r.jsxs)(s.ZP, {
    children: [(0, r.jsx)(s.Dx, {
      className: g.title,
      children: f.NW.string(f.t.csrAMD)
    }), (0, r.jsx)(s.DK, {
      className: g.subtitle,
      children: f.NW.string(f.t["m1+IBg"])
    }), (0, r.jsx)(s.zx, {
      className: g.spacedButton,
      onClick: () => (0, c.uL)(p.Z5c.CHANNEL(N)),
      children: f.NW.string(f.t.fIv16O)
    })]
  }) : b ? (0, r.jsxs)(s.ZP, {
    children: [(0, r.jsx)(s.Ee, {
      className: g.image,
      src: n(73962)
    }), (0, r.jsx)(s.Dx, {
      className: g.title,
      children: f.NW.string(f.t.dAfGb2)
    }), (0, r.jsx)(s.zx, {
      onClick: v,
      children: f.NW.string(f.t.uJWIj4)
    })]
  }) : null != x ? (0, r.jsxs)(s.ZP, {
    children: [(0, r.jsx)(s.Ee, {
      className: g.image,
      src: n(375673)
    }), (0, r.jsx)(s.Dx, {
      className: g.title,
      children: f.NW.string(f.t.PCgG39)
    }), (0, r.jsx)(s.DK, {
      className: g.subtitle,
      children: f.NW.string(f.t.tQpeAw)
    }), (0, r.jsx)(s.zx, {
      onClick: v,
      children: f.NW.string(f.t.uJWIj4)
    })]
  }) : (0, r.jsxs)(s.ZP, {
    children: [(0, r.jsx)(s.Ee, {
      className: g.image,
      src: n(892235)
    }), (0, r.jsx)(s.Dx, {
      className: g.title,
      children: f.NW.string(f.t["0c8+5u"])
    }), (0, r.jsx)(s.DK, {
      className: g.subtitle,
      children: f.NW.string(f.t.ULTCBA)
    }), (0, r.jsx)(s.zx, {
      submitting: !0,
      color: s.zx.Colors.PRIMARY
    })]
  })
}
o.ZP.initialize()