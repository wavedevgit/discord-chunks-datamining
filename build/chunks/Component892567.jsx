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
  }), L = (0, f.dQu)(f.TVs.colors.BACKGROUND_BASE_LOW).hex(), x = null != (t = null == o ? true : o.effectId) ? t : c.m.SOLID, M = (0, b.J)(), k = (0, f.qgQ)(n), j = (0, d.EJ)(k, x === c.m.TOON ? O.emoji : true), U = i.useMemo(() => null != o && D ? o.colors.map(e => {
    var t, n;
    let r = a()(e);
    return P && (r = r.desaturate(1 - R)), (0, p.aP)(r.hex(), x === c.m.TOON ? "#333" : L, null != (n = null == (t = M[x]) ? true : t.minContrastRatio) ? n : 3)
  }) : [], [o, x, D, P, R, L, M]);
  if (!D || !v && !w || null == o) return n;
  let G = (0, E.K)(x, U, {
      shouldWrap: A
    }),
    B = I(x);
  return (0, r.jsxs)("div", {
    className: l()(O.container, N, T, {
      [O.showEffect]: s !== g.F.PLAIN,
      [O.animated]: s === g.F.ANIMATED && !C,
      [O.loop]: S,
      [O.inProfile]: v
    }),
    style: G,
    children: [(0, r.jsx)("span", {
      "data-username-with-effects": k,
      className: l()(O.innerContainer, null == B ? true : B.effectClassName),
      children: j
    }), (null == B ? true : B.glowClassName) != null && (0, r.jsx)("span", {
      className: l()(O.glowContainer, O.innerContainer, B.glowClassName),
      "aria-hidden": true,
      children: k
    })]
  })
});

function I(e) {
  switch (e) {
    case c.m.GRADIENT:
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
      return {
        effectClassName: O.solid
      };
    default:
      return
  }
}