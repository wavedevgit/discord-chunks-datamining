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
    className: c
  } = e, i = o.useMemo(() => ({
    "--secure-frames-columns": r
  }), [r]);
  return null == t ? (0, n.jsx)("div", {
    className: a.Lq,
    children: (0, n.jsx)(s.y$y, {})
  }) : (0, n.jsx)("div", {
    style: i,
    className: l()(a.aY, c),
    children: t.map((e, t) => (0, n.jsx)("div", {
      className: l()(a.iv, {
        [a.yF]: t > r - 1
      }),
      children: (0, n.jsx)(s.Text, {
        className: a.ph,
        variant: "code",
        color: "text-default",
        children: e
      })
    }, "".concat(e, "-").concat(t)))
  })
}