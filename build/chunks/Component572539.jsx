/** Chunk was on 60137 **/
/** chunk id: 572539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk242953 = require("./242953.js");

function u(e) {
  let {
    options: t,
    onClick: n,
    className: l,
    hideCaret: u
  } = e;
  return (0, a.jsx)("div", {
    className: i()(d.root, l),
    children: t.map((e, t) => (0, a.jsxs)(r.P3F, {
      onClick: () => n(e),
      className: i()(d.option, e.className),
      children: [(0, a.jsx)(r.Text, {
        className: d.text,
        color: "none",
        variant: "text-md/normal",
        children: e.label
      }), !(null == u ? true : u(e)) && (0, a.jsx)(s.Z, {
        className: d.caret,
        direction: s.Z.Directions.RIGHT
      })]
    }, t))
  })
}