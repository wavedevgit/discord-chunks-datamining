/** Chunk was on 97262 **/
/** chunk id: 847767, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk820284 = require("./820284.jsx");

function a(e, t) {
  return function(i) {
    return (0, n.jsx)(l.A, {
      page: t.page,
      section: t.section,
      object: t.object,
      objectType: t.objectType,
      children: (0, n.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = i[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, i))
    })
  }
}