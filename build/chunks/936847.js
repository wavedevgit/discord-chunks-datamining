/** Chunk was on 12416 **/
n.d(t, {
  Z: () => u
});
var r = n(200651),
  l = n(192379),
  i = n(576125),
  o = n(465858),
  a = n(112843),
  s = n(524484);

function c(e) {
  let {
    callTileRef: t,
    isFiring: n
  } = e, r = (0, a.Z)(), i = (0, o.Z)(t);
  return l.useEffect(() => {
    n && null != i && null != t && r.fire(i.x + t.clientWidth / 2, i.y + t.clientHeight / 2, {
      countMultiplier: 4
    })
  }, [t, r, n, i]), null
}

function u(e) {
  return (0, r.jsx)(i.Z, {
    confettiLocation: s.Hn.CALL_TILE,
    children: (0, r.jsx)(c, function(e) {
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
    }({}, e))
  })
}