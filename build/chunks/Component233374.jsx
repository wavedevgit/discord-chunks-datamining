/** Chunk was on 69844 **/
/** chunk id: 233374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk538719 = require("./538719.js");
let o = function(e) {
  let {
    tabs: t,
    onTabSelect: n,
    selectedTab: i,
    className: o
  } = e;
  return (0, r.jsx)(l.njP, {
    type: "top-pill",
    selectedItem: i,
    onItemSelect: n,
    className: o,
    children: t.map((e, t) => {
      let {
        id: n,
        label: i,
        count: o
      } = e;
      return (0, r.jsx)(l.njP.Item, {
        id: n,
        className: a()(s.tabItem, {
          [s.firstChildSpacingFix]: 0 === t
        }),
        "aria-label": i,
        children: null != o && o > 0 ? "".concat(i, " (").concat(o, ")") : i
      }, n)
    })
  })
}