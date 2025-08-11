/** Chunk was on 45620 **/
/** chunk id: 237031, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  T: () => i,
  v: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js");
let a = "collectibles shop product details modal",
  i = e => {
    let {
      product: t,
      category: i,
      shouldCheckoutWithOrbs: o,
      analyticsSource: s,
      analyticsLocations: c,
      returnRef: u,
      tab: d
    } = e;
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("78223"), n.e("16476")]).then(n.bind(n, 702370));
      return n => {
        var l, a;
        return (0, r.jsx)(e, (l = function(e) {
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
        }({}, n), a = a = {
          product: t,
          category: i,
          shouldCheckoutWithOrbs: o,
          analyticsSource: s,
          analyticsLocations: c,
          returnRef: u,
          tab: d
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
        }), l))
      }
    }, {
      modalKey: a
    })
  },
  o = () => {
    (0, Chunk481060.Mr3)(a)
  }