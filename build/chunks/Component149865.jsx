/** Chunk was on 46984 **/
/** chunk id: 149865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk111161 = require("./111161.jsx"),
  Chunk700875 = require("./700875.js");
let c = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useSubtitle: c,
    variant: u = "default",
    ContextProvider: d
  } = t, f = t.layout.filter(e => {
    var t, n;
    return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
  }), p = n(), b = null == c ? true : c(), y = l.useId(), g = null != b && "" !== b, v = null != d ? d : l.Fragment;
  return (0, r.jsx)(v, {
    children: (0, r.jsxs)("fieldset", {
      "aria-describedby": g ? y : true,
      children: [(0, r.jsxs)("div", {
        className: s.header,
        children: [(0, r.jsx)(i.Text, {
          tag: "legend",
          variant: "text-md/semibold",
          color: "header-primary",
          className: s.title,
          children: p
        }), g ? (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          id: y,
          className: s.subtitle,
          children: b
        }) : null]
      }), (0, r.jsx)(i.Kqy, {
        direction: "vertical",
        gap: 8,
        children: f.map((e, t) => (0, r.jsxs)(l.Fragment, {
          children: [(0, r.jsx)(o.Z, {
            node: e
          }), "separators" === u && t !== f.length - 1 && (0, r.jsx)(a.Z, {})]
        }, e.key))
      })]
    })
  })
})