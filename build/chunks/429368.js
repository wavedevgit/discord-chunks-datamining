/** Chunk was on 95215 **/
/** chunk id: 429368, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => d,
  o: () => u
}), require("./388685.js");
var Chunk574583 = require("./574583.js"),
  Chunk51835 = require("./51835.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk1870 = require("./1870.js"),
  Chunk223143 = require("./223143.js");
let c = (0, Chunk51835.F)(() => ({
    selectionStates: new Map
  }), Chunk574583.X),
  u = e => {
    var t, n;
    (0, s.QN)();
    let r = (0, l.e7)([o.Z], () => o.Z.purchases),
      i = c(t => {
        var n;
        return (null == e ? true : e.type) !== a.Z.VARIANTS_GROUP ? 0 : null == (n = t.selectionStates.get(e.storeListingId)) ? true : n.selectedVariantIndex
      });
    return null != i ? Math.max(0, i) : Math.max(0, null != (n = null == e || null == (t = e.variants) ? true : t.findIndex(e => !r.has(e.skuId))) ? n : 0)
  },
  d = (e, t) => {
    c.setState(n => {
      var r, i, a;
      let l = null != (r = n.selectionStates.get(e.storeListingId)) ? r : {
        selectedVariantIndex: 0
      };
      return {
        selectionStates: new Map(n.selectionStates).set(e.storeListingId, (i = function(e) {
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
        }({}, l), a = a = {
          selectedVariantIndex: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), i))
      }
    })
  }