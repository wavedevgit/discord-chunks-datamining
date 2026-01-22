/** Chunk was on 67096 **/
/** chunk id: 426043, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js");

function l(e) {
  (0, n.openModalLazy)(async () => {
    let {
      default: A
    } = await t.e("44252").then(t.bind(t, 790743));
    return t => (0, r.jsx)(A, function(e) {
      for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
          r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(A) {
          var r;
          r = t[A], A in e ? Object.defineProperty(e, A, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[A] = r
        })
      }
      return e
    }({}, e, t))
  })
}