/** Chunk was on web.js **/
/** chunk id: 674680, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk889901 = require("./889901.jsx"),
  Chunk955204 = require("./955204.js"),
  Chunk395786 = require("./395786.js");

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
    trophy: Chunk692547.Z.unsafe_rawColors.PRIMARY_400.css,
    locked: Chunk692547.Z.unsafe_rawColors.PRIMARY_400.css,
    unlocked: Chunk692547.Z.unsafe_rawColors.GREEN_330.css
  },
  _ = {
    trophy: Chunk692547.Z.unsafe_rawColors.PRIMARY_400.css,
    locked: Chunk692547.Z.unsafe_rawColors.PRIMARY_400.css,
    unlocked: Chunk692547.Z.unsafe_rawColors.GREEN_330.css
  },
  m = .8,
  h = .4,
  g = 1;

function E(e) {
  var t;
  let {
    achievementId: n,
    unlocked: i,
    size: d = o.EFr.SIZE_40
  } = e, E = (0, s.ZP)(), b = (0, c.oX)(n);
  if (null == b) return null;
  let y = (0, o.UCu)(d),
    {
      name: O,
      rarity: v
    } = b,
    {
      color: S
    } = (0, c.F7)(v),
    I = (0, a.wj)(E) ? p : _,
    T = (y.size - y.offset - 2 * y.stroke) * m,
    C = y.size - y.stroke,
    A = {
      width: T * h,
      height: T * h
    },
    N = {
      width: A.width + g,
      height: A.height + g,
      right: y.stroke + g,
      bottom: y.stroke + g,
      padding: 0
    };
  return (0, r.jsxs)("div", {
    className: u.container,
    style: {
      width: C,
      height: C,
      padding: y.stroke
    },
    "aria-label": "".concat(null != (t = O()) ? t : ""),
    children: [(0, r.jsx)("div", {
      className: u.trophyIconContainer,
      children: (0, r.jsx)(o.rm8, {
        size: "custom",
        color: i ? S : I.trophy,
        width: T,
        height: T
      })
    }), !i && (0, r.jsx)("div", {
      className: u.lockContainer,
      style: N,
      children: (0, r.jsx)(o.mBM, f({
        size: "custom",
        color: I.locked
      }, A))
    }), i && v === c.EP.LEGENDARY && (0, r.jsx)("div", {
      className: u.lockContainer,
      style: N,
      children: (0, r.jsx)(l.Z, f({
        className: u.confettiIcon
      }, A))
    })]
  })
}
E.Sizes = Chunk481060.EFr