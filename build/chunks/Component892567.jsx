/** Chunk was on web.js **/
/** chunk id: 892567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk688619 = require("./688619.js"),
  o = require.n(Chunk688619),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk522942 = require("./522942.js"),
  Chunk442837 = require("./442837.js"),
  Chunk865672 = require("./865672.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk302221 = require("./302221.js"),
  Chunk594928 = require("./594928.js"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk760692 = require("./760692.js"),
  Chunk203872 = require("./203872.js"),
  Chunk7284 = require("./7284.js"),
  Chunk492333 = require("./492333.js");
let v = Chunk647438.memo(function(e) {
  var t;
  let {
    userName: n,
    displayNameStyles: a,
    effectDisplayType: s = g.F.STATIC,
    inProfile: v = false,
    textClassName: T,
    loop: S = false,
    shouldWrap: A = false
  } = e, C = (0, y.j)({
    displayNameStyles: a,
    inProfile: v
  }), {
    useReducedMotion: N,
    saturation: R
  } = (0, u.cj)([_.Z], () => ({
    useReducedMotion: _.Z.useReducedMotion,
    saturation: _.Z.desaturateUserColors ? _.Z.saturation : 1
  })), {
    includeNonProfile: P
  } = h.f.useExperiment({
    location: "useDisplayNameStylesFont"
  }), w = (0, m.Y)({
    location: "UserNameWithEffects"
  }), D = (0, f.dQu)(f.TVs.colors.BACKGROUND_BASE_LOW).hex(), x = (0, b.R)(null != (t = null == a ? true : a.effectId) ? t : c.m.SOLID), L = (0, f.qgQ)(n), j = (0, d.EJ)(L, (null == a ? true : a.effectId) === c.m.TOON ? O.emoji : true), M = i.useMemo(() => null != a && w ? a.colors.map(e => (0, p.wh)({
    foreground: o()(e),
    background: (null == a ? true : a.effectId) === c.m.TOON ? o()("#333") : o()(D),
    ratio: x.minContrastRatio,
    saturationFactor: R
  }).hex()) : [], [a, w, x.minContrastRatio, R, D]);
  if (!w || !v && !P || null == a) return n;
  let k = (0, E.K)(a.effectId, M, {
      shouldWrap: A
    }),
    U = I(a.effectId);
  return (0, r.jsxs)("div", {
    className: l()(O.container, C, T, {
      [O.showEffect]: s !== g.F.PLAIN,
      [O.animated]: s === g.F.ANIMATED && !N,
      [O.loop]: S,
      [O.inProfile]: v
    }),
    style: k,
    children: [(0, r.jsx)("span", {
      "data-username-with-effects": L,
      className: l()(O.innerContainer, null == U ? true : U.effectClassName),
      children: j
    }), (null == U ? true : U.glowClassName) != null && (0, r.jsx)("span", {
      className: l()(O.glowContainer, O.innerContainer, U.glowClassName),
      "aria-hidden": true,
      children: L
    })]
  })
});

function I(e) {
  switch (e) {
    case c.m.GRADIENT:
    case c.m.GLOW:
      return {
        effectClassName: O.gradient
      };
    case c.m.NEON:
      return {
        effectClassName: O.neon, glowClassName: O.neonGlow
      };
    case c.m.TOON:
      return {
        effectClassName: O.toon
      };
    case c.m.POP:
      return {
        effectClassName: O.pop
      };
    case c.m.SOLID:
    default:
      return {
        effectClassName: O.solid
      }
  }
}