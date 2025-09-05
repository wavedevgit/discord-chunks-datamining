/** Chunk was on 52432 **/
/** chunk id: 572539, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk728431 = require("./728431.js");

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