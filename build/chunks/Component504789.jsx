/** Chunk was on 13530 **/
/** chunk id: 504789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk626586 = require("./626586.jsx");

function a(e) {
  var t;
  let {
    renderExampleSection: n
  } = (0, i.L)();
  return null != (t = null == n ? true : n(e)) ? t : (0, l.jsx)(s, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({}, e))
}

function s(e) {
  return (0, l.jsx)(r.EYj, {
    variant: "text-md/normal",
    children: e.title
  })
}