/** Chunk was on 1272 **/
/** chunk id: 498920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk282793 = require("./282793.js"),
  Chunk921944 = require("./921944.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk731490 = require("./731490.js");
let d = e => {
  let {
    targetElementRef: t,
    dismissPopover: d,
    children: p
  } = e, f = (0, r.jsx)(i.J2, {
    targetElementRef: t,
    title: c.intl.format(s.default["c+NBSl"], {
      premiumGroupProductName: (0, a.sO)()
    }),
    body: c.intl.format(s.default.MuUV5u, {
      premiumGroupProductName: (0, a.sO)(),
      totalSeats: a.v$
    }),
    graphic: {
      type: "image",
      src: u
    },
    badge: {
      type: "beta",
      variant: "expressive"
    },
    size: "md",
    align: "top",
    position: "right",
    caretConfig: {
      align: "start"
    },
    actions: [{
      text: c.intl.string(s.default["IO+nlU"]),
      onClick: () => {
        d(o.L.TAKE_ACTION), (0, l.ZDy)(async () => {
          let {
            default: e
          } = await n.e("57308").then(n.bind(n, 837244));
          return t => (0, r.jsx)(e, function(e) {
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
          }({}, t))
        })
      }
    }],
    onRequestClose: () => d(o.L.USER_DISMISS)
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: p
    }), f]
  })
}