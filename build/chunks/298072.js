/** Chunk was on 52860 **/
/** chunk id: 298072, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => o,
  n: () => p
}), require("./896048.js");
var Chunk942381 = require("./942381.js"),
  Chunk265690 = require("./265690.js"),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk4227 = require("./4227.js"),
  Chunk841702 = require("./841702.js");
let d = (0, Chunk265690.h)(() => ({
    selectionStates: new Map
  }), Chunk942381.x),
  o = t => {
    var e, n;
    (0, u.b5)();
    let i = (0, a.bG)([s.A], () => s.A.purchases),
      r = d(e => {
        var n;
        return (null == t ? true : t.type) !== l.R.VARIANTS_GROUP ? 0 : null == (n = e.selectionStates.get(t.storeListingId)) ? true : n.selectedVariantIndex
      });
    return null != r ? Math.max(0, r) : Math.max(0, null != (e = null == t || null == (n = t.variants) ? true : n.findIndex(t => !i.has(t.skuId))) ? e : 0)
  },
  p = (t, e) => {
    d.setState(n => {
      var i, r, l;
      let a = null != (i = n.selectionStates.get(t.storeListingId)) ? i : {
        selectedVariantIndex: 0
      };
      return {
        selectionStates: new Map(n.selectionStates).set(t.storeListingId, (r = function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), i.forEach(function(e) {
              var i;
              i = n[e], e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : t[e] = i
            })
          }
          return t
        }({}, a), l = l = {
          selectedVariantIndex: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            n.push.apply(n, i)
          }
          return n
        })(Object(l)).forEach(function(t) {
          Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(l, t))
        }), r))
      }
    })
  }