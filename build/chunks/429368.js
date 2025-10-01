/** Chunk was on 93886 **/
/** chunk id: 429368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => s,
  o: () => l
}), require("./388685.js");
var Chunk524825 = require("./524825.js"),
  Chunk131193 = require("./131193.js"),
  Chunk979554 = require("./979554.js");
let o = (0, Chunk131193.F)(() => ({
    selectionStates: new Map
  }), Chunk524825.X),
  l = (e, t) => {
    var n, r, i, l;
    let s = o();
    return (null == e ? true : e.type) !== a.Z.VARIANTS_GROUP ? 0 : Math.max(0, null != (l = null != (i = null == (n = s.selectionStates.get(e.storeListingId)) ? true : n.selectedVariantIndex) ? i : null == (r = e.variants) ? true : r.findIndex(e => !t.has(e.skuId))) ? l : 0)
  },
  s = (e, t) => {
    o.setState(n => {
      var r, i, a;
      let o = null != (r = n.selectionStates.get(e.storeListingId)) ? r : {
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
        }({}, o), a = a = {
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