/** Chunk was on 94904 **/
/** chunk id: 785792, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk135169 = require("./135169.js");

function s(e) {
  let {
    chunks: t,
    columns: r,
    className: c
  } = e, s = o.useMemo(() => ({
    "--secure-frames-columns": r
  }), [r]);
  return null == t ? (0, n.jsx)("div", {
    className: a.loading,
    children: (0, n.jsx)(l.$jN, {})
  }) : (0, n.jsx)("div", {
    style: s,
    className: i()(a.code, c),
    children: t.map((e, t) => (0, n.jsx)("div", {
      className: i()(a.chunk, {
        [a.divider]: t > r - 1
      }),
      children: (0, n.jsx)(l.Text, {
        className: a.codeText,
        variant: "code",
        color: "text-default",
        children: e
      })
    }, "".concat(e, "-").concat(t)))
  })
}