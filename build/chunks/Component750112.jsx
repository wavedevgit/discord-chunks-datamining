/** Chunk was on web.js **/
/** chunk id: 750112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
    }), w = (0, d.rdh)(d.LU0.colors.BACKGROUND_BASE_LOW).hex(), R = null != (t = null == i ? true : i.effectId) ? t : o.z.SOLID, P = (0, d.Oer)(n), D = (0, u.CR)(P, R === o.z.TOON ? E.Zg : true), x = (0, p.H)({
      displayNameStyles: N ? i : null,
      backgroundColor: w
    });
    if (!N || null == i) return n;
    let L = (0, m.P)(R, x, {
        shouldWrap: A,
        fontOpacity: y.includes(i.fontId) ? I : 1
      }),
      j = O(R);
    return (0, r.jsxs)("div", {
      className: s()(E.kL, T, b, {
        [E.rD]: a !== h.G.PLAIN,
        [E.CS]: a === h.G.ANIMATED && !C,
        [E.HW]: v,
        [E.$E]: l
      }),
      style: L,
      children: [(0, r.jsx)("span", {
        "data-username-with-effects": P,
        className: s()(E.WH, null == j ? true : j.effectClassName, {
          [E._W]: S
        }),
        children: D
      }), (null == j ? true : j.glowClassName) != null && (0, r.jsx)("span", {
        className: s()(E.l1, E.WH, j.glowClassName),
        "aria-hidden": true,
        children: P
      })]
    })
  });

function O(e) {
  switch (e) {
    case o.z.GRADIENT:
    case o.z.GLOW:
      return {
        effectClassName: E.D7
      };
    case o.z.NEON:
      return {
        effectClassName: E.lw, glowClassName: E._4
      };
    case o.z.TOON:
      return {
        effectClassName: E.lQ
      };
    case o.z.POP:
      return {
        effectClassName: E.uY
      };
    case o.z.SOLID:
    default:
      return {
        effectClassName: E.QJ
      }
  }
}