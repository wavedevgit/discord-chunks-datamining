/** Chunk was on 19418 **/
/** chunk id: 647534, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js");

function l(e) {
  (0, r.mMO)(async () => {
    let {
      default: n
    } = await Promise.all([t.e("63379"), t.e("72668")]).then(t.bind(t, 404128));
    return t => (0, i.jsx)(n, function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.forEach(function(n) {
          var i;
          i = t[n], n in e ? Object.defineProperty(e, n, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = i
        })
      }
      return e
    }({
      guildId: e
    }, t))
  })
}