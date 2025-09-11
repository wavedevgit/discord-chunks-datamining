/** Chunk was on 39159 **/
/** chunk id: 967647, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Q: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function a(e) {
  (0, r.ZDy)(async () => {
    let {
      default: n
    } = await Promise.all([t.e("31924"), t.e("46124")]).then(t.bind(t, 862065));
    return t => (0, i.jsx)(n, function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.forEach(function(n) {
          var i;
          i = t[n], n in e ? Object.defineProperty(e, n, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = i
        })
      }
      return e
    }({
      gameInstance: e
    }, t))
  })
}