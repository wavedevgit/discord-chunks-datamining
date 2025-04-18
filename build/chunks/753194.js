/** Chunk was on 98587 **/
n.d(t, {
  Z: () => _
}), n(388685);
var r = n(200651);
n(192379);
var o = n(866442),
  i = n(442837),
  a = n(692547),
  c = n(481060),
  l = n(607070),
  u = n(297700),
  s = n(388032);

function _(e) {
  let t, {
      color: n,
      size: _,
      forcedIconColor: b,
      className: d,
      iconClassName: p,
      tooltipText: f
    } = e,
    [g, O] = (0, i.Wu)([l.Z], () => [l.Z.desaturateUserColors, l.Z.saturation]),
    y = (0, c.dQu)(a.Z.unsafe_rawColors.PRIMARY_300).hex(),
    m = (0, o._i)(null != n ? n : y),
    h = (0, o.ho)(m, !1, g ? O : null);
  return t = null != b ? b : .3 > (0, o.Bd)(m) ? a.Z.unsafe_rawColors.PRIMARY_630.css : a.Z.unsafe_rawColors.WHITE_500.css, (0, r.jsx)(c.ua7, {
    text: null != f ? f : s.NW.string(s.t.T3PvV1),
    children: e => {
      var n, o;
      return (0, r.jsx)(u.Z, (n = function(e) {
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
      }({}, e), o = o = {
        className: d,
        color: h,
        size: _,
        children: (0, r.jsx)(c.kmB, {
          size: "custom",
          color: t,
          height: _,
          width: _,
          className: p
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
      }), n))
    }
  })
}