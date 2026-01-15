/** Chunk was on 77069 **/
/** chunk id: 419477, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  z: () => N
});
var Chunk657707 = require("./657707.js"),
  Chunk725727 = require("./725727.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk387747 = require("./387747.jsx"),
  Chunk12025 = require("./12025.js"),
  Chunk501419 = require("./501419.js"),
  Chunk874235 = require("./874235.js"),
  Chunk435342 = require("./435342.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk509613.k4)(Chunk313789.n.GIFT_INVENTORY_CATEGORY, {
    buildLayout: () => [T.R, c.n, S.f, E.Y]
  }),
  I = (0, Chunk509613.wf)(Chunk313789.n.GIFT_PANEL, {
    usePredicate: () => !(0, a.gN)("LegacyGiftPanel"),
    useTitle: () => _.intl.string(_.t["jcSP+g"]),
    StronglyDiscouragedCustomComponent: Chunk387747.ZP,
    buildLayout: () => []
  }),
  A = (0, Chunk509613.wf)(Chunk313789.n.GIFT_PANEL, {
    usePredicate: () => (0, a.gN)("GiftPanel"),
    useTitle: () => _.intl.string(_.t["jcSP+g"]),
    buildLayout: () => [g]
  }),
  N = (0, Chunk509613.m7)(Chunk313789.n.GIFT_SIDEBAR_ITEM, {
    useTitle: () => _.intl.string(_.t["jcSP+g"]),
    getLegacySearchKey: () => (0, a.Gl)("GiftPanel") ? true : d.s6.GIFT_INVENTORY,
    icon: Chunk657707.GiftIcon,
    trailing: {
      type: Chunk970013.W.BADGE_COUNT,
      useCount: () => (0, l.YO)().length
    },
    buildLayout: () => (0, a.Gl)("GiftPanel") ? [A] : [I]
  })