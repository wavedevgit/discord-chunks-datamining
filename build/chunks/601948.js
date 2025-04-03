/** Chunk was on 10451 **/
n.d(t, {
  S: () => p
});
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(246992),
  o = n(535664),
  l = n(502087),
  c = n(921801),
  d = n(594174),
  u = n(726985),
  m = n(474936),
  g = n(404436);
let p = e => {
  let {
    isDevTools: t = !1
  } = e, n = (0, i.e7)([d.default], () => d.default.getCurrentUser()), p = (0, i.e7)([l.Z], () => {
    let e = l.Z.getCreatedAtOverride();
    return null != e ? e.toISOString().substring(0, 10) : ""
  }), h = (0, i.e7)([l.Z], () => l.Z.getPremiumTypeOverride()), f = e => {
    (0, o.u)(new Date(e))
  };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(c.F, {
      setting: u.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
      children: [(0, r.jsx)(s.hjN, {
        title: "Override Client-Side Premium Type",
        tag: s.RB0.H3,
        children: (0, r.jsx)(s.q4e, {
          options: m.b6,
          value: h,
          onChange: e => {
            (0, o.C)(e, n)
          },
          popoutLayerContext: t ? a.O$ : void 0
        })
      }), (0, r.jsx)(s.zxk, {
        look: s.zxk.Looks.LINK,
        style: {
          padding: "0"
        },
        onClick: () => {
          (0, o.C)(m.F_, n)
        },
        children: "Reset premium type override"
      })]
    }), (0, r.jsxs)(c.F, {
      setting: u.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
      children: [(0, r.jsx)(s.hjN, {
        title: "Override Client-Side Account Created At Date",
        tag: s.RB0.H3,
        children: (0, r.jsx)("input", {
          type: "date",
          value: p,
          onChange: e => f(e.target.value),
          className: g.datePicker
        })
      }), (0, r.jsx)(s.zxk, {
        look: s.zxk.Looks.LINK,
        style: {
          padding: "0"
        },
        type: "submit",
        onClick: () => (0, o.u)(void 0),
        children: "Reset account created at override"
      })]
    })]
  })
}