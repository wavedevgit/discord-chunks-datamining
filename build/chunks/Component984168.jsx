/** Chunk was on 35755 **/
/** chunk id: 984168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk515188 = require("./515188.js");

function u(e) {
  let {
    sortOrder: t,
    onSortOptionClick: n,
    closePopout: i
  } = e, u = e => {
    n(e), i()
  };
  return (0, l.jsx)("div", {
    className: r()(o.Jh, c.container),
    children: (0, l.jsx)(a.v2r, {
      navId: "command-list-sort",
      "aria-label": s.intl.string(s.t.Ugo9ub),
      hideScroller: true,
      onClose: i,
      onSelect: i,
      children: (0, l.jsxs)(a.kSQ, {
        label: s.intl.string(s.t.yeYaHR),
        children: [(0, l.jsx)(a.k5B, {
          id: "sort-by-popular",
          group: "sort-by",
          label: s.intl.string(s.t.SzxiqK),
          action: () => u(o.bS.POPULAR),
          checked: t === o.bS.POPULAR
        }), (0, l.jsx)(a.k5B, {
          id: "sort-by-alphabetical",
          group: "sort-by",
          label: s.intl.string(s.t.m8xstr),
          action: () => u(o.bS.ALPHABETICAL),
          checked: t === o.bS.ALPHABETICAL
        })]
      })
    })
  })
}