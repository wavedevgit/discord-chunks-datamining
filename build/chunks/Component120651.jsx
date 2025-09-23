/** Chunk was on 73628 **/
/** chunk id: 120651, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js");

function a(e) {
  (0, n.ZD)(async () => {
    let {
      default: t
    } = await A.e("73322").then(A.bind(A, 776045));
    return A => (0, r.jsx)(t, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(A);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
          return Object.getOwnPropertyDescriptor(A, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = A[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, e, A))
  })
}