/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  U: () => c
});
var n = r(200651);
r(192379);
var i = r(120356),
  l = r.n(i),
  o = r(481060),
  a = r(388032),
  s = r(560612);
let c = e => {
  let {
    className: t,
    isPartiallyPurchased: r
  } = e;
  return r ? (0, n.jsx)(o.ua7, {
    tooltipClassName: s.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: a.NW.string(a.t["2MCxfX"]),
    children: e => {
      var r, i;
      return (0, n.jsxs)("div", (r = function(e) {
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
        className: l()(s.partialOwnStateContainer, t)
      }, e), i = i = {
        children: [(0, n.jsx)("span", {
          className: s.iconWrapper,
          children: (0, n.jsx)(o.d3s, {
            size: "md",
            color: "currentColor",
            className: s.infoIcon
          })
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: a.NW.string(a.t["5b+JhY"])
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r))
    }
  }) : (0, n.jsx)(o.Text, {
    variant: "text-md/semibold",
    className: t,
    children: a.NW.string(a.t["/bUsx8"])
  })
}