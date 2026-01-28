/** Chunk was on 5606 **/
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
    initialize: p
  } = t, _ = null == n ? true : n(), m = null == l ? true : l(), g = i.useId(), f = null != _ && "" !== _, b = null != m && "" !== m;
  return (0, c.Z)(p), (0, r.jsxs)("fieldset", {
    "aria-describedby": b ? g : true,
    children: [f ? (0, r.jsx)(a.Text, {
      tag: "legend",
      variant: "text-md/semibold",
      color: "text-strong",
      className: s()(d.DD, {
        [d.h0]: b
      }),
      children: _
    }) : null, b ? (0, r.jsx)(a.Text, {
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