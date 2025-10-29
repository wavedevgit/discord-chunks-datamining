/** Chunk was on 28855 **/
/** chunk id: 110478, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");

function l(e) {
  (0, r.ZDy)(async () => {
    let {
      default: e
    } = await n.e("61323").then(n.bind(n, 333636));
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