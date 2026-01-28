/** Chunk was on 78528 **/
/** chunk id: 757780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk265690 = require("./265690.js");
let l = {
    isSorting: false
  },
  i = (0, Chunk265690.h)()((e, t) => {
    var n, r;
    return n = function(e) {
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
    }({}, l), r = r = {
      startSorting: () => e({
        isSorting: true
      }),
      stopSorting: () => e({
        isSorting: false
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), n
  })