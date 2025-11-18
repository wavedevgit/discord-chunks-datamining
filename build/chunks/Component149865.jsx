/** Chunk was on 88657 **/
/** chunk id: 149865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk337030 = require("./337030.js");
let c = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useSubtitle: c,
    variant: s = "default",
    ContextProvider: u
  } = t, d = t.layout.filter(e => {
    var t, n;
    return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
  }), f = n(), b = null == c ? true : c(), p = l.useId(), y = null != b && "" !== b, j = null != u ? u : l.Fragment;
  return (0, r.jsx)(j, {
    children: (0, r.jsxs)("fieldset", {
      "aria-describedby": y ? p : true,
      children: [(0, r.jsxs)("div", {
        className: a.header,
        children: [(0, r.jsx)(i.Text, {
          tag: "legend",
          variant: "text-md/semibold",
          color: "header-primary",
          className: a.title,
          children: f
        }), y ? (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          id: p,
          className: a.subtitle,
          children: b
        }) : null]
      }), (0, r.jsx)(i.Kqy, {
        direction: "vertical",
        gap: 8,
        children: d.map((e, t) => (0, r.jsxs)(l.Fragment, {
          children: [(0, r.jsx)(o.Z, {
            node: e
          }), "separators" === s && t !== d.length - 1 && (0, r.jsx)(i.izJ, {
            className: a.divider
          })]
        }, e.key))
      })]
    })
  })
})