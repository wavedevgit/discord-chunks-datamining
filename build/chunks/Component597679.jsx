/** Chunk was on 9452 **/
/** chunk id: 597679, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  w: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk595242 = require("./595242.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANE, {
    buildLayout: () => [],
    render: () => (0, Chunk951288.jsx)(Chunk595242.Z, {})
  }),
  E = (0, Chunk509613.wf)(Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+CbP2v"]),
    buildLayout: () => [c]
  }),
  S = (0, Chunk509613.m7)(Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
    icon: Chunk657707.Ucv,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+CbP2v"]),
    getLegacySearchKey: () => Chunk726985.s6.GUILD_BOOSTING,
    buildLayout: () => [E]
  })