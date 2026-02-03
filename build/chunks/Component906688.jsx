/** Chunk was on 44669 **/
/** chunk id: 906688, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let p = {
    trophy: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    locked: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    unlocked: Chunk827734.A.unsafe_rawColors.GREEN_330.css
  },
  h = {
    trophy: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    locked: Chunk827734.A.unsafe_rawColors.PRIMARY_400.css,
    unlocked: Chunk827734.A.unsafe_rawColors.GREEN_330.css
  };

function g(e) {
  var t;
  let {
    achievementId: n,
    unlocked: l,
    size: g = s._3J.SIZE_40
  } = e, f = (0, a.Ay)(), m = (0, c.vM)(n);
  if (null == m) return null;
  let b = (0, s.KjH)(g),
    {
      name: A,
      rarity: y
    } = m,
    {
      color: O
    } = (0, c.ag)(y),
    j = (0, i.Mw)(f) ? p : h,
    x = (b.size - b.offset - 2 * b.stroke) * .8,
    _ = b.size - b.stroke,
    v = {
      width: .4 * x,
      height: .4 * x
    },
    E = {
      width: v.width + 1,
      height: v.height + 1,
      right: b.stroke + 1,
      bottom: b.stroke + 1,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: u.kL,
    style: {
      width: _,
      height: _,
      padding: b.stroke
    },
    "aria-label": "".concat(null != (t = A()) ? t : ""),
    children: [(0, r.jsx)("div", {
      className: u.r5,
      children: (0, r.jsx)(s.OR, {
        size: "custom",
        color: l ? O : j.trophy,
        width: x,
        height: x
      })
    }), !l && (0, r.jsx)("div", {
      className: u.dq,
      style: E,
      children: (0, r.jsx)(s.XAi, d({
        size: "custom",
        color: j.locked
      }, v))
    }), l && y === c.md.LEGENDARY && (0, r.jsx)("div", {
      className: u.dq,
      style: E,
      children: (0, r.jsx)(o.A, d({
        className: u.ox
      }, v))
    })]
  })
}
g.Sizes = Chunk397927._3J