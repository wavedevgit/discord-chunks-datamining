/** Chunk was on 16985 **/
/** chunk id: 149865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk700875 = require("./700875.js");
let c = Chunk647438.memo(function(e) {
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
        children: [(0, r.jsx)(o.Text, {
          tag: "legend",
          variant: "text-md/semibold",
          color: "header-primary",
          className: a.title,
          children: f
        }), y ? (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          id: p,
          className: a.subtitle,
          children: b
        }) : null]
      }), (0, r.jsx)(o.Kqy, {
        direction: "vertical",
        gap: 8,
        children: d.map((e, t) => (0, r.jsxs)(l.Fragment, {
          children: [(0, r.jsx)(i.Z, {
            node: e
          }), "separators" === s && t !== d.length - 1 && (0, r.jsx)(o.izJ, {
            className: a.divider
          })]
        }, e.key))
      })]
    })
  })
})