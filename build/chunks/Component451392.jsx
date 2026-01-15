/** Chunk was on web.js **/
/** chunk id: 451392, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk498607 = require("./498607.js"),
  s = require.n(Chunk498607),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk220082 = require("./220082.js"),
  Chunk687158 = require("./687158.js"),
  Chunk576635 = require("./576635.js"),
  Chunk74538 = require("./74538.js"),
  Chunk193528 = require("./193528.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk532868 = require("./532868.js");

function E(e) {
  let {
    user: t,
    pendingAvatarSrc: n,
    pendingColors: i,
    onThemeColorsChange: o,
    preventDisabled: E,
    guildId: b,
    className: y,
    showPremiumIcon: O = true,
    showResetThemeButton: v = false,
    forcedDivider: S
  } = e, I = (0, d.ZP)(t.id, b), {
    primaryColor: T,
    secondaryColor: C
  } = (0, f.Z)({
    user: t,
    displayProfile: I,
    pendingThemeColors: i,
    isPreview: true
  }), A = p.ZP.canUsePremiumProfileCustomization(t), N = null != n ? n : t.getAvatarURL(b, 80), P = (0, c.dQu)(l.Z.unsafe_rawColors.PRIMARY_530).hex(), w = (0, u.Cf)(N, P, false);
  if (null == T || null == C) return null;
  let R = e => {
    o(s()(e, null == I ? true : I.themeColors) ? true : e)
  };
  return (0, r.jsx)(h.Z, {
    title: m.intl.string(m.t.DMeO2X),
    disabled: !A && !E,
    className: a()(g.__invalid_profileThemesSection, y),
    showPremiumIcon: O,
    forcedDivider: S,
    children: (0, r.jsxs)("div", {
      className: g.sectionContainer,
      children: [(0, r.jsx)("div", {
        className: g.sparkleContainer,
        children: (0, r.jsx)(_.Z, {
          onChange: e => R([e, C]),
          color: T,
          suggestedColors: w,
          showEyeDropper: true,
          label: (0, r.jsx)(c.Text, {
            className: g.colorSwatchLabel,
            color: "text-default",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: m.intl.string(m.t.C3KTQk)
          })
        })
      }), (0, r.jsx)("div", {
        className: g.sparkleContainer,
        children: (0, r.jsx)(_.Z, {
          onChange: e => R([T, e]),
          color: C,
          suggestedColors: w,
          showEyeDropper: true,
          label: (0, r.jsx)(c.Text, {
            className: g.colorSwatchLabel,
            color: "text-default",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: m.intl.string(m.t["8elvy6"])
          })
        })
      }), v && null != b && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: g.resetButton,
        children: (0, r.jsx)(c.Button, {
          variant: "secondary",
          size: "sm",
          text: m.intl.string(m.t["L+GmoR"]),
          onClick: () => R([null, null])
        })
      })]
    })
  })
}