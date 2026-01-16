/** Chunk was on 93886 **/
/** chunk id: 429368, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  $: () => s,
  o: () => l
}), require("./388685.js");
var Chunk782425 = require("./782425.js"),
  Chunk524550 = require("./524550.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk1870 = require("./1870.js"),
  Chunk223143 = require("./223143.js");
let f = (0, Chunk524550.F)(() => ({
    selectionStates: new Map
  }), Chunk782425.X),
  l = e => {
    var t, a;
    (0, i.QN)();
    let c = (0, d.e7)([r.Z], () => r.Z.purchases),
      n = f(t => {
        var a;
        return (null == e ? true : e.type) !== o.Z.VARIANTS_GROUP ? 0 : null == (a = t.selectionStates.get(e.storeListingId)) ? true : a.selectedVariantIndex
      });
    return null != n ? Math.max(0, n) : Math.max(0, null != (a = null == e || null == (t = e.variants) ? true : t.findIndex(e => !c.has(e.skuId))) ? a : 0)
  },
  s = (e, t) => {
    f.setState(a => {
      var c, n, o;
      let d = null != (c = a.selectionStates.get(e.storeListingId)) ? c : {
        selectedVariantIndex: 0
      };
      return {
        selectionStates: new Map(a.selectionStates).set(e.storeListingId, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {},
              c = Object.keys(a);
            "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
              return Object.getOwnPropertyDescriptor(a, e).enumerable
            }))), c.forEach(function(t) {
              var c;
              c = a[t], t in e ? Object.defineProperty(e, t, {
                value: c,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = c
            })
          }
          return e
        }({}, d), o = o = {
          selectedVariantIndex: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(e);
            a.push.apply(a, c)
          }
          return a
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n))
      }
    })
  }