/** Chunk was on 59371 **/
/** chunk id: 762466, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  return (0, r.jsx)(i.Modal, function(t) {
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
  }({
    actions: [],
    title: c.intl.string(c.t.ULvRFd),
    subtitle: c.intl.string(c.t["HJJDr+"])
  }, t))
}