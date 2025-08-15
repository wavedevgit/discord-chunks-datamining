/** Chunk was on 30202 **/
/** chunk id: 997950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Th: () => r,
  xu: () => a
});
var Chunk97519 = require("./97519.js");
let r = "0",
  s = {
    selectedGuildId: r
  },
  a = (0, Chunk97519.U)(e => {
    var t, n;
    return t = function(e) {
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
    }({}, s), n = n = {
      setSelectedGuildId: t => {
        e({
          selectedGuildId: t
        })
      },
      reset: () => {
        e(s)
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t
  })