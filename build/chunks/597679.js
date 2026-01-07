/** Chunk was on 77069 **/
/** chunk id: 597679, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  w: () => E
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk595242 = require("./595242.jsx"),
  Chunk904822 = require("./904822.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.wf)(Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
    usePredicate: () => !(0, u.gN)("LegacyPremiumGuildSubscriptionsPanel"),
    useTitle: () => T.intl.string(T.t["+CbP2v"]),
    StronglyDiscouragedCustomComponent: Chunk595242.Z,
    buildLayout: () => []
  }),
  c = (0, Chunk509613.wf)(Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
    usePredicate: () => (0, u.gN)("PremiumGuildSubscriptionsPanel"),
    useTitle: () => T.intl.string(T.t["+CbP2v"]),
    buildLayout: () => [a.L]
  }),
  E = (0, Chunk509613.m7)(Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
    useTitle: () => T.intl.string(T.t["+CbP2v"]),
    getLegacySearchKey: () => (0, u.Gl)("PremiumGuildSubscriptionsPanel") ? true : o.s6.GUILD_BOOSTING,
    icon: Chunk657707.Ucv,
    buildLayout: () => (0, u.Gl)("PremiumGuildSubscriptionsPanel") ? [c] : [S]
  })