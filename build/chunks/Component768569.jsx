/** Chunk was on 21738 **/
/** chunk id: 768569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk88001 = require("./88001.js"),
  Chunk49999 = require("./49999.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438705 = require("./438705.js");
let d = e => {
  let {
    targetElementRef: t,
    dismissPopover: d,
    children: p
  } = e, f = (0, r.jsx)(i.AM, {
    targetElementRef: t,
    title: c.intl.format(o.default["c+NBSl"], {
      premiumGroupProductName: (0, a.DP)()
    }),
    body: c.intl.format(o.default.MuUV5u, {
      premiumGroupProductName: (0, a.DP)(),
      totalSeats: a.aw
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
      text: c.intl.string(o.default["IO+nlU"]),
      onClick: () => {
        d(s.i.TAKE_ACTION), (0, l.mMO)(async () => {
          let {
            default: e
          } = await n.e("91976").then(n.bind(n, 526710));
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
    onRequestClose: () => d(s.i.USER_DISMISS)
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: p
    }), f]
  })
}