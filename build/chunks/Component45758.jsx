/** Chunk was on 28636 **/
/** chunk id: 45758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk650964 = require("./650964.js");
let c = function(e) {
  let {
    tabs: t,
    onTabSelect: n,
    selectedTab: a,
    className: c
  } = e;
  return (0, l.jsx)(i.VQ0, {
    type: "top-pill",
    selectedItem: a,
    onItemSelect: n,
    className: c,
    children: t.map((e, t) => {
      let {
        id: n,
        label: a,
        count: c
      } = e;
      return (0, l.jsx)(i.VQ0.Item, {
        id: n,
        className: r()(s.V, {
          [s.r]: 0 === t
        }),
        "aria-label": a,
        children: null != c && c > 0 ? "".concat(a, " (").concat(c, ")") : a
      }, n)
    })
  })
}