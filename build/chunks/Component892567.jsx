/** Chunk was on web.js **/
/** chunk id: 892567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  Chunk504453 = require("./504453.js"),
  Chunk181430 = require("./181430.js"),
  Chunk821795 = require("./821795.js"),
  Chunk760692 = require("./760692.js"),
  Chunk7284 = require("./7284.js"),
  Chunk24730 = require("./24730.js");
let b = [Chunk342905.C.CHERRY_BOMB, Chunk342905.C.CHICLE],
  y = Chunk473749.memo(function(e) {
    var t;
    let {
      userName: n,
      displayNameStyles: i,
      effectDisplayType: a = m.F.STATIC,
      inProfile: l = false,
      textClassName: y,
      loop: v = false,
      shouldWrap: S = false,
      boldFontOpacity: I = 1,
      shouldUnderlineOnHover: T = false
    } = e, C = (0, g.j)({
      displayNameStyles: i
    }), {
      useReducedMotion: A
    } = (0, c.cj)([f.Z], () => ({
      useReducedMotion: f.Z.useReducedMotion
    })), N = (0, _.Y)({
      location: "UserNameWithEffects"
    }), P = (0, d.dQu)(d.TVs.colors.BACKGROUND_BASE_LOW).hex(), R = null != (t = null == i ? true : i.effectId) ? t : s.m.SOLID, w = (0, d.qgQ)(n), D = (0, u.EJ)(w, R === s.m.TOON ? E.emoji : true), x = (0, p.Z)({
      displayNameStyles: N ? i : null,
      backgroundColor: P
    });
    if (!N || null == i) return n;
    let L = (0, h.K)(R, x, {
        shouldWrap: S,
        fontOpacity: b.includes(i.fontId) ? I : 1
      }),
      j = O(R);
    return (0, r.jsxs)("div", {
      className: o()(E.container, C, y, {
        [E.showEffect]: a !== m.F.PLAIN,
        [E.animated]: a === m.F.ANIMATED && !A,
        [E.loop]: v,
        [E.inProfile]: l
      }),
      style: L,
      children: [(0, r.jsx)("span", {
        "data-username-with-effects": w,
        className: o()(E.innerContainer, null == j ? true : j.effectClassName, {
          [E.underlineOnHover]: T
        }),
        children: D
      }), (null == j ? true : j.glowClassName) != null && (0, r.jsx)("span", {
        className: o()(E.glowContainer, E.innerContainer, j.glowClassName),
        "aria-hidden": true,
        children: w
      })]
    })
  });

function O(e) {
  switch (e) {
    case s.m.GRADIENT:
    case s.m.GLOW:
      return {
        effectClassName: E.gradient
      };
    case s.m.NEON:
      return {
        effectClassName: E.neon, glowClassName: E.neonGlow
      };
    case s.m.TOON:
      return {
        effectClassName: E.toon
      };
    case s.m.POP:
      return {
        effectClassName: E.pop
      };
    case s.m.SOLID:
    default:
      return {
        effectClassName: E.solid
      }
  }
}