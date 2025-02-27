/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => u
});
var n = r(200651);
r(192379);
var l = r(120356),
  i = r.n(l),
  a = r(481060),
  o = r(932563),
  s = r(960919),
  c = r(388032),
  d = r(682255);

function u(e) {
  let {
    orbAmount: t,
    showInsufficientOrbBalanceTooltip: r
  } = e, l = (0, o.c)(), u = null != l && l >= t;
  return (0, n.jsx)(a.ua7, {
    position: "top",
    text: c.NW.string(c.t.zqh7ZG),
    shouldShow: r && !u,
    children: e => {
      var r, l;
      return (0, n.jsxs)(a.Text, (r = function(e) {
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
      }({
        variant: "text-lg/bold",
        className: i()(d.orbPriceTag, {
          [d.insufficientBalance]: !u
        })
      }, e), l = l = {
        children: [(0, n.jsx)(s.Z, {}), t]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
      }), r))
    }
  })
}