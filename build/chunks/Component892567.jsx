/** Chunk was on web.js **/
/** chunk id: 892567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk522942 = require("./522942.js"),
  Chunk342905 = require("./342905.js"),
  Chunk442837 = require("./442837.js"),
  Chunk865672 = require("./865672.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk594928 = require("./594928.js"),
  Chunk504453 = require("./504453.js"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk760692 = require("./760692.js"),
  Chunk7284 = require("./7284.js"),
  Chunk492333 = require("./492333.js");
let y = [Chunk342905.C.CHERRY_BOMB, Chunk342905.C.CHICLE],
  O = Chunk473749.memo(function(e) {
    var t;
    let {
      userName: n,
      displayNameStyles: i,
      effectDisplayType: a = h.F.STATIC,
      inProfile: O = false,
      textClassName: S,
      loop: I = false,
      shouldWrap: T = false,
      boldFontOpacity: A = 1,
      shouldUnderlineOnHover: C = false
    } = e, N = (0, E.j)({
      displayNameStyles: i,
      inProfile: O
    }), {
      useReducedMotion: P
    } = (0, c.cj)([f.Z], () => ({
      useReducedMotion: f.Z.useReducedMotion
    })), {
      includeNonProfile: R
    } = p.fN.useExperiment({
      location: "useDisplayNameStylesFont"
    }), w = (0, m.Y)({
      location: "UserNameWithEffects"
    }), D = (0, d.dQu)(d.TVs.colors.BACKGROUND_BASE_LOW).hex(), x = null != (t = null == i ? true : i.effectId) ? t : s.m.SOLID, L = (0, d.qgQ)(n), j = (0, u.EJ)(L, x === s.m.TOON ? b.emoji : true), M = (0, _.Z)({
      displayNameStyles: w ? i : null,
      backgroundColor: D
    });
    if (!w || !O && !R || null == i) return n;
    let k = (0, g.K)(x, M, {
        shouldWrap: T,
        fontOpacity: y.includes(i.fontId) ? A : 1
      }),
      U = v(x);
    return (0, r.jsxs)("div", {
      className: o()(b.container, N, S, {
        [b.showEffect]: a !== h.F.PLAIN,
        [b.animated]: a === h.F.ANIMATED && !P,
        [b.loop]: I,
        [b.inProfile]: O
      }),
      style: k,
      children: [(0, r.jsx)("span", {
        "data-username-with-effects": L,
        className: o()(b.innerContainer, null == U ? true : U.effectClassName, {
          [b.underlineOnHover]: C,
          [b.chicle]: i.fontId === l.C.CHICLE
        }),
        children: j
      }), (null == U ? true : U.glowClassName) != null && (0, r.jsx)("span", {
        className: o()(b.glowContainer, b.innerContainer, U.glowClassName, {
          [b.chicle]: i.fontId === l.C.CHICLE
        }),
        "aria-hidden": true,
        children: L
      })]
    })
  });

function v(e) {
  switch (e) {
    case s.m.GRADIENT:
    case s.m.GLOW:
      return {
        effectClassName: b.gradient
      };
    case s.m.NEON:
      return {
        effectClassName: b.neon, glowClassName: b.neonGlow
      };
    case s.m.TOON:
      return {
        effectClassName: b.toon
      };
    case s.m.POP:
      return {
        effectClassName: b.pop
      };
    case s.m.SOLID:
    default:
      return {
        effectClassName: b.solid
      }
  }
}