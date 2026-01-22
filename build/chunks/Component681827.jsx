/** Chunk was on 21738 **/
/** chunk id: 681827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk569803 = require("./569803.js");
let s = e => {
  let {
    aspectRatio: t,
    style: n,
    className: i,
    children: s
  } = e;
  return (0, r.jsx)("div", {
    className: l()(a.A, i),
    style: function(e) {
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
      paddingTop: "".concat(1 / t * 100, "%")
    }, n),
    children: (0, r.jsx)("div", {
      className: a.v,
      children: s
    })
  })
}