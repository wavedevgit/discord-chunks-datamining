/** Chunk was on 86031 **/
/** chunk id: 237031, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  T: () => l,
  v: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js");
let i = "collectibles shop product details modal",
  l = e => {
    let {
      product: t,
      category: l,
      shouldCheckoutWithOrbs: o,
      analyticsSource: s,
      analyticsLocations: c,
      returnRef: u,
      tab: d
    } = e;
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([r.e("25292"), r.e("31978"), r.e("40694"), r.e("78223"), r.e("32160")]).then(r.bind(r, 702370));
      return r => {
        var a, i;
        return (0, n.jsx)(e, (a = function(e) {
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
          category: l,
          shouldCheckoutWithOrbs: o,
          analyticsSource: s,
          analyticsLocations: c,
          returnRef: u,
          tab: d
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
        }), a))
      }
    }, {
      modalKey: i
    })
  },
  o = () => {
    (0, Chunk481060.Mr3)(i)
  }