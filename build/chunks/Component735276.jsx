/** Chunk was on 62934 **/
/** chunk id: 735276, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js");

function i(e) {
  return (0, a.ZDy)(async () => {
    let {
      default: n
    } = await Promise.all([t.e("63639"), t.e("26473")]).then(t.bind(t, 323297));
    return t => (0, r.jsx)(n, function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(n) {
          var r;
          r = t[n], n in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = r
        })
      }
      return e
    }({}, t, e))
  })
}