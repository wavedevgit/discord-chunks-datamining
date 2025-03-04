/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => d
});
var n = r(200651);
r(192379);
var l = r(120356),
  i = r.n(l),
  o = r(481060),
  s = r(932563),
  a = r(960919),
  c = r(388032),
  u = r(116264);

function d(e) {
  let {
    orbAmount: t,
    showInsufficientOrbBalanceTooltip: r
  } = e, l = (0, s.c)(), d = null != l && l >= t;
  return (0, n.jsx)(o.ua7, {
    position: "top",
    text: c.NW.string(c.t.zqh7ZG),
    shouldShow: r && !d,
    children: e => {
      var r, l;
      return (0, n.jsxs)(o.Text, (r = function(e) {
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
        className: i()(u.orbPriceTag, {
          [u.insufficientBalance]: !d
        })
      }, e), l = l = {
        children: [(0, n.jsx)(a.Z, {}), t]
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