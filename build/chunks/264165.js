/** Chunk was on 82520 **/
n.d(t, {
  Z: () => r
});
var a = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  s = n(199916);
let r = e => {
  let {
    aspectRatio: t,
    style: n,
    className: i,
    children: r
  } = e;
  return (0, a.jsx)("div", {
    className: l()(s.outer, i),
    style: function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = a
        })
      }
      return e
    }({
      paddingTop: "".concat(1 / t * 100, "%")
    }, n),
    children: (0, a.jsx)("div", {
      className: s.inner,
      children: r
    })
  })
}