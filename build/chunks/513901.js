/** Chunk was on 51724 **/
n.d(t, {
  Z: () => N
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(906732),
  c = n(642619),
  d = n(626135),
  u = n(74538),
  m = n(150039),
  p = n(993413),
  g = n(504983),
  h = n(981631),
  f = n(474936),
  x = n(388032),
  b = n(669228);

function N(e) {
  let {
    user: t,
    guild: n,
    className: s,
    sectionTitle: N,
    forcedDivider: _ = !1,
    withTutorial: E = !1,
    showBorder: j = !1,
    isTryItOutFlow: C = !1,
    initialSelectedEffectId: O
  } = e, v = (0, m.Kg)(t, n), S = u.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: T
  } = (0, o.ZP)(), {
    pendingProfileEffectId: I,
    errors: y
  } = (0, m.bd)(n), A = i.useCallback(() => (0, c.H)({
    analyticsLocations: T,
    initialSelectedEffectId: O,
    guild: n
  }), [T, O, n]);
  i.useEffect(() => {
    S && d.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
      type: f.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: T
    })
  }, [S, T]);
  let P = null != n,
    R = E ? l.gtL : l.zxk;
  return (0, r.jsx)(p.Z, {
    forcedDivider: _,
    borderType: g.Y.PREMIUM,
    hasBackground: !0,
    title: N,
    showBorder: j,
    errors: y,
    className: s,
    children: (0, r.jsxs)("div", {
      className: b.buttonsContainer,
      children: [(0, r.jsx)(R, {
        size: l.zxk.Sizes.SMALL,
        onClick: A,
        className: a()({
          [b.buttonHighlighted]: E
        }),
        children: x.NW.string(x.t["0nEVoK"])
      }), (C || void 0 !== I ? null != I : null != v) && (0, r.jsx)(l.zxk, {
        className: b.removeButton,
        color: l.zxk.Colors.PRIMARY,
        look: l.zxk.Looks.LINK,
        size: l.zxk.Sizes.SMALL,
        onClick: function() {
          (0, m.s6)(null, v, null == n ? void 0 : n.id)
        },
        children: P ? x.NW.string(x.t.GJ3Fcn) : x.NW.string(x.t["Ld+f5e"])
      })]
    })
  })
}