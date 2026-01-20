/** Chunk was on 93886 **/
/** chunk id: 429368, original params: e,a,t (module,exports,require) **/
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
let i = (0, Chunk524550.F)(() => ({
    selectionStates: new Map
  }), Chunk782425.X),
  l = e => {
    var a, t;
    (0, c.QN)();
    let n = (0, f.e7)([r.Z], () => r.Z.purchases),
      d = i(a => {
        var t;
        return (null == e ? true : e.type) !== o.Z.VARIANTS_GROUP ? 0 : null == (t = a.selectionStates.get(e.storeListingId)) ? true : t.selectedVariantIndex
      });
    return null != d ? Math.max(0, d) : Math.max(0, null != (t = null == e || null == (a = e.variants) ? true : a.findIndex(e => !n.has(e.skuId))) ? t : 0)
  },
  s = (e, a) => {
    i.setState(t => {
      var n, d, o;
      let f = null != (n = t.selectionStates.get(e.storeListingId)) ? n : {
        selectedVariantIndex: 0
      };
      return {
        selectionStates: new Map(t.selectionStates).set(e.storeListingId, (d = function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {},
              n = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.forEach(function(a) {
              var n;
              n = t[a], a in e ? Object.defineProperty(e, a, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[a] = n
            })
          }
          return e
        }({}, f), o = o = {
          selectedVariantIndex: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(o)) : (function(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(o, e))
        }), d))
      }
    })
  }