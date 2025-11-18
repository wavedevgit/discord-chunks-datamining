/** Chunk was on 89650 **/
/** chunk id: 353672, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk980450 = require("./980450.js");

function o(t) {
  let {
    tips: e,
    className: n,
    headerText: s
  } = t;
  return (0, i.jsxs)("div", {
    className: r()(a.tipsSection, n),
    children: [(0, i.jsx)("div", {
      className: a.tipsHeader,
      children: (0, i.jsx)(l.Heading, {
        variant: "heading-lg/bold",
        className: a.headerText,
        children: s
      })
    }), (0, i.jsx)("ul", {
      className: a.tipsList,
      children: e.map((t, e) => (0, i.jsxs)("li", {
        className: a.tipRow,
        children: [(0, i.jsx)(l.Heading, {
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