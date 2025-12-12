/** Chunk was on web.js **/
/** chunk id: 984168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  return (0, r.jsx)("div", {
    className: o()(s.Jh, c.container),
    children: (0, r.jsx)(a.v2r, {
      navId: "command-list-sort",
      "aria-label": l.intl.string(l.t.Ugo9ud),
      hideScroller: true,
      onClose: i,
      onSelect: i,
      children: (0, r.jsxs)(a.kSQ, {
        label: l.intl.string(l.t.yeYaHf),
        children: [(0, r.jsx)(a.k5B, {
          id: "sort-by-popular",
          group: "sort-by",
          label: l.intl.string(l.t.SzxiqK),
          action: () => u(s.bS.POPULAR),
          checked: t === s.bS.POPULAR
        }), (0, r.jsx)(a.k5B, {
          id: "sort-by-alphabetical",
          group: "sort-by",
          label: l.intl.string(l.t.m8xsti),
          action: () => u(s.bS.ALPHABETICAL),
          checked: t === s.bS.ALPHABETICAL
        })]
      })
    })
  })
}