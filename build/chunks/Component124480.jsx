/** Chunk was on 95095 **/
/** chunk id: 124480, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk317498 = require("./317498.js");

function d(a) {
  let {
    options: e,
    onClick: t,
    className: c,
    hideCaret: d
  } = a;
  return (0, n.jsx)("div", {
    className: l()(s.zr, c),
    children: e.map((a, e) => (0, n.jsxs)(i.DUT, {
      onClick: () => t(a),
      className: l()(s.uK, a.className),
      children: [(0, n.jsx)(i.Text, {
        className: s.Qq,
        color: "none",
        variant: "text-md/normal",
        children: a.label
      }), !(null == d ? true : d(a)) && (0, n.jsx)(r.A, {
        className: s.OW,
        direction: r.A.Directions.RIGHT
      })]
    }, e))
  })
}