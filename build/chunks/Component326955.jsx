/** Chunk was on 67544 **/
/** chunk id: 326955, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk359013 = require("./359013.js"),
  Chunk120421 = require("./120421.js"),
  Chunk702319 = require("./702319.jsx"),
  Chunk763283 = require("./763283.jsx"),
  Chunk944548 = require("./944548.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk511479 = require("./511479.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542737 = require("./542737.js");
let g = e => {
  let {
    id: t
  } = e, n = (0, d.w2)()[t], s = (0, a.Tw)(t);
  return (0, r.jsx)(u.Z, {
    borderColor: "red",
    text: (0, r.jsxs)("div", {
      className: m.tooltipContent,
      children: [(0, r.jsx)(l.Z, {
        variant: "text-sm/normal",
        children: n.name.toLocaleLowerCase()
      }), (0, r.jsx)(l.Z, {
        variant: "text-sm/normal",
        className: m.tooltipCounter,
        children: p.intl.format(f.default.VN4aTU, {
          points: Math.abs(s),
          grassIconHook: c.Z
        })
      })]
    }),
    "aria-label": n.name,
    tooltipClassName: m.tooltip,
    spacing: false,
    position: "bottom",
    children: e => (0, r.jsx)("img", function(e) {
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
      src: n.purchaseIconSrc,
      alt: "",
      className: m.debuff
    }, e))
  }, t)
};

function b() {
  let e = (0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.purchasedItems),
    t = (0, Chunk73800.useMemo)(() => Chunk477839.ZJ.filter(t => null != e[t.id] && (null == t.neutralizerId || !i.Z.hasPurchasedUpgrade(t.id, t.neutralizerId))), [module]);
  return (0, Chunk255367.jsx)("div", {
    className: Chunk542737.container,
    children: exports.map(e => (0, r.jsx)(g, {
      id: e.id
    }, e.id))
  })
}