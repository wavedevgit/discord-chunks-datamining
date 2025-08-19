/** Chunk was on 49882 **/
/** chunk id: 674680, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk889901 = require("./889901.jsx"),
  Chunk955204 = require("./955204.js"),
  Chunk231338 = require("./231338.js"),
  Chunk395786 = require("./395786.js");

function p(e) {
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
let f = {
    trophy: Chunk231338.Il.PRIMARY_400,
    locked: Chunk231338.Il.PRIMARY_400,
    unlocked: Chunk231338.Il.GREEN_330
  },
  h = {
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
  let _ = (0, l.UCu)(g),
    {
      name: O,
      rarity: y
    } = b,
    {
      color: v
    } = (0, c.F7)(y),
    j = (0, i.wj)(m) ? f : h,
    C = (_.size - _.offset - 2 * _.stroke) * .8,
    E = _.size - _.stroke,
    x = {
      width: .4 * C,
      height: .4 * C
    },
    S = {
      width: x.width + 1,
      height: x.height + 1,
      right: _.stroke + 1,
      bottom: _.stroke + 1,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: d.container,
    style: {
      width: E,
      height: E,
      padding: _.stroke
    },
    "aria-label": "".concat(null != (t = O()) ? t : ""),
    children: [(0, r.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, r.jsx)(l.rm8, {
        size: "custom",
        color: u ? v : (0, a.Lq)(j.trophy),
        width: C,
        height: C
      })
    }), !u && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: S,
      children: (0, r.jsx)(l.mBM, p({
        size: "custom",
        color: (0, a.Lq)(j.locked)
      }, x))
    }), u && y === c.EP.LEGENDARY && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: S,
      children: (0, r.jsx)(s.Z, p({
        className: d.confettiIcon
      }, x))
    })]
  })
}
g.Sizes = Chunk481060.EFr