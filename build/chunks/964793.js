/** Chunk was on 72453 **/
n.d(t, {
  e: () => a
});
var r = n(200651);
n(192379);
var i = n(481060);

function a(e) {
  (0, i.ZDy)(async () => {
    let {
      default: t
    } = await n.e("38062").then(n.bind(n, 546604));
    return n => (0, r.jsx)(t, function(e) {
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
    }({}, e, n))
  })
}