/** Chunk was on web.js **/
/** chunk id: 892567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk688619 = require("./688619.js"),
  o = require.n(Chunk688619),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk522942 = require("./522942.js"),
  Chunk342905 = require("./342905.js"),
  Chunk442837 = require("./442837.js"),
  Chunk865672 = require("./865672.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk302221 = require("./302221.js"),
  Chunk594928 = require("./594928.js"),
  Chunk489511 = require("./489511.js"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk760692 = require("./760692.js"),
  Chunk7284 = require("./7284.js"),
  Chunk492333 = require("./492333.js");
let I = [Chunk342905.C.CHERRY_BOMB, Chunk342905.C.CHICLE],
  T = Chunk647438.memo(function(e) {
    var t;
    let {
      userName: n,
      displayNameStyles: a,
      effectDisplayType: s = b.F.STATIC,
      inProfile: T = false,
      textClassName: A,
      loop: C = false,
      shouldWrap: N = false,
      boldFontOpacity: R = 1,
      shouldUnderlineOnHover: P = false
    } = e, w = (0, O.j)({
      displayNameStyles: a,
      inProfile: T
    }), {
      useReducedMotion: D,
      saturation: x
    } = (0, d.cj)([p.Z], () => ({
      useReducedMotion: p.Z.useReducedMotion,
      saturation: p.Z.desaturateUserColors ? p.Z.saturation : 1
    })), {
      includeNonProfile: L
    } = m.fN.useExperiment({
      location: "useDisplayNameStylesFont"
    }), M = (0, E.Y)({
      location: "UserNameWithEffects"
    }), k = (0, _.dQu)(_.TVs.colors.BACKGROUND_BASE_LOW).hex(), j = null != (t = null == a ? true : a.effectId) ? t : c.m.SOLID, U = (0, g.R)(j), G = (0, _.qgQ)(n), B = (0, f.EJ)(G, j === c.m.TOON ? v.emoji : true), Z = i.useMemo(() => null != a && M ? a.colors.map(e => (0, h.wh)({
      foreground: o()(e),
      background: j === c.m.TOON ? o()("#333") : o()(k),
      ratio: U.minContrastRatio,
      saturationFactor: x
    }).hex()) : [], [a, M, j, U.minContrastRatio, x, k]);
    if (!M || !T && !L || null == a) return n;
    let F = (0, y.K)(j, Z, {
        shouldWrap: N,
        fontOpacity: I.includes(a.fontId) ? R : 1
      }),
      V = S(j);
    return (0, r.jsxs)("div", {
      className: l()(v.container, w, A, {
        [v.showEffect]: s !== b.F.PLAIN,
        [v.animated]: s === b.F.ANIMATED && !D,
        [v.loop]: C,
        [v.inProfile]: T
      }),
      style: F,
      children: [(0, r.jsx)("span", {
        "data-username-with-effects": G,
        className: l()(v.innerContainer, null == V ? true : V.effectClassName, {
          [v.underlineOnHover]: P,
          [v.chicle]: a.fontId === u.C.CHICLE
        }),
        children: B
      }), (null == V ? true : V.glowClassName) != null && (0, r.jsx)("span", {
        className: l()(v.glowContainer, v.innerContainer, V.glowClassName, {
          [v.chicle]: a.fontId === u.C.CHICLE
        }),
        "aria-hidden": true,
        children: G
      })]
    })
  });

function S(e) {
  switch (e) {
    case c.m.GRADIENT:
    case c.m.GLOW:
      return {
        effectClassName: v.gradient
      };
    case c.m.NEON:
      return {
        effectClassName: v.neon, glowClassName: v.neonGlow
      };
    case c.m.TOON:
      return {
        effectClassName: v.toon
      };
    case c.m.POP:
      return {
        effectClassName: v.pop
      };
    case c.m.SOLID:
    default:
      return {
        effectClassName: v.solid
      }
  }
}