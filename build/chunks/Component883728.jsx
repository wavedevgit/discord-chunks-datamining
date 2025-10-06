/** Chunk was on 22173 **/
/** chunk id: 883728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk374470 = require("./374470.js"),
  Chunk239091 = require("./239091.js");
let r = e => {
  let {
    facepileRef: t,
    goToThread: r,
    channel: i
  } = e;
  return {
    handleLeftClick: e => {
      var n;
      (0, a.kK)(e.target) && (null == (n = t.current) ? true : n.contains(e.target)) || r(i, e.shiftKey)
    },
    handleRightClick: e => (0, s.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("46154"), n.e("72280")]).then(n.bind(n, 422200));
      return t => {
        var n, a;
        return (0, l.jsx)(e, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, t), a = a = {
          channel: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
        }), n))
      }
    })
  }
}