/** Chunk was on 57650 **/
n.d(t, {
  Z: () => c
});
var r = n(255367);
n(73800);
var a = n(120356),
  o = n.n(a),
  i = n(965860);
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
            enumerable: !0,
            configurable: !0,
            writable: !0
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