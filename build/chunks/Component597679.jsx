/** Chunk was on 77069 **/
/** chunk id: 597679, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  w: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk595242 = require("./595242.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANE, {
    render: () => (0, Chunk54381.jsx)(Chunk595242.Z, {}),
    buildLayout: () => []
  }),
  d = (0, Chunk509613.wf)(Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+CbP2v"]),
    buildLayout: () => [c]
  }),
  E = (0, Chunk509613.m7)(Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+CbP2v"]),
    getLegacySearchKey: () => Chunk726985.s6.GUILD_BOOSTING,
    icon: Chunk657707.Ucv,
    buildLayout: () => [d]
  })