/** Chunk was on 24389 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(481060),
  a = n(932563),
  s = n(960919),
  c = n(388032),
  u = n(116264);

function d(e) {
  let {
    orbAmount: t,
    showInsufficientOrbBalanceTooltip: n
  } = e, i = (0, a.c)(), d = null != i && i >= t;
  return (0, r.jsx)(l.ua7, {
    position: "top",
    text: c.NW.string(c.t.zqh7ZG),
    shouldShow: n && !d,
    children: e => {
      var n, i;
      return (0, r.jsxs)(l.Text, (n = function(e) {
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
      }({
        variant: "text-lg/bold",
        className: o()(u.orbPriceTag, {
          [u.insufficientBalance]: !d
        })
      }, e), i = i = {
        children: [(0, r.jsx)(s.Z, {}), t]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}