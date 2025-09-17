/** Chunk was on 1272 **/
/** chunk id: 469988, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231690 = require("./231690.js");
let s = e => {
  let {
    hasHub: t
  } = e;
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)("div", {
      className: o.iconContainer,
      children: (0, r.jsx)(l.aVH, {
        size: "md",
        color: l.TVs.colors.WHITE.css
      })
    }), (0, r.jsx)(l.Text, {
      color: "header-primary",
      variant: "text-lg/semibold",
      className: o.header,
      children: t ? a.intl.string(a.t.hsSHh4) : a.intl.string(a.t.Wf6iio)
    }), (0, r.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: o.__invalid_description,
      children: t ? a.intl.string(a.t.FZ2J3d) : a.intl.string(a.t.TvHcv7)
    }), (0, r.jsx)("div", {
      className: o.gap
    }), (0, r.jsx)(i.zx, {
      size: i.zx.Sizes.LARGE,
      color: t ? i.zx.Colors.PRIMARY : i.zx.Colors.GREEN,
      onClick: () => (0, l.ZDy)(async () => {
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
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, t))
      }),
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        className: o.addButton,
        color: "none",
        children: t ? a.intl.string(a.t.IyjHDw) : a.intl.string(a.t["KU/aNz"])
      })
    })]
  })
}