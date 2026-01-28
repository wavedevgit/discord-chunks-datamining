/** Chunk was on 5606 **/
/** chunk id: 63675, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk33851 = require("./33851.js"),
  a = require.n(Chunk33851),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk654107 = require("./654107.js"),
  Chunk950191 = require("./950191.js"),
  Chunk101928 = require("./101928.js"),
  Chunk927578 = require("./927578.js"),
  Chunk911180 = require("./911180.jsx"),
  Chunk128450 = require("./128450.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk114403 = require("./114403.js");

function h(e) {
  let {
    user: t,
    pendingAvatarSrc: n,
    pendingColors: i,
    onThemeColorsChange: s,
    preventDisabled: h,
    guildId: A,
    className: E,
    showPremiumIcon: x = true,
    showResetThemeButton: O = false,
    forcedDivider: C
  } = e, y = (0, u.Ay)(t.id, A), {
    primaryColor: j,
    secondaryColor: T
  } = (0, p.A)({
    user: t,
    displayProfile: y,
    pendingThemeColors: i,
    isPreview: true
  }), v = _.Ay.canUsePremiumProfileCustomization(t), S = null != n ? n : t.getAvatarURL(A, 80), I = (0, c.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), N = (0, d.rh)(S, I, false);
  if (null == j || null == T) return null;
  let P = e => {
    s(a()(e, null == y ? true : y.themeColors) ? true : e)
  };
  return (0, r.jsx)(g.A, {
    title: f.intl.string(f.t.DMeO2X),
    disabled: !v && !h,
    className: l()(b.__invalid_profileThemesSection, E),
    showPremiumIcon: x,
    forcedDivider: C,
    children: (0, r.jsxs)("div", {
      className: b.hd,
      children: [(0, r.jsx)("div", {
        className: b.YX,
        children: (0, r.jsx)(m.A, {
          onChange: e => P([e, T]),
          color: j,
          suggestedColors: N,
          showEyeDropper: true,
          label: (0, r.jsx)(c.Text, {
            className: b.yz,
            color: "text-default",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: f.intl.string(f.t.C3KTQk)
          })
        })
      }), (0, r.jsx)("div", {
        className: b.YX,
        children: (0, r.jsx)(m.A, {
          onChange: e => P([j, e]),
          color: T,
          suggestedColors: N,
          showEyeDropper: true,
          label: (0, r.jsx)(c.Text, {
            className: b.yz,
            color: "text-default",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: f.intl.string(f.t["8elvy6"])
          })
        })
      }), O && null != A && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: b.WA,
        children: (0, r.jsx)(c.Button, {
          variant: "secondary",
          size: "sm",
          text: f.intl.string(f.t["L+GmoR"]),
          onClick: () => P([null, null])
        })
      })]
    })
  })
}