/** Chunk was on 97262 **/
/** chunk id: 847767, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk820284 = require("./820284.jsx");

function a(t, e) {
  return function(i) {
    return (0, n.jsx)(l.A, {
      page: e.page,
      section: e.section,
      object: e.object,
      objectType: e.objectType,
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