/** Chunk was on 96888 **/
/** chunk id: 572539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk824482 = require("./824482.js");

function u(e) {
  let {
    options: t,
    onClick: n,
    className: l,
    hideCaret: u
  } = e;
  return (0, a.jsx)("div", {
    className: i()(s.root, l),
    children: t.map((e, t) => (0, a.jsxs)(r.P3F, {
      onClick: () => n(e),
      className: i()(s.option, e.className),
      children: [(0, a.jsx)(r.Text, {
        className: s.text,
        color: "none",
        variant: "text-md/normal",
        children: e.label
      }), !(null == u ? true : u(e)) && (0, a.jsx)(o.Z, {
        className: s.caret,
        direction: o.Z.Directions.RIGHT
      })]
    }, t))
  })
}