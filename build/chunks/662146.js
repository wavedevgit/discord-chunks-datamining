/** Chunk was on 53494 **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(481060),
  s = n(540059),
  c = n(597631);

function u(e) {
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
}

function d(e) {
  let {
    children: t,
    text: n,
    color: o,
    disableWrapper: d = !1,
    disabled: p = !1,
    hideOnClick: h = !0,
    shouldShow: f,
    forceOpen: g,
    selected: m = !1,
    tooltipClass: b,
    tooltipContentClass: v
  } = e, y = (0, s.Q3)("ListItemTooltip");
  return (0, r.jsx)(a.ua7, {
    shouldShow: f,
    forceOpen: g,
    spacing: y ? 12 : 20,
    hideOnClick: h,
    text: p ? null : n,
    position: "right",
    color: o,
    "aria-label": !1,
    tooltipClassName: l()(c.listItemTooltip, b),
    tooltipContentClassName: v,
    children: e => {
      var n, o;
      return d ? i.cloneElement(i.Children.only(t), u({}, e)) : (0, r.jsx)("div", (n = u({
        className: l()(c.listItemWrapper, {
          [c.selected]: m
        })
      }, e), o = o = {
        children: t
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