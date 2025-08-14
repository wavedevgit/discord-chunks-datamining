/** Chunk was on 22173 **/
/** chunk id: 883728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk374470 = require("./374470.js"),
  Chunk239091 = require("./239091.js");
let l = e => {
  let {
    facepileRef: t,
    goToThread: l,
    channel: i
  } = e;
  return {
    handleLeftClick: e => {
      var n;
      (0, a.k)(e.target) && (null == (n = t.current) ? true : n.contains(e.target)) || l(i, e.shiftKey)
    },
    handleRightClick: e => (0, s.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("46154"), n.e("18356")]).then(n.bind(n, 422200));
      return t => {
        var n, a;
        return (0, r.jsx)(e, (n = function(e) {
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
        }({}, t), a = a = {
          channel: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
        }), n))
      }
    })
  }
}