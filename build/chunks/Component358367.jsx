/** Chunk was on 97262 **/
/** chunk id: 358367, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk688810 = require("./688810.jsx");

function a(t, e) {
  return function(i) {
    let {
      analyticsLocations: a
    } = (0, l.Ay)(e);
    return (0, n.jsx)(l.f5, {
      value: a,
      children: (0, n.jsx)(t, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = i[e], e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = n
          })
        }
        return t
      }({}, i))
    })
  }
}