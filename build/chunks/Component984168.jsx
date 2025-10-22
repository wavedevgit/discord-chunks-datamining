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
  Chunk728384 = require("./728384.js");

function u(e) {
  let {
    sortOrder: t,
    onSortOptionClick: n,
    closePopout: l
  } = e, u = e => {
    n(e), l()
  };
  return (0, i.jsx)("div", {
    className: r()(o.Jh, c.container),
    children: (0, i.jsx)(a.v2r, {
      navId: "command-list-sort",
      "aria-label": s.intl.string(s.t.Ugo9ud),
      hideScroller: true,
      onClose: l,
      onSelect: l,
      children: (0, i.jsxs)(a.kSQ, {
        label: s.intl.string(s.t.yeYaHf),
        children: [(0, i.jsx)(a.k5B, {
          id: "sort-by-popular",
          group: "sort-by",
          label: s.intl.string(s.t.SzxiqK),
          action: () => u(o.bS.POPULAR),
          checked: t === o.bS.POPULAR
        }), (0, i.jsx)(a.k5B, {
          id: "sort-by-alphabetical",
          group: "sort-by",
          label: s.intl.string(s.t.m8xsti),
          action: () => u(o.bS.ALPHABETICAL),
          checked: t === o.bS.ALPHABETICAL
        })]
      })
    })
  })
}