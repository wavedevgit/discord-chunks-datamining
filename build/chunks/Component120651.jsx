/** Chunk was on 73628 **/
/** chunk id: 120651, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js");

function a(e) {
  (0, r.ZD)(async () => {
    let {
      default: A
    } = await t.e("73322").then(t.bind(t, 776045));
    return t => (0, n.jsx)(A, function(e) {
      for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
          n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.forEach(function(A) {
          var n;
          n = t[A], A in e ? Object.defineProperty(e, A, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[A] = n
        })
      }
      return e
    }({}, e, t))
  })
}