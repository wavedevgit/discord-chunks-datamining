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
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk760692 = require("./760692.js"),
  Chunk203872 = require("./203872.js"),
  Chunk7284 = require("./7284.js"),
  Chunk492333 = require("./492333.js");
let I = [Chunk342905.C.CHERRY_BOMB, Chunk342905.C.CHICLE],
  T = Chunk647438.memo(function(e) {
    var t;
    let {
      userName: n,
      displayNameStyles: a,
      effectDisplayType: s = E.F.STATIC,
      inProfile: u = false,
      textClassName: T,
      loop: A = false,
      shouldWrap: C = false,
      boldFontOpacity: N = 1,
      shouldUnderlineOnHover: R = false
    } = e, P = (0, O.j)({
      displayNameStyles: a,
      inProfile: u
    }), {
      useReducedMotion: w,
      saturation: D
    } = (0, d.cj)([p.Z], () => ({
      useReducedMotion: p.Z.useReducedMotion,
      saturation: p.Z.desaturateUserColors ? p.Z.saturation : 1
    })), {
      includeNonProfile: x
    } = m.f.useExperiment({
      location: "useDisplayNameStylesFont"
    }), L = (0, g.Y)({
      location: "UserNameWithEffects"
    }), j = (0, _.dQu)(_.TVs.colors.BACKGROUND_BASE_LOW).hex(), M = (0, y.R)(null != (t = null == a ? true : a.effectId) ? t : c.m.SOLID), k = (0, _.qgQ)(n), U = (0, f.EJ)(k, (null == a ? true : a.effectId) === c.m.TOON ? v.emoji : true), G = i.useMemo(() => null != a && L ? a.colors.map(e => (0, h.wh)({
      foreground: o()(e),
      background: (null == a ? true : a.effectId) === c.m.TOON ? o()("#333") : o()(j),
      ratio: M.minContrastRatio,
      saturationFactor: D
    }).hex()) : [], [a, L, M.minContrastRatio, D, j]);
    if (!L || !u && !x || null == a) return n;
    let B = (0, b.K)(a.effectId, G, {
        shouldWrap: C,
        fontOpacity: I.includes(a.fontId) ? N : 1
      }),
      Z = S(a.effectId);
    return (0, r.jsxs)("div", {
      className: l()(v.container, P, T, {
        [v.showEffect]: s !== E.F.PLAIN,
        [v.animated]: s === E.F.ANIMATED && !w,
        [v.loop]: A,
        [v.inProfile]: u
      }),
      style: B,
      children: [(0, r.jsx)("span", {
        "data-username-with-effects": k,
        className: l()(v.innerContainer, null == Z ? true : Z.effectClassName, {
          [v.underlineOnHover]: R
        }),
        children: U
      }), (null == Z ? true : Z.glowClassName) != null && (0, r.jsx)("span", {
        className: l()(v.glowContainer, v.innerContainer, Z.glowClassName),
        "aria-hidden": true,
        children: k
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