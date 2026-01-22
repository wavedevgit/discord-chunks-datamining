/** Chunk was on 21738 **/
/** chunk id: 998654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function l(e) {
  (0, i.mMO)(async () => {
    let {
      default: t
    } = await n.e("8798").then(n.bind(n, 661037));
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
    }({}, n, e))
  }, {
    modalKey: "Guild Settings Picker Modal"
  })
}