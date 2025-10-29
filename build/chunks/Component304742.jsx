/** Chunk was on 45620 **/
/** chunk id: 304742, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345213 = require("./345213.js");

function g(e) {
  let {
    handleTransition: t,
    onClose: n
  } = e, i = (0, o.G)("CollectiblesIndexPageContextMenu"), g = l.useMemo(() => [{
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
      [d.shopTakeOver]: i
    }),
    children: (0, r.jsx)(s.v2r, {
      navId: "collectibles-index-page-menu",
      className: a()({
        [d.shopTakeOver]: i
      }),
      onClose: n,
      "aria-label": u.intl.string(u.t.xFcotU),
      onSelect: () => {},
      children: g.map(e => (0, r.jsx)(s.sNh, {
        id: e.value,
        label: e.label,
        action: () => {
          t(e.value)
        }
      }, e.value))
    })
  })
}