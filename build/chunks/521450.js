/** Chunk was on 51724 **/
n.d(t, {
  Z: () => _
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(568611),
  o = n(435935),
  c = n(442837),
  d = n(481060),
  u = n(37234),
  m = n(960412),
  p = n(151662),
  g = n(695346),
  h = n(981631),
  f = n(930441),
  x = n(388032),
  b = n(302859),
  N = n(802138);
let _ = () => {
  let e = g.Ex.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, c.cj)([p.Z], () => p.Z.getEmailSettings());
  return i.useEffect(() => {
    null == n && (0, m.Y7)()
  }, [n]), (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(d.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: x.NW.string(x.t.USIXU1)
    }), (0, r.jsx)(d.j7V, {
      className: a()(N.marginTop8, N.marginBottom20),
      value: e,
      note: x.NW.string(x.t["5MdB3t"]),
      hideBorder: !0,
      onChange: g.Ex.updateSetting,
      children: x.NW.string(x.t.zkEceX)
    }), e ? (0, r.jsx)(d.Zbd, {
      className: b.enableCard,
      type: d.Zbd.Types.CUSTOM,
      outline: !0,
      children: (0, r.jsxs)(o.k, {
        justify: o.k.Justify.END,
        children: [(0, r.jsx)(o.k.Child, {
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            children: x.NW.string(x.t.xAVm7O)
          })
        }), (0, r.jsx)(d.P3F, {
          children: (0, r.jsx)(l.rU, {
            onClick: u.xf,
            to: {
              pathname: h.Z5c.FAMILY_CENTER,
              state: {
                scrollRestoration: !1
              }
            },
            children: x.NW.string(x.t.cUIXFR)
          })
        }), (0, r.jsx)(d.G2e, {
          icon: d.ZSh,
          className: b.arrow,
          disableColor: !0
        })]
      })
    }) : null, (0, r.jsx)(d.j7V, {
      className: a()(N.marginTop20, N.marginBottom20),
      value: !!t[f.$Z.FAMILY_CENTER_DIGEST],
      note: x.NW.string(x.t["y34S4+"]),
      hideBorder: !0,
      onChange: function(e) {
        (0, m.pR)(f.$Z.FAMILY_CENTER_DIGEST, e)
      },
      children: x.NW.string(x.t.irvJKS)
    })]
  })
}