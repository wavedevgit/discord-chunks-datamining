/** Chunk was on 59275 **/
/** chunk id: 397309, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk938191 = require("./938191.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk816917 = require("./816917.js");

function g(e) {
  let {
    handleTransition: t,
    onClose: n
  } = e, s = (0, o.y)("CollectiblesIndexPageContextMenu"), g = l.useMemo(() => [{
    label: u.intl.string(u.t.dRZYNE),
    value: c.G2.AVATAR_DECORATIONS
  }, {
    label: u.intl.string(u.t["1cNjtx"]),
    value: c.G2.PROFILE_EFFECTS
  }, {
    label: u.intl.string(u.t.V68Fqz),
    value: c.G2.NAMEPLATES
  }, {
    label: u.intl.string(u.t.FYFpps),
    value: c.G2.BUNDLES
  }, {
    label: u.intl.string(u.t.xFcotU),
    value: c.G2.CATALOG
  }], []);
  return (0, r.jsx)("div", {
    className: a()({
      [d.T3]: s
    }),
    children: (0, r.jsx)(i.W1t, {
      "data-menu-needs-migration": true,
      navId: "collectibles-index-page-menu",
      className: a()({
        [d.T3]: s
      }),
      onClose: n,
      "aria-label": u.intl.string(u.t.xFcotU),
      onSelect: () => {},
      children: g.map(e => (0, r.jsx)(i.Drp, {
        id: e.value,
        label: e.label,
        action: () => {
          t(e.value)
        }
      }, e.value))
    })
  })
}