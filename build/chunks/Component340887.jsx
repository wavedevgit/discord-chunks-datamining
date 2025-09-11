/** Chunk was on 85683 **/
/** chunk id: 340887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function a(e) {
  return (0, i.ZDy)(async () => {
    let {
      default: t
    } = await n.e("28934").then(n.bind(n, 826011));
    return n => {
      var i, a;
      return (0, r.jsx)(t, (i = function(e) {
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
      }({}, n), a = a = {
        instance: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
      }), i))
    }
  })
}