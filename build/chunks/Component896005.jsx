/** Chunk was on 2827 **/
/** chunk id: 896005, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk112715 = require("./112715.js"),
  Chunk702421 = require("./702421.js");
let u = Chunk64700.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useSubtitle: l,
    layout: u,
    initialize: _
  } = t, p = null == n ? true : n(), m = null == l ? true : l(), g = i.useId(), A = null != p && "" !== p, f = null != m && "" !== m;
  return (0, c.Z)(_), (0, r.jsxs)("fieldset", {
    "aria-describedby": f ? g : true,
    children: [A ? (0, r.jsx)(a.Text, {
      tag: "legend",
      variant: "text-md/semibold",
      color: "text-strong",
      className: s()(d.DD, {
        [d.h0]: f
      }),
      children: p
    }) : null, f ? (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      id: g,
      className: d.VA,
      children: m
    }) : null, (0, r.jsx)(a.BJc, {
      direction: "vertical",
      gap: 8,
      padding: {
        top: 16
      },
      children: u.map(e => (0, r.jsx)(o.A, {
        node: e
      }, e.key))
    })]
  })
})