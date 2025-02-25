/** Chunk was on 93259 **/
n.d(t, {
  Z: () => _
}), n(47120);
var a = n(200651);
n(192379);
var o = n(866442),
  r = n(442837),
  i = n(692547),
  l = n(481060),
  c = n(607070),
  s = n(297700),
  d = n(388032);

function _(e) {
  let t, {
      color: n,
      size: _,
      forcedIconColor: u,
      className: b,
      iconClassName: f,
      tooltipText: g
    } = e,
    [p, m] = (0, r.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.saturation]),
    h = (0, l.dQu)(i.Z.unsafe_rawColors.PRIMARY_300).hex(),
    O = (0, o._i)(null != n ? n : h),
    C = (0, o.ho)(O, !1, p ? m : null);
  return t = null != u ? u : .3 > (0, o.Bd)(O) ? i.Z.unsafe_rawColors.PRIMARY_630.css : i.Z.unsafe_rawColors.WHITE_500.css, (0, a.jsx)(l.ua7, {
    text: null != g ? g : d.NW.string(d.t.T3PvV1),
    children: e => {
      var n, o;
      return (0, a.jsx)(s.Z, (n = function(e) {
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
      }({}, e), o = o = {
        className: b,
        color: C,
        size: _,
        children: (0, a.jsx)(l.kmB, {
          size: "custom",
          color: t,
          height: _,
          width: _,
          className: f
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
      }), n))
    }
  })
}