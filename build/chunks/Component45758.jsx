/** Chunk was on 28636 **/
/** chunk id: 45758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk650964 = require("./650964.js");
let o = function(e) {
  let {
    tabs: t,
    onTabSelect: n,
    selectedTab: l,
    className: o
  } = e;
  return (0, r.jsx)(a.VQ0, {
    type: "top-pill",
    selectedItem: l,
    onItemSelect: n,
    className: o,
    children: t.map((e, t) => {
      let {
        id: n,
        label: l,
        count: o
      } = e;
      return (0, r.jsx)(a.VQ0.Item, {
        id: n,
        className: i()(s.V, {
          [s.r]: 0 === t
        }),
        "aria-label": l,
        children: null != o && o > 0 ? "".concat(l, " (").concat(o, ")") : l
      }, n)
    })
  })
}