/** Chunk was on 7654 **/
n.d(t, {
  Z: () => h
});
var l = n(200651);
n(192379);
var i = n(533800),
  s = n(481060),
  r = n(630388),
  a = n(971130),
  o = n(388032),
  d = n(310637);
let u = a.ZP.getMaxAgeOptions,
  c = a.ZP.getMaxUsesOptions;

function h(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAge: a,
    maxUses: h,
    temporary: g,
    onGenerateNewLink: m,
    onToggleTemporary: v,
    onSelectMaxAge: x,
    onSelectMaxUses: p,
    isGuestInviteCreationToggleEnabled: N,
    inviteFlags: I,
    onSetInviteFlags: f
  } = e, j = u.find(e => e.value === a), S = c.find(e => e.value === h);
  return (0, l.jsx)("div", {
    className: d.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: m,
      className: d.settingsForm,
      children: [(0, l.jsx)(s.xJW, {
        title: o.NW.string(o.t["60qw29"]),
        children: (0, l.jsx)(s.VcW, {
          options: u,
          value: null !== (t = null == j ? void 0 : j.value) && void 0 !== t ? t : u[0].value,
          onChange: x
        })
      }), (0, l.jsx)(s.xJW, {
        title: o.NW.string(o.t.jDqWHR),
        children: (0, l.jsx)(s.VcW, {
          options: c,
          value: null == S ? void 0 : S.value,
          onChange: p
        })
      }), !n && (0, l.jsx)(s.xJW, {
        children: (0, l.jsx)(s.j7V, {
          className: d.switch,
          value: g,
          onChange: e => v(e),
          note: o.NW.string(o.t.UN5IRU),
          hideBorder: !0,
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: o.NW.string(o.t["wE+9dn"])
          })
        })
      }), N && (0, l.jsx)(s.xJW, {
        children: (0, l.jsx)(s.j7V, {
          className: d.switch,
          value: (0, r.yE)(I, i.$.IS_GUEST_INVITE),
          onChange: e => f((0, r.mB)(I, i.$.IS_GUEST_INVITE, e)),
          note: o.NW.string(o.t["/FeTKy"]),
          hideBorder: !0,
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: o.NW.string(o.t.siexRU)
          })
        })
      })]
    })
  })
}