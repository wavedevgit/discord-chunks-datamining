/** Chunk was on 34779 **/
/** chunk id: 674680, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk889901 = require("./889901.jsx"),
  Chunk955204 = require("./955204.js"),
  Chunk231338 = require("./231338.js"),
  Chunk835115 = require("./835115.js");

function h(e) {
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
    trophy: Chunk231338.Il.PRIMARY_400,
    locked: Chunk231338.Il.PRIMARY_400,
    unlocked: Chunk231338.Il.GREEN_330
  },
  f = {
    trophy: Chunk231338.Il.PRIMARY_400,
    locked: Chunk231338.Il.PRIMARY_400,
    unlocked: Chunk231338.Il.GREEN_330
  };

function g(e) {
  var t;
  let {
    achievementId: n,
    unlocked: u,
    size: g = l.EFr.SIZE_40
  } = e, m = (0, o.ZP)(), b = (0, c.oX)(n);
  if (null == b) return null;
  let O = (0, l.UCu)(g),
    {
      name: _,
      rarity: y
    } = b,
    {
      color: C
    } = (0, c.F7)(y),
    v = (0, i.wj)(m) ? p : f,
    j = (O.size - O.offset - 2 * O.stroke) * .8,
    E = O.size - O.stroke,
    S = {
      width: .4 * j,
      height: .4 * j
    },
    x = {
      width: S.width + 1,
      height: S.height + 1,
      right: O.stroke + 1,
      bottom: O.stroke + 1,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: d.container,
    style: {
      width: E,
      height: E,
      padding: O.stroke
    },
    "aria-label": "".concat(null != (t = _()) ? t : ""),
    children: [(0, r.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, r.jsx)(l.rm8, {
        size: "custom",
        color: u ? C : (0, s.Lq)(v.trophy),
        width: j,
        height: j
      })
    }), !u && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: x,
      children: (0, r.jsx)(l.mBM, h({
        size: "custom",
        color: (0, s.Lq)(v.locked)
      }, S))
    }), u && y === c.EP.LEGENDARY && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: x,
      children: (0, r.jsx)(a.Z, h({
        className: d.confettiIcon
      }, S))
    })]
  })
}
g.Sizes = Chunk481060.EFr