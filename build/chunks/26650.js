/** Chunk was on 99393 **/
n.d(t, {
  Z: () => a
});
var r = n(200651),
  s = n(192379),
  i = n(481060),
  o = n(377171),
  l = n(111705);
let a = s.forwardRef(function(e, t) {
  let {
    isInventory: n,
    style: s,
    children: a
  } = e;
  return (0, r.jsxs)("div", {
    ref: t,
    className: l.desktopTooltip,
    style: function(e) {
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
      marginTop: 8 * !!n
    }, s),
    children: [(0, r.jsx)(i.d3s, {
      size: "custom",
      className: l.infoIcon,
      height: n ? 16 : 12,
      width: n ? 16 : 12,
      color: n ? o.Z.TEXT_MUTED : o.Z.WHITE
    }), (0, r.jsx)(i.Text, {
      color: n ? "text-muted" : "always-white",
      variant: n ? "text-xs/normal" : "text-xxs/normal",
      children: a
    })]
  })
})