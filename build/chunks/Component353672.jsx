/** Chunk was on 89650 **/
/** chunk id: 353672, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk514923 = require("./514923.js");

function o(t) {
  let {
    tips: e,
    className: n,
    headerText: r
  } = t;
  return (0, i.jsxs)("div", {
    className: s()(a.tipsSection, n),
    children: [(0, i.jsx)("div", {
      className: a.tipsHeader,
      children: (0, i.jsx)(l.X6q, {
        variant: "heading-lg/bold",
        className: a.headerText,
        children: r
      })
    }), (0, i.jsx)("ul", {
      className: a.tipsList,
      children: e.map((t, e) => (0, i.jsxs)("li", {
        className: a.tipRow,
        children: [(0, i.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: a.tipNumber,
          children: e + 1
        }), (0, i.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: t
        })]
      }, "safety-tips-".concat(e)))
    })]
  })
}