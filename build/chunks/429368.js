/** Chunk was on 96910 **/
/** chunk id: 429368, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => c,
  o: () => s
}), require("./388685.js");
var Chunk94171 = require("./94171.js"),
  Chunk362383 = require("./362383.js"),
  Chunk979554 = require("./979554.js");
let l = (0, Chunk362383.F)(() => ({
    selectionStates: new Map
  }), Chunk94171.X),
  o = () => ({
    selectedVariantIndex: 0
  }),
  s = (e, t) => {
    var r, n, a, o;
    let s = l();
    return (null == e ? true : e.type) !== i.Z.VARIANTS_GROUP ? 0 : Math.max(0, null != (o = null != (a = null == (r = s.selectionStates.get(e.storeListingId)) ? true : r.selectedVariantIndex) ? a : null == (n = e.variants) ? true : n.findIndex(e => !t.has(e.skuId))) ? o : 0)
  },
  c = (e, t) => {
    l.setState(r => {
      var n, a, i;
      let l = null != (n = r.selectionStates.get(e.storeListingId)) ? n : o();
      return {
        selectionStates: new Map(r.selectionStates).set(e.storeListingId, (a = function(e) {
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
        }({}, l), i = i = {
          selectedVariantIndex: t
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
    })
  }