/** Chunk was on 97161 **/
n.d(t, {
  Z: () => d
}), n(388685);
var o = n(200651);
n(192379);
var a = n(866442),
  r = n(442837),
  i = n(692547),
  c = n(481060),
  l = n(607070),
  s = n(297700),
  _ = n(388032);

function d(e) {
  let t, {
      color: n,
      size: d,
      forcedIconColor: u,
      className: b,
      iconClassName: p,
      tooltipText: f
    } = e,
    [g, m] = (0, r.Wu)([l.Z], () => [l.Z.desaturateUserColors, l.Z.saturation]),
    h = (0, c.dQu)(i.Z.unsafe_rawColors.PRIMARY_300).hex(),
    S = (0, a._i)(null != n ? n : h),
    x = (0, a.ho)(S, !1, g ? m : null);
  return t = null != u ? u : .3 > (0, a.Bd)(S) ? i.Z.unsafe_rawColors.PRIMARY_630.css : i.Z.unsafe_rawColors.WHITE_500.css, (0, o.jsx)(c.ua7, {
    text: null != f ? f : _.NW.string(_.t.T3PvV1),
    children: e => {
      var n, a;
      return (0, o.jsx)(s.Z, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), o.forEach(function(t) {
            var o;
            o = n[t], t in e ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = o
          })
        }
        return e
      }({}, e), a = a = {
        className: b,
        color: x,
        size: d,
        children: (0, o.jsx)(c.kmB, {
          size: "custom",
          color: t,
          height: d,
          width: d,
          className: p
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n.push.apply(n, o)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
      }), n))
    }
  })
}