/** Chunk was on 95095 **/
/** chunk id: 124480, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk317498 = require("./317498.js");

function o(e) {
  let {
    options: t,
    onClick: a,
    className: c,
    hideCaret: o
  } = e;
  return (0, n.jsx)("div", {
    className: i()(s.zr, c),
    children: t.map((e, t) => (0, n.jsxs)(l.DUT, {
      onClick: () => a(e),
      className: i()(s.uK, e.className),
      children: [(0, n.jsx)(l.Text, {
        className: s.Qq,
        color: "none",
        variant: "text-md/normal",
        children: e.label
      }), !(null == o ? true : o(e)) && (0, n.jsx)(r.A, {
        className: s.OW,
        direction: r.A.Directions.RIGHT
      })]
    }, t))
  })
}