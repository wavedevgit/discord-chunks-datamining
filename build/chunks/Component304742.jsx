/** Chunk was on 45620 **/
/** chunk id: 304742, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk811847 = require("./811847.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk219588 = require("./219588.js");

function f(e) {
  let {
    handleTransition: t,
    onClose: n
  } = e, i = (0, o.B)("CollectiblesIndexPageContextMenu"), f = l.useMemo(() => [{
    label: u.intl.string(u.t.dRZYNE),
    value: c.AW.AVATAR_DECORATIONS
  }, {
    label: u.intl.string(u.t["1cNjtx"]),
    value: c.AW.PROFILE_EFFECTS
  }, {
    label: u.intl.string(u.t.V68Fqz),
    value: c.AW.NAMEPLATES
  }, {
    label: u.intl.string(u.t.FYFpps),
    value: c.AW.BUNDLES
  }, {
    label: u.intl.string(u.t.xFcotU),
    value: c.AW.CATALOG
  }], []);
  return (0, r.jsx)("div", {
    className: a()({
      [d.customCursors]: i
    }),
    children: (0, r.jsx)(s.v2r, {
      navId: "collectibles-index-page-menu",
      className: a()({
        [d.customCursors]: i
      }),
      onClose: n,
      "aria-label": u.intl.string(u.t.xFcotU),
      onSelect: () => {},
      children: f.map(e => (0, r.jsx)(s.sNh, {
        id: e.value,
        label: e.label,
        action: () => {
          t(e.value)
        }
      }, e.value))
    })
  })
}