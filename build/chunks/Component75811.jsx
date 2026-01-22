/** Chunk was on 46115 **/
/** chunk id: 75811, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  j: () => i
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk200063 = require("./200063.js");

function i(e) {
  let {
    chunks: t,
    columns: r,
    className: o
  } = e, i = c.useMemo(() => ({
    "--secure-frames-columns": r
  }), [r]);
  return null == t ? (0, n.jsx)("div", {
    className: s.Lq,
    children: (0, n.jsx)(a.y$y, {})
  }) : (0, n.jsx)("div", {
    style: i,
    className: l()(s.aY, o),
    children: t.map((e, t) => (0, n.jsx)("div", {
      className: l()(s.iv, {
        [s.yF]: t > r - 1
      }),
      children: (0, n.jsx)(a.Text, {
        className: s.ph,
        variant: "code",
        color: "text-default",
        children: e
      })
    }, "".concat(e, "-").concat(t)))
  })
}