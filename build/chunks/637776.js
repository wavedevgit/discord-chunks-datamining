/** Chunk was on 27978 **/
n.d(t, {
  Z: () => m
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
  g = n(981631),
  p = n(388032),
  f = n(887605);

function m(e) {
  let {
    location: t
  } = e, [m, _] = i.useState(!1), {
    verifySuccess: b,
    verifyErrors: N,
    redirectGuildId: x
  } = (0, o.e7)([d.Z], () => d.Z.getState());
  i.useEffect(() => {
    let e = (0, l.Z)(t);
    a.Z.verify(e), (0, u.e)("verify_hub_email")
  }, [t]);
  let v = () => {
    (0, h.Z)(x), _(!0)
  };
  return m ? (0, r.jsxs)(s.ZP, {
    children: [(0, r.jsx)(s.Dx, {
      className: f.title,
      children: p.NW.string(p.t.csrAMD)
    }), (0, r.jsx)(s.DK, {
      className: f.subtitle,
      children: p.NW.string(p.t["m1+IBg"])
    }), (0, r.jsx)(s.zx, {
      className: f.spacedButton,
      onClick: () => (0, c.uL)(g.Z5c.CHANNEL(x)),
      children: p.NW.string(p.t.fIv16O)
    })]
  }) : b ? (0, r.jsxs)(s.ZP, {
    children: [(0, r.jsx)(s.Ee, {
      className: f.image,
      src: n(73962)
    }), (0, r.jsx)(s.Dx, {
      className: f.title,
      children: p.NW.string(p.t.dAfGb2)
    }), (0, r.jsx)(s.zx, {
      onClick: v,
      children: p.NW.string(p.t.uJWIj4)
    })]
  }) : null != N ? (0, r.jsxs)(s.ZP, {
    children: [(0, r.jsx)(s.Ee, {
      className: f.image,
      src: n(375673)
    }), (0, r.jsx)(s.Dx, {
      className: f.title,
      children: p.NW.string(p.t.PCgG39)
    }), (0, r.jsx)(s.DK, {
      className: f.subtitle,
      children: p.NW.string(p.t.tQpeAw)
    }), (0, r.jsx)(s.zx, {
      onClick: v,
      children: p.NW.string(p.t.uJWIj4)
    })]
  }) : (0, r.jsxs)(s.ZP, {
    children: [(0, r.jsx)(s.Ee, {
      className: f.image,
      src: n(892235)
    }), (0, r.jsx)(s.Dx, {
      className: f.title,
      children: p.NW.string(p.t["0c8+5u"])
    }), (0, r.jsx)(s.DK, {
      className: f.subtitle,
      children: p.NW.string(p.t.ULTCBA)
    }), (0, r.jsx)(s.zx, {
      submitting: !0,
      color: s.zx.Colors.PRIMARY
    })]
  })
}
o.ZP.initialize()