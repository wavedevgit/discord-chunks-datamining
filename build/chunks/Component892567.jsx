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
  Chunk24730 = require("./24730.js");
let y = [Chunk342905.C.CHERRY_BOMB, Chunk342905.C.CHICLE],
  O = Chunk473749.memo(function(e) {
    var t;
    let {
      userName: n,
      displayNameStyles: i,
      effectDisplayType: a = h.F.STATIC,
      inProfile: l = false,
      textClassName: O,
      loop: S = false,
      shouldWrap: I = false,
      boldFontOpacity: T = 1,
      shouldUnderlineOnHover: C = false
    } = e, A = (0, E.j)({
      displayNameStyles: i,
      inProfile: l
    }), {
      useReducedMotion: N
    } = (0, c.cj)([f.Z], () => ({
      useReducedMotion: f.Z.useReducedMotion
    })), {
      includeNonProfile: P
    } = p.fN.useExperiment({
      location: "useDisplayNameStylesFont"
    }), R = (0, m.Y)({
      location: "UserNameWithEffects"
    }), w = (0, d.dQu)(d.TVs.colors.BACKGROUND_BASE_LOW).hex(), D = null != (t = null == i ? true : i.effectId) ? t : s.m.SOLID, x = (0, d.qgQ)(n), L = (0, u.EJ)(x, D === s.m.TOON ? b.emoji : true), j = (0, _.Z)({
      displayNameStyles: R ? i : null,
      backgroundColor: w
    });
    if (!R || !l && !P || null == i) return n;
    let M = (0, g.K)(D, j, {
        shouldWrap: I,
        fontOpacity: y.includes(i.fontId) ? T : 1
      }),
      k = v(D);
    return (0, r.jsxs)("div", {
      className: o()(b.container, A, O, {
        [b.showEffect]: a !== h.F.PLAIN,
        [b.animated]: a === h.F.ANIMATED && !N,
        [b.loop]: S,
        [b.inProfile]: l
      }),
      style: M,
      children: [(0, r.jsx)("span", {
        "data-username-with-effects": x,
        className: o()(b.innerContainer, null == k ? true : k.effectClassName, {
          [b.underlineOnHover]: C
        }),
        children: L
      }), (null == k ? true : k.glowClassName) != null && (0, r.jsx)("span", {
        className: o()(b.glowContainer, b.innerContainer, k.glowClassName),
        "aria-hidden": true,
        children: x
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