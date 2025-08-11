/** Chunk was on 67544 **/
/** chunk id: 862405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk668826 = require("./668826.js"),
  Chunk120421 = require("./120421.js"),
  Chunk702319 = require("./702319.jsx"),
  Chunk284539 = require("./284539.js"),
  Chunk67411 = require("./67411.js"),
  Chunk144931 = require("./144931.jsx"),
  Chunk3072 = require("./3072.js"),
  Chunk763283 = require("./763283.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk182643 = require("./182643.js");
let Chunk450862 = require("./450862.js"),
  j = [Chunk477839.FK.LEVEL_1, Chunk477839.FK.LEVEL_2, Chunk477839.FK.LEVEL_3, Chunk477839.FK.LEVEL_4];

function N(e) {
  return 0 === e ? 0 : Math.floor(-(1e3 * (1 - Math.pow(1.25, e)) / .25))
}

function P(e) {
  let {
    fill: t = false,
    stroke: n = false
  } = e;
  return (0, r.jsx)("path", {
    stroke: n ? "#fff" : true,
    fill: t ? "#fff" : true,
    strokeLinecap: "round",
    strokeWidth: "3",
    d: "M30.646 2.801c-6.131-.346-12.605-1.232-18.75-.55-.78.087-1.366.094-2.084.434-.68.323-2.099.535-2.488 1.158C6.3 5.48 4.381 6.596 3.157 8.125 2.592 8.833 2 12.716 2 13.74c0 2.983.639 2.47 3.24 3.24 8.881 2.632 18.235.926 27.373.926 7.838 0 15.634.27 23.438.521 25.652.828 51.238 2.084 76.968 2.084 13.726 0 27.377.52 41.087.52h41.436c9.814 0 19.365-1.041 29.166-1.041 10.655 0 21.458-.521 32.176-.521 19.826 0 39.571.626 59.317 2.199 5.641.45 13.403 1.38 19.04-.232 3.723-1.063 8.121-1.111 11.342-3.124.519-.325 3.618-3.579 3.646-4.052.151-2.564-.235-3.14-1.562-5.092-1.862-2.738-3.122-4.467-6.25-5.585-3.823-1.365-8.212-.78-12.24-.78h-15.625c-14.383 0-28.609 1.04-42.969 1.04h-48.958c-9.341 0-18.557-1.04-27.865-1.04-5.905 0-11.915.52-17.708.52-8.783 0-17.725.52-26.591.52-8.649 0-17.122-1.562-25.724-1.562-16.453 0-32.844.521-49.247.521H32.208"
  })
}

function _(e) {
  let {
    percent: t
  } = e, n = (0, c.Dt)(), s = (0, i.q_F)({
    width: t / 100 * 372
  });
  return (0, r.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "372",
    height: "24",
    fill: "none",
    children: [(0, r.jsx)("defs", {
      children: (0, r.jsx)("mask", {
        id: n,
        children: (0, r.jsx)(P, {
          fill: true
        })
      })
    }), (0, r.jsx)(o.animated.rect, {
      style: function(e) {
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
      }({
        mask: "url(#".concat(n, ")")
      }, s),
      fill: "#BB45FF",
      x: "0",
      y: "0",
      height: "24"
    }), (0, r.jsx)(P, {
      stroke: true
    })]
  })
}

function C() {
  var e, t;
  let n = (0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.lifetimePoints),
    [o, i] = (0, Chunk284539.Z)(Chunk477839.yN.LEVELING),
    c = null != (e = null == Chunk126663 ? true : Chunk126663.lastLevelClaimed) ? module : 0,
    P = null != (t = null == Chunk126663 ? true : Chunk126663.pointsWhenUnlocked) ? exports : require,
    C = require - P,
    Z = function e(t, n) {
      return t >= N(n) ? e(t, n + 1) : n
    }(C, 1),
    w = N(Z - 1),
    E = N(Z),
    S = C - w,
    I = E - w,
    k = Chunk313201 + 1,
    M = Math.floor(.1 * (N(k) - N(k - 1))),
    R = (0, Chunk3072.eR)(Chunk450862);
  (0, Chunk67411.Z)(j, Z);
  let A = (0, Chunk73800.useCallback)(() => {
    Chunk481060({
      lastLevelClaimed: k
    }), (0, Chunk668826.KH)(Chunk477839.yN.LEVELING, M), R()
  }, [k, M, R, Chunk481060]);
  return (0, Chunk73800.useEffect)(() => {
    (null == Chunk126663 ? true : Chunk126663.pointsWhenUnlocked) == null && Chunk481060({
      pointsWhenUnlocked: require
    })
  }, []), (0, Chunk255367.jsxs)("div", {
    className: Chunk182643.leveling,
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk182643.levelInfo,
      children: [(0, Chunk255367.jsx)(Chunk763283.Z, {
        variant: "text-lg/bold",
        color: "clicker-game-brand",
        children: Chunk388032.intl.format(Chunk603571.default.IG6UGB, {
          level: Z
        })
      }), (0, Chunk255367.jsx)(Chunk763283.Z, {
        className: Chunk182643.experience,
        variant: "text-sm/medium",
        color: "clicker-game-brand",
        children: Chunk388032.intl.format(Chunk603571.default.Rfy3Cg, {
          currentExperience: Math.floor(S),
          requiredExperience: I,
          experienceHook: (e, t) => (0, r.jsx)("span", {
            className: v.monospace,
            children: e
          }, t),
          grassIconHook: (e, t, n) => (0, d.Z)(e, t, n, v.experienceIcon)
        })
      })]
    }), (0, Chunk255367.jsx)(_, {
      percent: S / I * 100
    }), k < Z ? (0, Chunk255367.jsx)(Chunk144931.Z, {
      className: Chunk182643.claimButton,
      onClick: A,
      children: Chunk388032.intl.format(Chunk603571.default.IUF6np, {
        points: M,
        grassIconHook: Chunk702319.Z
      })
    }) : null]
  })
}