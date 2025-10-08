/** Chunk was on 69844 **/
/** chunk id: 233374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk538719 = require("./538719.js");
let o = function(e) {
  let {
    tabs: t,
    onTabSelect: n,
    selectedTab: a,
    className: o
  } = e;
  return (0, r.jsx)(l.njP, {
    type: "top-pill",
    selectedItem: a,
    onItemSelect: n,
    className: o,
    children: t.map((e, t) => {
      let {
        id: n,
        label: a,
        count: o
      } = e;
      return (0, r.jsx)(l.njP.Item, {
        id: n,
        className: i()(s.tabItem, {
          [s.firstChildSpacingFix]: 0 === t
        }),
        "aria-label": a,
        children: null != o && o > 0 ? "".concat(a, " (").concat(o, ")") : a
      }, n)
    })
  })
}