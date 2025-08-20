/** Chunk was on 71387 **/
/** chunk id: 237031, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  T: () => l,
  v: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");
let a = "collectibles shop product details modal",
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
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await r.e("2026").then(r.bind(r, 702370));
      return r => {
        var i, a;
        return (0, n.jsx)(e, (i = function(e) {
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
        }({}, r), a = a = {
          product: t,
          category: l,
          shouldCheckoutWithOrbs: o,
          analyticsSource: s,
          analyticsLocations: c,
          returnRef: u,
          tab: d
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), i))
      }
    }, {
      modalKey: a
    })
  },
  o = () => {
    (0, Chunk481060.Mr3)(a)
  }