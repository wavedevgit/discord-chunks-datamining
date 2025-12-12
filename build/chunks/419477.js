/** Chunk was on 77069 **/
/** chunk id: 419477, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  z: () => O
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
let I = (0, Chunk509613.k4)(Chunk313789.n.GIFT_INVENTORY_CATEGORY, {
    buildLayout: () => [Chunk12025.R, Chunk874235.n, Chunk501419.f, Chunk435342.Y]
  }),
  _ = (0, Chunk509613.wf)(Chunk313789.n.GIFT_PANEL, {
    usePredicate: () => !(0, Chunk526665.gN)("LegacyGiftPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["jcSP+g"]),
    StronglyDiscouragedCustomComponent: Chunk387747.ZP,
    buildLayout: () => []
  }),
  N = (0, Chunk509613.wf)(Chunk313789.n.GIFT_PANEL, {
    usePredicate: () => (0, Chunk526665.gN)("GiftPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["jcSP+g"]),
    buildLayout: () => [I]
  }),
  O = (0, Chunk509613.m7)(Chunk313789.n.GIFT_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["jcSP+g"]),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("GiftPanel") ? true : Chunk726985.s6.GIFT_INVENTORY,
    icon: Chunk657707.OgN,
    trailing: {
      type: Chunk970013.W.BADGE_COUNT,
      useCount: () => (0, Chunk725727.YO)().length
    },
    buildLayout: () => (0, Chunk526665.Gl)("GiftPanel") ? [N] : [_]
  })