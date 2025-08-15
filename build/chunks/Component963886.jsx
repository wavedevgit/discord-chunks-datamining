/** Chunk was on 93886 **/
/** chunk id: 963886, original params: e,t,a (module,exports,require) **/
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
    } = await a.e("33811").then(a.bind(a, 986741));
    return t => (0, n.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = a[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, t))
  }, {
    onCloseCallback: e
  })
}