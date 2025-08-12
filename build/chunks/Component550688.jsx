/** Chunk was on 67544 **/
/** chunk id: 550688, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk702319 = require("./702319.jsx"),
  Chunk144931 = require("./144931.jsx"),
  Chunk763283 = require("./763283.jsx"),
  Chunk944548 = require("./944548.jsx"),
  Chunk488701 = require("./488701.jsx"),
  Chunk303582 = require("./303582.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk661352 = require("./661352.js"),
  Chunk225893 = require("./225893.js");

function b(e) {
  let {
    name: t,
    description: n,
    pointsDescription: s,
    points: o,
    cost: u,
    iconSrc: f,
    currentPoints: b,
    onPurchase: y
  } = e, h = "string" == typeof t ? t : p.intl.format(t, {
    numPurchasing: 0
  }), x = "string" == typeof t ? t : p.intl.formatToPlainString(t, {
    numPurchasing: 0
  });
  return (0, r.jsx)(l.Z, {
    borderColor: "green",
    text: (0, r.jsx)(d.Z, {
      name: h,
      description: n,
      pointsDescription: 0 !== o ? p.intl.format(s, {
        points: o,
        grassIconHook: a.Z
      }) : null
    }),
    "aria-label": x,
    children: e => {
      var t, n;
      return (0, r.jsxs)(i.Z, (t = function(e) {
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
        onClick: y,
        disabled: b < u,
        className: m.item,
        children: [(0, r.jsx)("img", {
          className: m.itemIcon,
          src: f,
          alt: ""
        }), (0, r.jsxs)("div", {
          className: m.pointsInfo,
          children: [(0, r.jsx)("img", {
            className: m.pointsIcon,
            src: g,
            alt: ""
          }), " ", (0, r.jsx)(c.Z, {
            variant: "text-md/medium",
            color: "currentColor",
            children: u
          })]
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

function y(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)(u.Z, {
    className: o()(t, m.shop),
    purchasePriority: f.ne,
    PurchasableComponent: b,
    itemsShown: 4
  })
}