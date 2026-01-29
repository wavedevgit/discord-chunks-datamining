/** Chunk was on 32502 **/
/** chunk id: 906688, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
let h = {
    trophy: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    locked: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    unlocked: Chunk827734.A.unsafe_rawColors.GREEN_330.css
  },
  g = {
    trophy: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    locked: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    unlocked: Chunk827734.A.unsafe_rawColors.GREEN_330.css
  };

function x(e) {
  var t;
  let {
    achievementId: n,
    unlocked: l,
    size: x = r._3J.SIZE_40
  } = e, p = (0, a.Ay)(), m = (0, c.vM)(n);
  if (null == m) return null;
  let A = (0, r.KjH)(x),
    {
      name: b,
      rarity: j
    } = m,
    {
      color: O
    } = (0, c.ag)(j),
    E = (0, s.Mw)(p) ? h : g,
    S = (A.size - A.offset - 2 * A.stroke) * .8,
    f = A.size - A.stroke,
    C = {
      width: .4 * S,
      height: .4 * S
    },
    v = {
      width: C.width + 1,
      height: C.height + 1,
      right: A.stroke + 1,
      bottom: A.stroke + 1,
      padding: 0
    };
  return (0, i.jsxs)("div", {
    className: d.kL,
    style: {
      width: f,
      height: f,
      padding: A.stroke
    },
    "aria-label": "".concat(null != (t = b()) ? t : ""),
    children: [(0, i.jsx)("div", {
      className: d.r5,
      children: (0, i.jsx)(r.OR, {
        size: "custom",
        color: l ? O : E.trophy,
        width: S,
        height: S
      })
    }), !l && (0, i.jsx)("div", {
      className: d.dq,
      style: v,
      children: (0, i.jsx)(r.XAi, u({
        size: "custom",
        color: E.locked
      }, C))
    }), l && j === c.md.LEGENDARY && (0, i.jsx)("div", {
      className: d.dq,
      style: v,
      children: (0, i.jsx)(o.A, u({
        className: d.ox
      }, C))
    })]
  })
}
x.Sizes = Chunk397927._3J