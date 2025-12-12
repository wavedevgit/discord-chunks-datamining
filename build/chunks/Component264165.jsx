/** Chunk was on 57650 **/
/** chunk id: 264165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk851827 = require("./851827.js");
let c = e => {
  let {
    aspectRatio: t,
    style: n,
    className: a,
    children: c
  } = e;
  return (0, r.jsx)("div", {
    className: o()(i.outer, a),
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
      className: i.inner,
      children: c
    })
  })
}