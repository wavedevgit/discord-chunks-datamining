/** Chunk was on 84283 **/
/** chunk id: 233374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk954822 = require("./954822.js");
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