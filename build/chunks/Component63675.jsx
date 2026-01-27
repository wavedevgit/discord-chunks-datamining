/** Chunk was on 60667 **/
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
    guildId: b,
    className: E,
    showPremiumIcon: x = true,
    showResetThemeButton: O = false,
    forcedDivider: C
  } = e, I = (0, u.Ay)(t.id, b), {
    primaryColor: T,
    secondaryColor: S
  } = (0, _.A)({
    user: t,
    displayProfile: I,
    pendingThemeColors: i,
    isPreview: true
  }), j = p.Ay.canUsePremiumProfileCustomization(t), v = null != n ? n : t.getAvatarURL(b, 80), N = (0, c.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), y = (0, d.rh)(v, N, false);
  if (null == T || null == S) return null;
  let P = e => {
    s(a()(e, null == I ? true : I.themeColors) ? true : e)
  };
  return (0, r.jsx)(g.A, {
    title: A.intl.string(A.t.DMeO2X),
    disabled: !j && !h,
    className: l()(f.__invalid_profileThemesSection, E),
    showPremiumIcon: x,
    forcedDivider: C,
    children: (0, r.jsxs)("div", {
      className: f.hd,
      children: [(0, r.jsx)("div", {
        className: f.YX,
        children: (0, r.jsx)(m.A, {
          onChange: e => P([e, S]),
          color: T,
          suggestedColors: y,
          showEyeDropper: true,
          label: (0, r.jsx)(c.Text, {
            className: f.yz,
            color: "text-default",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: A.intl.string(A.t.C3KTQk)
          })
        })
      }), (0, r.jsx)("div", {
        className: f.YX,
        children: (0, r.jsx)(m.A, {
          onChange: e => P([T, e]),
          color: S,
          suggestedColors: y,
          showEyeDropper: true,
          label: (0, r.jsx)(c.Text, {
            className: f.yz,
            color: "text-default",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: A.intl.string(A.t["8elvy6"])
          })
        })
      }), O && null != b && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: f.WA,
        children: (0, r.jsx)(c.Button, {
          variant: "secondary",
          size: "sm",
          text: A.intl.string(A.t["L+GmoR"]),
          onClick: () => P([null, null])
        })
      })]
    })
  })
}