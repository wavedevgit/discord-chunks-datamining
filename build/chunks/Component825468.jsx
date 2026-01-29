/** Chunk was on 6500 **/
/** chunk id: 825468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function l(e) {
  (0, i.mMO)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
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
    }({
      source: e
    }, n))
  })
}