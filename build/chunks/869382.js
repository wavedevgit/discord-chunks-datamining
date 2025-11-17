/** Chunk was on 91315 **/
/** chunk id: 869382, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => o
});
var Chunk663042 = require("./663042.js"),
  Chunk690775 = require("./690775.js"),
  Chunk731965 = require("./731965.js");
let s = (0, Chunk663042.U)((0, Chunk690775.tJ)((e, t) => ({
    channelShowResolvedFlags: {},
    setShowResolvedFlags: (t, n) => (0, a.j)(() => {
      e(e => {
        var r, l;
        return {
          channelShowResolvedFlags: (r = function(e) {
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
          }({}, e.channelShowResolvedFlags), l = l = {
            [t]: n
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
          }), r)
        }
      })
    }),
    getShowResolvedFlags: e => {
      var n;
      return null == (n = t().channelShowResolvedFlags[e]) || n
    }
  }), {
    name: "report-to-mod-channel-storage",
    storage: (0, Chunk690775.FL)(() => localStorage)
  })),
  o = e => {
    var t;
    let n = s();
    return null == e ? {
      showResolvedFlags: true,
      setShowResolvedFlags: () => {}
    } : {
      showResolvedFlags: null == (t = n.getShowResolvedFlags(e)) || t,
      setShowResolvedFlags: t => n.setShowResolvedFlags(e, t)
    }
  }