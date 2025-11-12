/** Chunk was on 18729 **/
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
    variant: s = "default"
  } = t, u = t.layout.filter(e => {
    var t, n;
    return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
  }), d = n(), f = null == c ? true : c(), b = l.useId(), p = null != f && "" !== f;
  return (0, r.jsxs)("fieldset", {
    "aria-describedby": p ? b : true,
    children: [(0, r.jsx)(o.Text, {
      tag: "legend",
      variant: "text-md/semibold",
      color: "header-primary",
      className: a.title,
      children: d
    }), p ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      id: b,
      className: a.subtitle,
      children: f
    }) : null, (0, r.jsx)(o.Kqy, {
      direction: "vertical",
      gap: 8,
      children: u.map((e, t) => (0, r.jsxs)(l.Fragment, {
        children: [(0, r.jsx)(i.Z, {
          node: e
        }), "separators" === s && t !== u.length - 1 && (0, r.jsx)(o.izJ, {
          className: a.divider
        })]
      }, e.key))
    })]
  })
})