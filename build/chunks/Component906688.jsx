/** Chunk was on web.js **/
/** chunk id: 906688, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk682174 = require("./682174.jsx"),
  Chunk927018 = require("./927018.js"),
  Chunk715438 = require("./715438.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let p = {
    trophy: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    locked: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    unlocked: Chunk827734.A.unsafe_rawColors.GREEN_330.css
  },
  _ = {
    trophy: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    locked: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    unlocked: Chunk827734.A.unsafe_rawColors.GREEN_330.css
  },
  h = .8,
  m = .4,
  g = 1;

function E(e) {
  var t;
  let {
    achievementId: n,
    unlocked: i,
    size: d = s._3J.SIZE_40
  } = e, E = (0, o.Ay)(), b = (0, c.vM)(n);
  if (null == b) return null;
  let y = (0, s.KjH)(d),
    {
      name: O,
      rarity: A
    } = b,
    {
      color: v
    } = (0, c.ag)(A),
    S = (0, a.Mw)(E) ? p : _,
    I = (y.size - y.offset - 2 * y.stroke) * h,
    T = y.size - y.stroke,
    C = {
      width: I * m,
      height: I * m
    },
    N = {
      width: C.width + g,
      height: C.height + g,
      right: y.stroke + g,
      bottom: y.stroke + g,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: u.kL,
    style: {
      width: T,
      height: T,
      padding: y.stroke
    },
    "aria-label": "".concat(null != (t = O()) ? t : ""),
    children: [(0, r.jsx)("div", {
      className: u.r5,
      children: (0, r.jsx)(s.OR, {
        size: "custom",
        color: i ? v : S.trophy,
        width: I,
        height: I
      })
    }), !i && (0, r.jsx)("div", {
      className: u.dq,
      style: N,
      children: (0, r.jsx)(s.XAi, f({
        size: "custom",
        color: S.locked
      }, C))
    }), i && A === c.md.LEGENDARY && (0, r.jsx)("div", {
      className: u.dq,
      style: N,
      children: (0, r.jsx)(l.A, f({
        className: u.ox
      }, C))
    })]
  })
}
E.Sizes = Chunk397927._3J