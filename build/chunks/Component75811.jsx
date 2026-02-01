/** Chunk was on 61344 **/
/** chunk id: 75811, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk200063 = require("./200063.js");

function c(e) {
  let {
    chunks: t,
    columns: n,
    className: i
  } = e, c = r.useMemo(() => ({
    "--secure-frames-columns": n
  }), [n]);
  return null == t ? (0, l.jsx)("div", {
    className: o.Lq,
    children: (0, l.jsx)(s.y$y, {})
  }) : (0, l.jsx)("div", {
    style: c,
    className: a()(o.aY, i),
    children: t.map((e, t) => (0, l.jsx)("div", {
      className: a()(o.iv, {
        [o.yF]: t > n - 1
      }),
      children: (0, l.jsx)(s.Text, {
        className: o.ph,
        variant: "code",
        color: "text-default",
        children: e
      })
    }, "".concat(e, "-").concat(t)))
  })
}