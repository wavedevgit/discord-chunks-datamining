/** Chunk was on web.js **/
/** chunk id: 63675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk33851 = require("./33851.js"),
  o = require.n(Chunk33851),
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

function E(e) {
  let {
    user: t,
    pendingAvatarSrc: n,
    pendingColors: i,
    onThemeColorsChange: s,
    preventDisabled: E,
    guildId: y,
    className: b,
    showPremiumIcon: O = true,
    showResetThemeButton: v = false,
    forcedDivider: A
  } = e, I = (0, d.Ay)(t.id, y), {
    primaryColor: S,
    secondaryColor: T
  } = (0, f.A)({
    user: t,
    displayProfile: I,
    pendingThemeColors: i,
    isPreview: true
  }), C = p.Ay.canUsePremiumProfileCustomization(t), N = null != n ? n : t.getAvatarURL(y, 80), w = (0, c.rdh)(l.A.unsafe_rawColors.PRIMARY_530).hex(), R = (0, u.rh)(N, w, false);
  if (null == S || null == T) return null;
  let P = e => {
    s(o()(e, null == I ? true : I.themeColors) ? true : e)
  };
  return (0, r.jsx)(h.A, {
    title: m.intl.string(m.t.DMeO2X),
    disabled: !C && !E,
    className: a()(g.__invalid_profileThemesSection, b),
    showPremiumIcon: O,
    forcedDivider: A,
    children: (0, r.jsxs)("div", {
      className: g.hd,
      children: [(0, r.jsx)("div", {
        className: g.YX,
        children: (0, r.jsx)(_.A, {
          onChange: e => P([e, T]),
          color: S,
          suggestedColors: R,
          showEyeDropper: true,
          label: (0, r.jsx)(c.Text, {
            className: g.yz,
            color: "text-default",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: m.intl.string(m.t.C3KTQk)
          })
        })
      }), (0, r.jsx)("div", {
        className: g.YX,
        children: (0, r.jsx)(_.A, {
          onChange: e => P([S, e]),
          color: T,
          suggestedColors: R,
          showEyeDropper: true,
          label: (0, r.jsx)(c.Text, {
            className: g.yz,
            color: "text-default",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: m.intl.string(m.t["8elvy6"])
          })
        })
      }), v && null != y && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: g.WA,
        children: (0, r.jsx)(c.Button, {
          variant: "secondary",
          size: "sm",
          text: m.intl.string(m.t["L+GmoR"]),
          onClick: () => P([null, null])
        })
      })]
    })
  })
}