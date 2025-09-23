/** Chunk was on 93886 **/
/** chunk id: 237031, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => l,
  v: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");
let o = "collectibles shop product details modal",
  l = e => {
    let {
      product: t,
      category: l,
      shouldCheckoutWithOrbs: a,
      analyticsSource: s,
      analyticsLocations: c,
      returnRef: u,
      tab: d,
      variantType: p
    } = e;
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("2026").then(n.bind(n, 702370));
      return n => {
        var i, o;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), o = o = {
          product: t,
          category: l,
          shouldCheckoutWithOrbs: a,
          analyticsSource: s,
          analyticsLocations: c,
          returnRef: u,
          tab: d,
          variantType: p
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    }, {
      modalKey: o
    })
  },
  a = () => {
    (0, Chunk481060.Mr3)(o)
  }