/** Chunk was on 95617 **/
n.d(t, {
  U: () => c
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(481060),
  s = n(388032),
  a = n(796763);
let c = e => {
  let {
    className: t,
    isPartiallyPurchased: n
  } = e;
  return n ? (0, r.jsx)(l.ua7, {
    tooltipClassName: a.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: s.NW.string(s.t["2MCxfX"]),
    children: e => {
      var n, i;
      return (0, r.jsxs)("div", (n = function(e) {
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
        className: o()(a.partialOwnStateContainer, t)
      }, e), i = i = {
        children: [(0, r.jsx)("span", {
          className: a.iconWrapper,
          children: (0, r.jsx)(l.d3s, {
            size: "md",
            color: "currentColor",
            className: a.infoIcon
          })
        }), (0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: s.NW.string(s.t["5b+JhY"])
        })]
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
  }) : (0, r.jsx)(l.Text, {
    variant: "text-md/semibold",
    className: t,
    children: s.NW.string(s.t["/bUsx8"])
  })
}