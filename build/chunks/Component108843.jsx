/** Chunk was on 99905 **/
/** chunk id: 108843, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk906732 = require("./906732.jsx");

function l(n, e) {
  return function(t) {
    let {
      analyticsLocations: l
    } = (0, i.ZP)(e);
    return (0, r.jsx)(i.Gt, {
      value: l,
      children: (0, r.jsx)(n, function(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable
          }))), r.forEach(function(e) {
            var r;
            r = t[e], e in n ? Object.defineProperty(n, e, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : n[e] = r
          })
        }
        return n
      }({}, t))
    })
  }
}