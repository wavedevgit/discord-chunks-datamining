/** Chunk was on 82081 **/
r.d(t, {
  s: () => s
});
var n = r(255367),
  a = r(755721),
  o = r(481060),
  i = r(388032),
  c = r(752740);
let s = e => {
  var t, r;
  return (0, n.jsx)(a.zx, (t = function(e) {
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
  }({}, e), r = r = {
    "aria-label": i.intl.string(i.t.cpT0Cg),
    look: a.zx.Looks.BLANK,
    size: a.zx.Sizes.NONE,
    wrapperClassName: c.closeButton,
    innerClassName: c.closeButtonInner,
    children: (0, n.jsx)(o.Uz9, {
      size: "refresh_sm",
      className: c.closeButtonIcon
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}