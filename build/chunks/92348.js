/** Chunk was on 28979 **/
/** chunk id: 92348, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  w: () => S
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk224515 = require("./224515.jsx"),
  Chunk435757 = require("./435757.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.t_)(Chunk780964.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
    usePredicate: () => !(0, r.dk)("LegacyPremiumGuildSubscriptionsPanel"),
    useTitle: () => T.intl.string(T.t["+CbP2v"]),
    StronglyDiscouragedCustomComponent: Chunk224515.A,
    buildLayout: () => []
  }),
  A = (0, Chunk419954.t_)(Chunk780964.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
    usePredicate: () => (0, r.dk)("PremiumGuildSubscriptionsPanel"),
    useTitle: () => T.intl.string(T.t["+CbP2v"]),
    buildLayout: () => [a.t]
  }),
  S = (0, Chunk419954.i4)(Chunk780964.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
    useTitle: () => T.intl.string(T.t["+CbP2v"]),
    getLegacySearchKey: () => (0, r.WJ)("PremiumGuildSubscriptionsPanel") ? true : o.H.GUILD_BOOSTING,
    icon: Chunk934551.BoostGemIcon,
    buildLayout: () => (0, r.WJ)("PremiumGuildSubscriptionsPanel") ? [A] : [d]
  })