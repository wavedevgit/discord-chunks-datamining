/** Chunk was on 67544 **/
/** chunk id: 190328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk120421 = require("./120421.js"),
  Chunk702319 = require("./702319.jsx"),
  Chunk144931 = require("./144931.jsx"),
  Chunk763283 = require("./763283.jsx"),
  Chunk944548 = require("./944548.jsx"),
  Chunk488701 = require("./488701.jsx"),
  Chunk303582 = require("./303582.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk560920 = require("./560920.js"),
  Chunk225893 = require("./225893.js");

function h(e) {
  let {
    name: t,
    description: n,
    pointsDescription: s,
    points: o,
    cost: f,
    iconSrc: m,
    currentPoints: h,
    onPurchase: x,
    itemId: v,
    upgradeId: O
  } = e, j = (0, a.e7)([i.Z], () => null != O ? i.Z.getNumPurchasesForItemUpgrade(v, O) : 0) + 1, N = "string" == typeof t ? t : g.intl.format(t, {
    numPurchasing: j
  }), P = "string" == typeof t ? t : g.intl.formatToPlainString(t, {
    numPurchasing: j
  });
  return (0, r.jsx)(d.Z, {
    text: (0, r.jsx)(p.Z, {
      name: N,
      description: n,
      pointsDescription: 0 !== o ? g.intl.format(s, {
        points: o,
        grassIconHook: c.Z
      }) : null
    }),
    borderColor: "green",
    "aria-label": P,
    children: e => {
      var t, n;
      return (0, r.jsxs)(l.Z, (t = function(e) {
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
      }({}, e), n = n = {
        onClick: x,
        disabled: h < f,
        className: b.upgrade,
        children: [(0, r.jsx)("img", {
          className: b.upgradeIcon,
          src: m,
          alt: ""
        }), (0, r.jsx)("img", {
          className: b.pointsIcon,
          src: y,
          alt: ""
        }), (0, r.jsx)(u.Z, {
          variant: "text-md/medium",
          color: "currentColor",
          children: f
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}

function x(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)(f.Z, {
    className: o()(t, b.shop),
    purchasePriority: m.h0,
    PurchasableComponent: h
  })
}