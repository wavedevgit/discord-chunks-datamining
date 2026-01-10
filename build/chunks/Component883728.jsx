/** Chunk was on 87646 **/
/** chunk id: 883728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk374470 = require("./374470.js"),
  Chunk239091 = require("./239091.js");
let l = e => {
  let {
    facepileRef: t,
    goToThread: l,
    channel: a
  } = e;
  return {
    handleLeftClick: e => {
      var n;
      (0, s.kK)(e.target) && (null == (n = t.current) ? true : n.contains(e.target)) || l(a, e.shiftKey)
    },
    handleRightClick: e => (0, r.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("92091"), n.e("18418")]).then(n.bind(n, 422200));
      return t => {
        var n, s;
        return (0, i.jsx)(e, (n = function(e) {
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
        }({}, t), s = s = {
          channel: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
        }), n))
      }
    })
  }
}