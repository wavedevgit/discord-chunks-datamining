/** Chunk was on 1272 (71bced4ddae32ad3.js) **/
n.d(t, {
  Z: () => a
});
var r = n(200651);
n(192379);
var i = n(481060),
  l = n(388032),
  o = n(79798);
let a = e => {
  let {
    hasHub: t
  } = e;
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)("div", {
      className: o.iconContainer,
      children: (0, r.jsx)(i.aVH, {
        size: "md",
        color: i.TVs.colors.WHITE.css
      })
    }), (0, r.jsx)(i.Text, {
      color: "header-primary",
      variant: "text-lg/semibold",
      className: o.header,
      children: t ? l.NW.string(l.t.hsSHh4) : l.NW.string(l.t.Wf6iio)
    }), (0, r.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: o.__invalid_description,
      children: t ? l.NW.string(l.t.FZ2J3d) : l.NW.string(l.t.TvHcv7)
    }), (0, r.jsx)("div", {
      className: o.gap
    }), (0, r.jsx)(i.zxk, {
      size: i.zxk.Sizes.LARGE,
      color: t ? i.zxk.Colors.PRIMARY : i.zxk.Colors.GREEN,
      onClick: () => (0, i.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 650233));
        return t => (0, r.jsx)(e, function(e) {
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
        }({}, t))
      }),
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/semibold",
        className: o.addButton,
        color: "none",
        children: t ? l.NW.string(l.t.IyjHDw) : l.NW.string(l.t["KU/aNz"])
      })
    })]
  })
}