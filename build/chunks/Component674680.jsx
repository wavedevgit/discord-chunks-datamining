/** Chunk was on web.js **/
/** chunk id: 674680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk889901 = require("./889901.jsx"),
  Chunk955204 = require("./955204.js"),
  Chunk231338 = require("./231338.js"),
  Chunk395786 = require("./395786.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let p = {
    trophy: Chunk231338.Il.PRIMARY_400,
    locked: Chunk231338.Il.PRIMARY_400,
    unlocked: Chunk231338.Il.GREEN_330
  },
  h = {
    trophy: Chunk231338.Il.PRIMARY_400,
    locked: Chunk231338.Il.PRIMARY_400,
    unlocked: Chunk231338.Il.GREEN_330
  },
  m = .8,
  g = .4,
  E = 1;

function b(e) {
  var t;
  let {
    achievementId: n,
    unlocked: u,
    size: f = a.EFr.SIZE_40
  } = e, b = (0, o.ZP)(), y = (0, c.oX)(n);
  if (null == y) return null;
  let O = (0, a.UCu)(f),
    {
      name: v,
      rarity: I
    } = y,
    {
      color: T
    } = (0, c.F7)(I),
    S = (0, i.wj)(b) ? p : h,
    A = (O.size - O.offset - 2 * O.stroke) * m,
    C = O.size - O.stroke,
    N = {
      width: A * g,
      height: A * g
    },
    R = {
      width: N.width + E,
      height: N.height + E,
      right: O.stroke + E,
      bottom: O.stroke + E,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: d.container,
    style: {
      width: C,
      height: C,
      padding: O.stroke
    },
    "aria-label": "".concat(null != (t = v()) ? t : ""),
    children: [(0, r.jsx)("div", {
      className: d.trophyIconContainer,
      children: (0, r.jsx)(a.rm8, {
        size: "custom",
        color: u ? T : (0, s.Lq)(S.trophy),
        width: A,
        height: A
      })
    }), !u && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: R,
      children: (0, r.jsx)(a.mBM, _({
        size: "custom",
        color: (0, s.Lq)(S.locked)
      }, N))
    }), u && I === c.EP.LEGENDARY && (0, r.jsx)("div", {
      className: d.lockContainer,
      style: R,
      children: (0, r.jsx)(l.Z, _({
        className: d.confettiIcon
      }, N))
    })]
  })
}
b.Sizes = Chunk481060.EFr