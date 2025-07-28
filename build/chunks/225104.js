/** Chunk was on 40897 **/
r.d(t, {
  Z: () => a
});
var l = r(255367);
r(73800);
var n = r(91218),
  i = r(518738),
  o = r(134433);

function a(e) {
  let {
    guildId: t,
    role: r,
    size: a,
    className: s
  } = e, c = (0, i.p9)({
    guildId: t,
    roleId: r.id,
    size: a
  });
  return null != c ? (0, l.jsx)(n.Z, function(e) {
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
    className: s
  }, c)) : (0, l.jsx)(o.Z, {
    color: r.colorString,
    className: s,
    size: a
  })
}