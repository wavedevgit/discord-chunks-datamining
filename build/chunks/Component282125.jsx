/** Chunk was on 28090 **/
/** chunk id: 282125, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js");

function a(t) {
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e("3250").then(n.bind(n, 737865));
    return n => (0, r.jsx)(e, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), r.forEach(function(e) {
          var r;
          r = n[e], e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = r
        })
      }
      return t
    }({}, t, n))
  })
}