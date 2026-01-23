/** Chunk was on 46952 **/
/** chunk id: 298072, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => u,
  n: () => d
}), require("./896048.js");
var Chunk942381 = require("./942381.js"),
  Chunk265690 = require("./265690.js"),
  Chunk312852 = require("./312852.js"),
  Chunk623373 = require("./623373.js");
let s = (0, Chunk265690.h)(() => ({
    selectionStates: new Map
  }), Chunk942381.x),
  u = t => {
    let e = (0, l.K)(t),
      n = s(e => {
        var n;
        return null != t && (0, a.B1)(t) ? null == (n = e.selectionStates.get(t.storeListingId)) ? true : n.selectedVariantIndex : null
      });
    return null != n ? Math.max(0, n) : e
  },
  d = (t, e) => {
    s.setState(n => {
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