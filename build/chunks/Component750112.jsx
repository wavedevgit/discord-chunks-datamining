/** Chunk was on web.js **/
/** chunk id: 750112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk508425 = require("./508425.js"),
  Chunk559949 = require("./559949.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36075 = require("./36075.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk816395 = require("./816395.js"),
  Chunk824994 = require("./824994.js"),
  Chunk922301 = require("./922301.js"),
  Chunk566492 = require("./566492.js"),
  Chunk73392 = require("./73392.js"),
  Chunk564515 = require("./564515.js");
let y = [Chunk559949.x.CHERRY_BOMB, Chunk559949.x.CHICLE],
  b = Chunk64700.memo(function(e) {
    var t;
    let {
      userName: n,
      displayNameStyles: i,
      effectDisplayType: a = h.G.STATIC,
      inProfile: l = false,
      textClassName: b,
      loop: v = false,
      shouldWrap: A = false,
      boldFontOpacity: I = 1,
      shouldUnderlineOnHover: S = false
    } = e, T = (0, g.a)({
      displayNameStyles: i
    }), {
      useReducedMotion: C
    } = (0, c.cf)([f.A], () => ({
      useReducedMotion: f.A.useReducedMotion
    })), N = (0, _.W)({
      location: "UserNameWithEffects"
    }), w = (0, d.rdh)(d.LU0.colors.BACKGROUND_BASE_LOW).hex(), R = null != (t = null == i ? true : i.effectId) ? t : s.z.SOLID, P = (0, d.Oer)(n), D = (0, u.CR)(P, R === s.z.TOON ? E.Zg : true), L = (0, p.H)({
      displayNameStyles: N ? i : null,
      backgroundColor: w
    });
    if (!N || null == i) return n;
    let x = (0, m.P)(R, L, {
        shouldWrap: A,
        fontOpacity: y.includes(i.fontId) ? I : 1
      }),
      M = O(R);
    return (0, r.jsxs)("div", {
      className: o()(E.kL, T, b, {
        [E.rD]: a !== h.G.PLAIN,
        [E.CS]: a === h.G.ANIMATED && !C,
        [E.HW]: v,
        [E.$E]: l
      }),
      style: x,
      children: [(0, r.jsx)("span", {
        "data-username-with-effects": P,
        className: o()(E.WH, null == M ? true : M.effectClassName, {
          [E._W]: S
        }),
        children: D
      }), (null == M ? true : M.glowClassName) != null && (0, r.jsx)("span", {
        className: o()(E.l1, E.WH, M.glowClassName),
        "aria-hidden": true,
        children: P
      })]
    })
  });

function O(e) {
  switch (e) {
    case s.z.GRADIENT:
    case s.z.GLOW:
      return {
        effectClassName: E.D7
      };
    case s.z.NEON:
      return {
        effectClassName: E.lw, glowClassName: E._4
      };
    case s.z.TOON:
      return {
        effectClassName: E.lQ
      };
    case s.z.POP:
      return {
        effectClassName: E.uY
      };
    case s.z.SOLID:
    default:
      return {
        effectClassName: E.QJ
      }
  }
}