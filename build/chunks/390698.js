/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  U: () => c
});
var n = r(200651);
r(192379);
var l = r(120356),
  i = r.n(l),
  o = r(481060),
  s = r(388032),
  a = r(295102);
let c = e => {
  let {
    className: t,
    isPartiallyPurchased: r
  } = e;
  return r ? (0, n.jsx)(o.ua7, {
    tooltipClassName: a.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: s.NW.string(s.t["2MCxfX"]),
    children: e => {
      var r, l;
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
        className: i()(a.partialOwnStateContainer, t)
      }, e), l = l = {
        children: [(0, n.jsx)("span", {
          className: a.iconWrapper,
          children: (0, n.jsx)(o.d3s, {
            size: "md",
            color: "currentColor",
            className: a.infoIcon
          })
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: s.NW.string(s.t["5b+JhY"])
        })]
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
  }) : (0, n.jsx)(o.Text, {
    variant: "text-md/semibold",
    className: t,
    children: s.NW.string(s.t["/bUsx8"])
  })
}