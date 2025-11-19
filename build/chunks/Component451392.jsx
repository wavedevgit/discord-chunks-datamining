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
  Chunk190941 = require("./190941.js");

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
    forcedDivider: I
  } = e, T = (0, d.ZP)(t.id, b), {
    primaryColor: S,
    secondaryColor: A
  } = (0, f.Z)({
    user: t,
    displayProfile: T,
    pendingThemeColors: i,
    isPreview: true
  }), C = _.ZP.canUsePremiumProfileCustomization(t), N = null != n ? n : t.getAvatarURL(b, 80), R = (0, c.dQu)(l.Z.unsafe_rawColors.PRIMARY_530).hex(), P = (0, u.Cf)(N, R, false);
  if (null == S || null == A) return null;
  let D = e => {
    o(s()(e, null == T ? true : T.themeColors) ? true : e)
  };
  return (0, r.jsx)(h.Z, {
    title: m.intl.string(m.t.DMeO2X),
    disabled: !C && !E,
    className: a()(g.__invalid_profileThemesSection, y),
    showPremiumIcon: O,
    forcedDivider: I,
    children: (0, r.jsxs)("div", {
      className: g.sectionContainer,
      children: [(0, r.jsx)("div", {
        className: g.sparkleContainer,
        children: (0, r.jsx)(p.Z, {
          onChange: e => D([e, A]),
          color: S,
          suggestedColors: P,
          showEyeDropper: true,
          label: (0, r.jsx)(c.Text, {
            className: g.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: m.intl.string(m.t.C3KTQk)
          })
        })
      }), (0, r.jsx)("div", {
        className: g.sparkleContainer,
        children: (0, r.jsx)(p.Z, {
          onChange: e => D([S, e]),
          color: A,
          suggestedColors: P,
          showEyeDropper: true,
          label: (0, r.jsx)(c.Text, {
            className: g.colorSwatchLabel,
            color: "header-secondary",
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
          onClick: () => D([null, null])
        })
      })]
    })
  })
}