/** Chunk was on 94904 **/
/** chunk id: 785792, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk840937 = require("./840937.js");

function a(e) {
  let {
    chunks: t,
    columns: r,
    className: c
  } = e, a = o.useMemo(() => ({
    "--secure-frames-columns": r
  }), [r]);
  return null == t ? (0, n.jsx)("div", {
    className: s.loading,
    children: (0, n.jsx)(i.$jN, {})
  }) : (0, n.jsx)("div", {
    style: a,
    className: l()(s.code, c),
    children: t.map((e, t) => (0, n.jsx)("div", {
      className: l()(s.chunk, {
        [s.divider]: t > r - 1
      }),
      children: (0, n.jsx)(i.Text, {
        className: s.codeText,
        variant: "code",
        color: "text-default",
        children: e
      })
    }, "".concat(e, "-").concat(t)))
  })
}