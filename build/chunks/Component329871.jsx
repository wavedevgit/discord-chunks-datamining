/** Chunk was on 62934 **/
/** chunk id: 329871, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js");

function i(e, n) {
  return (0, r.ZDy)(async () => {
    let {
      default: r
    } = await t.e("19038").then(t.bind(t, 571769));
    return t => {
      var i, l;
      return (0, a.jsx)(r, (i = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), a.forEach(function(n) {
            var a;
            a = t[n], n in e ? Object.defineProperty(e, n, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = a
          })
        }
        return e
      }({}, t), l = l = {
        guildId: e,
        instance: n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t.push.apply(t, a)
        }
        return t
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    }
  })
}