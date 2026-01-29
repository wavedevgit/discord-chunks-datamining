/** Chunk was on 4670 **/
/** chunk id: 949350, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Q: () => O
});
var Chunk934551 = require("./934551.js"),
  Chunk35587 = require("./35587.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk586685 = require("./586685.jsx"),
  Chunk525707 = require("./525707.js"),
  Chunk9653 = require("./9653.js"),
  Chunk473146 = require("./473146.js"),
  Chunk709747 = require("./709747.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let E = (0, Chunk419954.zZ)(Chunk780964.X.GIFT_INVENTORY_CATEGORY, {
    buildLayout: () => [d.V, c.E, T.R, A.Y]
  }),
  g = (0, Chunk419954.t_)(Chunk780964.X.GIFT_PANEL, {
    usePredicate: () => !(0, u.dk)("LegacyGiftPanel"),
    useTitle: () => _.intl.string(_.t["jcSP+g"]),
    StronglyDiscouragedCustomComponent: Chunk586685.Ay,
    buildLayout: () => []
  }),
  I = (0, Chunk419954.t_)(Chunk780964.X.GIFT_PANEL, {
    usePredicate: () => (0, u.dk)("GiftPanel"),
    useTitle: () => _.intl.string(_.t["jcSP+g"]),
    buildLayout: () => [E]
  }),
  O = (0, Chunk419954.i4)(Chunk780964.X.GIFT_SIDEBAR_ITEM, {
    useTitle: () => _.intl.string(_.t["jcSP+g"]),
    getLegacySearchKey: () => (0, u.WJ)("GiftPanel") ? true : S.H.GIFT_INVENTORY,
    icon: Chunk934551.GiftIcon,
    trailing: {
      type: Chunk933297.S.BADGE_COUNT,
      useCount: () => (0, l.IO)().length
    },
    buildLayout: () => (0, u.WJ)("GiftPanel") ? [I] : [g]
  })