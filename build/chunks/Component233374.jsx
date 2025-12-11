/** Chunk was on 92504 **/
/** chunk id: 233374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk753078 = require("./753078.js");
let o = function(e) {
  let {
    tabs: t,
    onTabSelect: n,
    selectedTab: r,
    className: o
  } = e;
  return (0, a.jsx)(l.njP, {
    type: "top-pill",
    selectedItem: r,
    onItemSelect: n,
    className: o,
    children: t.map((e, t) => {
      let {
        id: n,
        label: r,
        count: o
      } = e;
      return (0, a.jsx)(l.njP.Item, {
        id: n,
        className: i()(s.tabItem, {
          [s.firstChildSpacingFix]: 0 === t
        }),
        "aria-label": r,
        children: null != o && o > 0 ? "".concat(r, " (").concat(o, ")") : r
      }, n)
    })
  })
}