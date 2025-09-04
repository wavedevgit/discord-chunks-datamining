/** Chunk was on 73628 **/
/** chunk id: 809659, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js");

function l(A) {
  (0, r.ZD)(async () => {
    let {
      default: e
    } = await t.e("73322").then(t.bind(t, 776045));
    return t => (0, n.jsx)(e, function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
          return Object.getOwnPropertyDescriptor(t, A).enumerable
        }))), n.forEach(function(e) {
          var n;
          n = t[e], e in A ? Object.defineProperty(A, e, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : A[e] = n
        })
      }
      return A
    }({}, A, t))
  })
}