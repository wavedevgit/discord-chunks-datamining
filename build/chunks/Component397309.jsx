/** Chunk was on 59275 **/
/** chunk id: 397309, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    handleTransition: t,
    onClose: l
  } = e, s = (0, o.y)("CollectiblesIndexPageContextMenu"), f = r.useMemo(() => [{
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
  return (0, n.jsx)("div", {
    className: a()({
      [d.T3]: s
    }),
    children: (0, n.jsx)(i.W1t, {
      navId: "collectibles-index-page-menu",
      className: a()({
        [d.T3]: s
      }),
      onClose: l,
      "aria-label": u.intl.string(u.t.xFcotU),
      onSelect: () => {},
      children: f.map(e => (0, n.jsx)(i.Drp, {
        id: e.value,
        label: e.label,
        action: () => {
          t(e.value)
        }
      }, e.value))
    })
  })
}