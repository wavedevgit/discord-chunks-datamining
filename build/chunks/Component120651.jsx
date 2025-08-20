/** Chunk was on 73628 **/
/** chunk id: 120651, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js");

function l(e) {
  (0, r.ZD)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(A.bind(A, 776045));
    return A => (0, n.jsx)(t, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(A);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
          return Object.getOwnPropertyDescriptor(A, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = A[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, e, A))
  })
}