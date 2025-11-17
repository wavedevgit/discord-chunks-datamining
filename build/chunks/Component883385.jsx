/** Chunk was on 93741 **/
/** chunk id: 883385, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk410575 = require("./410575.jsx");

function i(t, e) {
  return function(n) {
    return (0, r.jsx)(o.Z, {
      page: e.page,
      section: e.section,
      object: e.object,
      objectType: e.objectType,
      children: (0, r.jsx)(t, function(t) {
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
      }({}, n))
    })
  }
}