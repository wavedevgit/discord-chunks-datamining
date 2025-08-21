/** Chunk was on 45620 **/
/** chunk id: 429368, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => s,
  o: () => o
}), require("./388685.js");
var Chunk524825 = require("./524825.js"),
  Chunk131193 = require("./131193.js"),
  Chunk979554 = require("./979554.js");
let i = (0, Chunk131193.F)(() => ({
    selectionStates: new Map
  }), Chunk524825.X),
  o = (e, t) => {
    var r, n, l, o;
    let s = i();
    return (null == e ? true : e.type) !== a.Z.VARIANTS_GROUP ? 0 : Math.max(0, null != (o = null != (l = null == (r = s.selectionStates.get(e.storeListingId)) ? true : r.selectedVariantIndex) ? l : null == (n = e.variants) ? true : n.findIndex(e => !t.has(e.skuId))) ? o : 0)
  },
  s = (e, t) => {
    i.setState(r => {
      var n, l, a;
      let i = null != (n = r.selectionStates.get(e.storeListingId)) ? n : {
        selectedVariantIndex: 0
      };
      return {
        selectionStates: new Map(r.selectionStates).set(e.storeListingId, (l = function(e) {
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
        }({}, i), a = a = {
          selectedVariantIndex: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
        }), l))
      }
    })
  }