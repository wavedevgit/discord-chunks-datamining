/** Chunk was on 19418 **/
/** chunk id: 647534, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js");

function l(e) {
  (0, r.mMO)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("63379"), n.e("72668")]).then(n.bind(n, 404128));
    return n => (0, i.jsx)(t, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({
      guildId: e
    }, n))
  })
}