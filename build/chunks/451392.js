/** Chunk was on 13323 **/
n.d(t, {
  Z: () => b
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(498607),
  l = n.n(a),
  o = n(692547),
  c = n(481060),
  d = n(220082),
  u = n(687158),
  m = n(576635),
  g = n(74538),
  p = n(193528),
  h = n(993413),
  f = n(388032),
  N = n(704616);

function b(e) {
  let {
    user: t,
    pendingAvatarSrc: n,
    pendingColors: i,
    onThemeColorsChange: a,
    preventDisabled: b,
    guildId: x,
    className: _,
    showPremiumIcon: E = !0,
    showResetThemeButton: j = !1,
    forcedDivider: C
  } = e, O = (0, u.ZP)(t.id, x), {
    primaryColor: S,
    secondaryColor: v
  } = (0, m.Z)({
    user: t,
    displayProfile: O,
    pendingThemeColors: i,
    isPreview: !0
  }), T = g.ZP.canUsePremiumProfileCustomization(t), I = null != n ? n : t.getAvatarURL(x, 80), A = (0, c.dQu)(o.Z.unsafe_rawColors.PRIMARY_530).hex(), y = (0, d.Cf)(I, A, !1);
  if (null == S || null == v) return null;
  let P = e => {
    a(l()(e, null == O ? void 0 : O.themeColors) ? void 0 : e)
  };
  return (0, r.jsx)(h.Z, {
    title: f.NW.string(f.t.DMeO2d),
    disabled: !T && !b,
    className: s()(N.__invalid_profileThemesSection, _),
    showPremiumIcon: E,
    forcedDivider: C,
    children: (0, r.jsxs)("div", {
      className: N.sectionContainer,
      children: [(0, r.jsx)("div", {
        className: N.sparkleContainer,
        children: (0, r.jsx)(p.Z, {
          onChange: e => P([e, v]),
          color: S,
          suggestedColors: y,
          showEyeDropper: !0,
          label: (0, r.jsx)(c.Text, {
            className: N.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: f.NW.string(f.t.C3KTQk)
          })
        })
      }), (0, r.jsx)("div", {
        className: N.sparkleContainer,
        children: (0, r.jsx)(p.Z, {
          onChange: e => P([S, e]),
          color: v,
          suggestedColors: y,
          showEyeDropper: !0,
          label: (0, r.jsx)(c.Text, {
            className: N.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": !0,
            children: f.NW.string(f.t["8elvy8"])
          })
        })
      }), j && null != x && (0, r.jsx)(c.zxk, {
        className: N.resetButton,
        color: c.zxk.Colors.PRIMARY,
        look: c.zxk.Looks.LINK,
        size: c.zxk.Sizes.SMALL,
        onClick: () => P([null, null]),
        children: f.NW.string(f.t["L+Gmoa"])
      })]
    })
  })
}