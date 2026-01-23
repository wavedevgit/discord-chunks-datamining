/** Chunk was on 22477 **/
/** chunk id: 480237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function r(e) {
  (0, l.mMO)(async () => {
    let {
      default: e
    } = await n.e("25810").then(n.bind(n, 114857));
    return t => (0, a.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({}, t))
  }, {
    onCloseCallback: e
  })
}