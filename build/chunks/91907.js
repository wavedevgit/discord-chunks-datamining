/** Chunk was on 30243 **/
r.d(t, {
  Z: () => c
});
var n = r(200651),
  l = r(192379),
  i = r(793030),
  o = r(256139),
  a = r(866040);

function c(e) {
  let {
    user: t,
    text: r,
    channel: c,
    textClassName: s,
    onPopoutClosed: u
  } = e, d = (0, l.useMemo)(() => [t], [t]);
  return (0, n.jsx)(a.Z, {
    participants: d,
    channel: c,
    onPopoutClosed: u,
    children: e => {
      var t, l;
      return (0, n.jsx)(o.Z, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n
          })
        }
        return e
      }({}, e), l = l = {
        tag: "span",
        children: (0, n.jsx)(i.xv, {
          className: s,
          variant: "text-sm/semibold",
          color: "text-primary",
          lineClamp: 1,
          scaleFontToUserSetting: !0,
          children: r
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t))
    }
  })
}