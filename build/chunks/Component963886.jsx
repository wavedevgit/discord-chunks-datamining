/** Chunk was on 32945 **/
/** chunk id: 963886, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");

function l(e) {
  (0, r.ZDy)(async () => {
    let {
      default: e
    } = await n.e("33811").then(n.bind(n, 986741));
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