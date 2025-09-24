/** Chunk was on 204 **/
/** chunk id: 237031, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  T: () => a,
  v: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");
let i = "collectibles shop product details modal",
  a = e => {
    let {
      product: t,
      category: a,
      shouldCheckoutWithOrbs: o,
      analyticsSource: s,
      analyticsLocations: c,
      returnRef: u,
      tab: d,
      variantType: p
    } = e;
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await r.e("2026").then(r.bind(r, 702370));
      return r => {
        var l, i;
        return (0, n.jsx)(e, (l = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, r), i = i = {
          product: t,
          category: a,
          shouldCheckoutWithOrbs: o,
          analyticsSource: s,
          analyticsLocations: c,
          returnRef: u,
          tab: d,
          variantType: p
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    }, {
      modalKey: i
    })
  },
  o = () => {
    (0, Chunk481060.Mr3)(i)
  }