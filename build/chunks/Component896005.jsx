/** Chunk was on 78376 **/
/** chunk id: 896005, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk702421 = require("./702421.js");
let d = Chunk64700.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useSubtitle: l,
    layout: d
  } = t, u = null == n ? true : n(), _ = null == l ? true : l(), p = i.useId(), m = null != u && "" !== u, g = null != _ && "" !== _;
  return (0, r.jsxs)("fieldset", {
    "aria-describedby": g ? p : true,
    children: [m ? (0, r.jsx)(a.Text, {
      tag: "legend",
      variant: "text-md/semibold",
      color: "text-strong",
      className: s()(c.DD, {
        [c.h0]: g
      }),
      children: u
    }) : null, g ? (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      id: p,
      className: c.VA,
      children: _
    }) : null, (0, r.jsx)(a.BJc, {
      direction: "vertical",
      gap: 8,
      padding: {
        top: 16
      },
      children: d.map(e => (0, r.jsx)(o.A, {
        node: e
      }, e.key))
    })]
  })
})