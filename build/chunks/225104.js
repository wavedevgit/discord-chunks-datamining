/** Chunk was on 40897 **/
r.d(t, {
  Z: () => c
});
var l = r(255367);
r(73800);
var n = r(866442),
  i = r(91218),
  o = r(518738),
  a = r(134433),
  s = r(981631);

function c(e) {
  var t;
  let {
    guildId: r,
    role: c,
    size: f,
    className: u
  } = e, d = (0, o.p9)({
    guildId: r,
    roleId: c.id,
    size: f
  });
  return null != d ? (0, l.jsx)(i.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = r[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = l
      })
    }
    return e
  }({
    className: u
  }, d)) : (0, l.jsx)(a.Z, {
    color: null != (t = c.colorString) ? t : (0, n.Rf)(s.p6O),
    className: u,
    size: f
  })
}