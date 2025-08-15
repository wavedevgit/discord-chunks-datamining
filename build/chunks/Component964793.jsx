/** Chunk was on 66866 **/
/** chunk id: 964793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");

function l(e) {
  (0, i.ZDy)(async () => {
    let {
      default: t
    } = await n.e("38062").then(n.bind(n, 546604));
    return n => (0, r.jsx)(t, function(e) {
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
    }({}, e, n))
  })
}