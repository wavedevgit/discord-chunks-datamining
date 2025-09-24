/** Chunk was on 93886 **/
/** chunk id: 429368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => s,
  o: () => l
}), require("./388685.js");
var Chunk524825 = require("./524825.js"),
  Chunk131193 = require("./131193.js"),
  Chunk979554 = require("./979554.js");
let a = (0, Chunk131193.F)(() => ({
    selectionStates: new Map
  }), Chunk524825.X),
  l = (e, t) => {
    var n, i, r, l;
    let s = a();
    return (null == e ? true : e.type) !== o.Z.VARIANTS_GROUP ? 0 : Math.max(0, null != (l = null != (r = null == (n = s.selectionStates.get(e.storeListingId)) ? true : n.selectedVariantIndex) ? r : null == (i = e.variants) ? true : i.findIndex(e => !t.has(e.skuId))) ? l : 0)
  },
  s = (e, t) => {
    a.setState(n => {
      var i, r, o;
      let a = null != (i = n.selectionStates.get(e.storeListingId)) ? i : {
        selectedVariantIndex: 0
      };
      return {
        selectionStates: new Map(n.selectionStates).set(e.storeListingId, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, a), o = o = {
          selectedVariantIndex: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
        }), r))
      }
    })
  }