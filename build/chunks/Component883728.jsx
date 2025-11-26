/** Chunk was on 22173 **/
/** chunk id: 883728, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk374470 = require("./374470.js"),
  Chunk239091 = require("./239091.js");
let r = e => {
  let {
    facepileRef: n,
    goToThread: r,
    channel: i
  } = e;
  return {
    handleLeftClick: e => {
      var t;
      (0, l.kK)(e.target) && (null == (t = n.current) ? true : t.contains(e.target)) || r(i, e.shiftKey)
    },
    handleRightClick: e => (0, a.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([t.e("89250"), t.e("18808")]).then(t.bind(t, 422200));
      return n => {
        var t, l;
        return (0, s.jsx)(e, (t = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              s = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), s.forEach(function(n) {
              var s;
              s = t[n], n in e ? Object.defineProperty(e, n, {
                value: s,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = s
            })
          }
          return e
        }({}, n), l = l = {
          channel: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            t.push.apply(t, s)
          }
          return t
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
        }), t))
      }
    })
  }
}