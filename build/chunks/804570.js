/** Chunk was on 88712 **/
r.d(t, {
  E: () => u
});
var n = r(200651),
  i = r(192379),
  l = r(120356),
  o = r.n(l),
  c = r(481060),
  a = r(964981);
let u = i.memo(function(e) {
  let {
    emptyText: t,
    icon: r,
    absolute: i = !1
  } = e;
  return (0, n.jsx)("div", {
    className: o()(a.emptyWidgetContainer, i && a.absolute),
    children: (0, n.jsx)(c.ua7, {
      text: t,
      children: e => {
        var t, i;
        return (0, n.jsx)("div", (t = function(e) {
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
        }({}, e), i = i = {
          children: (0, n.jsx)(r, {
            size: "md",
            color: c.TVs.colors.WHITE,
            className: a.emptyWidgetIcon
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t))
      }
    })
  })
})