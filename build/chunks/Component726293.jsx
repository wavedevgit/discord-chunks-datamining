/** Chunk was on web.js **/
/** chunk id: 726293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk60809 = require("./60809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk502573 = require("./502573.js");

function u(e) {
  let {
    sortOrder: t,
    onSortOptionClick: n,
    closePopout: i
  } = e, u = e => {
    n(e), i()
  };
  return (0, r.jsx)("div", {
    className: a()(o.Wx, c.k),
    children: (0, r.jsx)(s.W1t, {
      "data-menu-migrated": true,
      navId: "command-list-sort",
      "aria-label": l.intl.string(l.t.Ugo9ud),
      hideScroller: true,
      onClose: i,
      onSelect: i,
      children: (0, r.jsxs)(s.rXV, {
        label: l.intl.string(l.t.yeYaHf),
        children: [(0, r.jsx)(s.iDA, {
          id: "sort-by-popular",
          group: "sort-by",
          label: l.intl.string(l.t.SzxiqK),
          action: () => u(o.Ug.POPULAR),
          checked: t === o.Ug.POPULAR
        }), (0, r.jsx)(s.iDA, {
          id: "sort-by-alphabetical",
          group: "sort-by",
          label: l.intl.string(l.t.m8xsti),
          action: () => u(o.Ug.ALPHABETICAL),
          checked: t === o.Ug.ALPHABETICAL
        })]
      })
    })
  })
}