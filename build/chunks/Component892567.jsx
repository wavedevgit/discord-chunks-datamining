/** Chunk was on web.js **/
/** chunk id: 892567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk688619 = require("./688619.js"),
  a = require.n(Chunk688619),
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
  Chunk295719 = require("./295719.js");
let v = Chunk73800.memo(function(e) {
  var t;
  let {
    userName: n,
    displayNameStyles: o,
    effectDisplayType: s = g.F.STATIC,
    inProfile: v = false,
    textClassName: T,
    loop: S = false,
    shouldWrap: A = false
  } = e, N = (0, y.j)({
    displayNameStyles: o,
    inProfile: v
  }), {
    useReducedMotion: C,
    saturation: R,
    desaturateUserColors: P
  } = (0, u.cj)([_.Z], () => ({
    useReducedMotion: _.Z.useReducedMotion,
    saturation: _.Z.saturation,
    desaturateUserColors: _.Z.desaturateUserColors
  })), {
    includeNonProfile: w
  } = h.f.useExperiment({
    location: "useDisplayNameStylesFont"
  }), D = (0, m.Y)({
    location: "UserNameWithEffects"
  }), L = (0, f.dQu)(f.TVs.colors.BACKGROUND_BASE_LOW).hex(), x = (0, b.R)(null != (t = null == o ? true : o.effectId) ? t : c.m.SOLID), M = (0, f.qgQ)(n), j = (0, d.EJ)(M, (null == o ? true : o.effectId) === c.m.TOON ? O.emoji : true), k = i.useMemo(() => null != o && D ? o.colors.map(e => {
    let t = a()(e);
    return P && (t = t.desaturate(1 - R)), (0, p.aP)(t.hex(), (null == o ? true : o.effectId) === c.m.TOON ? "#333" : L, x.minContrastRatio)
  }) : [], [o, D, P, R, L, x]);
  if (!D || !v && !w || null == o) return n;
  let U = (0, E.K)(o.effectId, k, {
      shouldWrap: A
    }),
    G = I(o.effectId);
  return (0, r.jsxs)("div", {
    className: l()(O.container, N, T, {
      [O.showEffect]: s !== g.F.PLAIN,
      [O.animated]: s === g.F.ANIMATED && !C,
      [O.loop]: S,
      [O.inProfile]: v
    }),
    style: U,
    children: [(0, r.jsx)("span", {
      "data-username-with-effects": M,
      className: l()(O.innerContainer, null == G ? true : G.effectClassName),
      children: j
    }), (null == G ? true : G.glowClassName) != null && (0, r.jsx)("span", {
      className: l()(O.glowContainer, O.innerContainer, G.glowClassName),
      "aria-hidden": true,
      children: M
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