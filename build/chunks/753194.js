/** Chunk was on 93955 **/
n.d(t, {
  Z: () => d
}), n(388685);
var a = n(255367);
n(73800);
var r = n(866442),
  i = n(442837),
  o = n(692547),
  c = n(481060),
  s = n(607070),
  l = n(297700),
  u = n(388032);

function d(e) {
  let t, {
      color: n,
      size: d,
      forcedIconColor: p,
      className: _,
      iconClassName: g,
      tooltipText: f
    } = e,
    [m, b] = (0, i.Wu)([s.Z], () => [s.Z.desaturateUserColors, s.Z.saturation]),
    y = (0, c.dQu)(o.Z.unsafe_rawColors.PRIMARY_300).hex(),
    h = (0, r._i)(null != n ? n : y),
    I = (0, r.ho)(h, !1, m ? b : null);
  return t = null != p ? p : .3 > (0, r.Bd)(h) ? o.Z.unsafe_rawColors.PRIMARY_630.css : o.Z.unsafe_rawColors.WHITE_500.css, (0, a.jsx)(c.ua7, {
    text: null != f ? f : u.intl.string(u.t.T3PvV1),
    children: e => {
      var n, r;
      return (0, a.jsx)(l.Z, (n = function(e) {
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
      }({}, e), r = r = {
        className: _,
        color: I,
        size: d,
        children: (0, a.jsx)(c.kmB, {
          size: "custom",
          color: t,
          height: d,
          width: d,
          className: g
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  })
}