/** Chunk was on 45620 **/
/** chunk id: 429368, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => c,
  o: () => s
}), require("./388685.js");
var Chunk94171 = require("./94171.js"),
  Chunk362383 = require("./362383.js"),
  Chunk979554 = require("./979554.js");
let i = (0, Chunk362383.F)(() => ({
    selectionStates: new Map
  }), Chunk94171.X),
  o = () => ({
    selectedVariantIndex: 0
  }),
  s = (e, t) => {
    var n, r, l, o;
    let s = i();
    return (null == e ? true : e.type) !== a.Z.VARIANTS_GROUP ? 0 : Math.max(0, null != (o = null != (l = null == (n = s.selectionStates.get(e.storeListingId)) ? true : n.selectedVariantIndex) ? l : null == (r = e.variants) ? true : r.findIndex(e => !t.has(e.skuId))) ? o : 0)
  },
  c = (e, t) => {
    i.setState(n => {
      var r, l, a;
      let i = null != (r = n.selectionStates.get(e.storeListingId)) ? r : o();
      return {
        selectionStates: new Map(n.selectionStates).set(e.storeListingId, (l = function(e) {
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
        }({}, i), a = a = {
          selectedVariantIndex: t
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
    })
  }