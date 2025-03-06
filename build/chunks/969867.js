/** Chunk was on 44799 **/
t.d(n, {
  Z: () => p
});
var r = t(200651),
  i = t(192379),
  o = t(120356),
  s = t.n(o),
  a = t(481060),
  l = t(413335),
  c = t(157353),
  d = t(279604),
  u = t(730621),
  v = t(388032),
  x = t(423839);

function p(e) {
  let {
    className: n,
    guildId: t,
    powerup: o,
    onError: p
  } = e, {
    onActivate: b,
    isLoading: m,
    error: j,
    onDeactivate: h
  } = (0, d.Z)(t, o), _ = (0, c.Z)(t, o);
  return i.useEffect(() => {
    null == p || p(j)
  }, [j, p]), (0, r.jsxs)("div", {
    className: s()(x.container, n),
    children: [_ && (0, r.jsx)(a.ua7, {
      text: v.NW.string(u.Z.TZsu1d),
      children: e => {
        var n, t;
        return (0, r.jsx)(a.zxk, (n = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.forEach(function(n) {
              var r;
              r = t[n], n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[n] = r
            })
          }
          return e
        }({}, e), t = t = {
          className: x.secondaryButton,
          color: a.Ttl.PRIMARY,
          "aria-label": v.NW.string(u.Z.TZsu1d),
          grow: !1,
          onClick: h,
          children: (0, r.jsx)(l.Z, {})
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        })(Object(t)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
        }), n))
      }
    }), (0, r.jsx)(a.zxk, {
      className: x.primaryButton,
      grow: !0,
      onClick: _ ? () => {} : b,
      submitting: !_ && m,
      children: _ ? v.NW.string(u.Z["g5Ds6+"]) : v.NW.string(u.Z.gSxlHR)
    })]
  })
}