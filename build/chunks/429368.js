/** Chunk was on 93886 **/
/** chunk id: 429368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => u,
  o: () => d
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
  d = e => {
    var t, n;
    (0, s.QN)();
    let r = (0, l.e7)([o.Z], () => o.Z.purchases),
      a = c(t => {
        var n;
        return (null == e ? true : e.type) !== i.Z.VARIANTS_GROUP ? 0 : null == (n = t.selectionStates.get(e.storeListingId)) ? true : n.selectedVariantIndex
      });
    return null != a ? Math.max(0, a) : Math.max(0, null != (n = null == e || null == (t = e.variants) ? true : t.findIndex(e => !r.has(e.skuId))) ? n : 0)
  },
  u = (e, t) => {
    c.setState(n => {
      var r, a, i;
      let l = null != (r = n.selectionStates.get(e.storeListingId)) ? r : {
        selectedVariantIndex: 0
      };
      return {
        selectionStates: new Map(n.selectionStates).set(e.storeListingId, (a = function(e) {
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
        }({}, l), i = i = {
          selectedVariantIndex: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
        }), a))
      }
    })
  }