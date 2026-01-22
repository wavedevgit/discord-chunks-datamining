/** Chunk was on 46717 **/
/** chunk id: 889229, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk186261 = require("./186261.js");

function o(t) {
  let {
    tips: e,
    className: n,
    headerText: i
  } = t;
  return (0, s.jsxs)("div", {
    className: l()(a.iB, n),
    children: [(0, s.jsx)("div", {
      className: a.oO,
      children: (0, s.jsx)(r.Heading, {
        variant: "heading-lg/bold",
        className: a.TK,
        children: i
      })
    }), (0, s.jsx)("ul", {
      className: a.T6,
      children: e.map((t, e) => (0, s.jsxs)("li", {
        className: a.eL,
        children: [(0, s.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: a.VX,
          children: e + 1
        }), (0, s.jsx)(r.Text, {
          variant: "text-sm/medium",
          children: t
        })]
      }, "safety-tips-".concat(e)))
    })]
  })
}