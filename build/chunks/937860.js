/** Chunk was on 97161 **/
n.d(t, {
  s: () => c
});
var o = n(200651),
  a = n(481060),
  r = n(388032),
  i = n(752740);
let c = e => {
  var t, n;
  return (0, o.jsx)(a.zxk, (t = function(e) {
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
  }({}, e), n = n = {
    "aria-label": r.NW.string(r.t.cpT0Cg),
    look: a.zxk.Looks.BLANK,
    size: a.zxk.Sizes.NONE,
    wrapperClassName: i.closeButton,
    innerClassName: i.closeButtonInner,
    children: (0, o.jsx)(a.Uz9, {
      size: "refresh_sm",
      className: i.closeButtonIcon
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}