/** Chunk was on 72425 **/
n.d(e, {
  s: () => i
});
var o = n(200651),
  r = n(481060),
  c = n(388032),
  a = n(752740);
let i = t => {
  var e, n;
  return (0, o.jsx)(r.zxk, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), o.forEach(function(e) {
        var o;
        o = n[e], e in t ? Object.defineProperty(t, e, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = o
      })
    }
    return t
  }({}, t), n = n = {
    "aria-label": c.NW.string(c.t.cpT0Cg),
    look: r.zxk.Looks.BLANK,
    size: r.zxk.Sizes.NONE,
    wrapperClassName: a.closeButton,
    innerClassName: a.closeButtonInner,
    children: (0, o.jsx)(r.Uz9, {
      size: "refresh_sm",
      className: a.closeButtonIcon
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      n.push.apply(n, o)
    }
    return n
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e))
}