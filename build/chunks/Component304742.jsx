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
  } = e, s = (0, o.G)("CollectiblesIndexPageContextMenu"), g = l.useMemo(() => [{
    label: u.intl.string(u.t.dRZYND),
    value: c.AW.AVATAR_DECORATIONS
  }, {
    label: u.intl.string(u.t["1cNjt7"]),
    value: c.AW.PROFILE_EFFECTS
  }, {
    label: u.intl.string(u.t.V68Fq6),
    value: c.AW.NAMEPLATES
  }, {
    label: u.intl.string(u.t.FYFppq),
    value: c.AW.BUNDLES
  }, {
    label: u.intl.string(u.t.xFcotb),
    value: c.AW.CATALOG
  }], []);
  return (0, r.jsx)("div", {
    className: a()({
      [d.shopTakeOver]: s
    }),
    children: (0, r.jsx)(i.v2r, {
      navId: "collectibles-index-page-menu",
      className: a()({
        [d.shopTakeOver]: s
      }),
      onClose: n,
      "aria-label": u.intl.string(u.t.xFcotb),
      onSelect: () => {},
      children: g.map(e => (0, r.jsx)(i.sNh, {
        id: e.value,
        label: e.label,
        action: () => {
          t(e.value)
        }
      }, e.value))
    })
  })
}