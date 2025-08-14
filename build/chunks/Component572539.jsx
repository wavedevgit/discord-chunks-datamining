/** Chunk was on 52432 **/
/** chunk id: 572539, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk824482 = require("./824482.js");

function s(e) {
  let {
    options: t,
    onClick: a,
    className: i,
    hideCaret: s
  } = e;
  return (0, n.jsx)("div", {
    className: o()(l.root, i),
    children: t.map((e, t) => (0, n.jsxs)(r.P3F, {
      onClick: () => a(e),
      className: o()(l.option, e.className),
      children: [(0, n.jsx)(r.Text, {
        className: l.text,
        color: "none",
        variant: "text-md/normal",
        children: e.label
      }), !(null == s ? true : s(e)) && (0, n.jsx)(c.Z, {
        className: l.caret,
        direction: c.Z.Directions.RIGHT
      })]
    }, t))
  })
}