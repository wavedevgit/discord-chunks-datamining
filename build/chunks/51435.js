/** Chunk was on 77069 **/
/** chunk id: 51435, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  J: () => O
});
var Chunk657707 = require("./657707.js"),
  Chunk704215 = require("./704215.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk327192 = require("./327192.jsx"),
  Chunk984975 = require("./984975.js"),
  Chunk105429 = require("./105429.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk509613.k4)(Chunk313789.n.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
    buildLayout: () => [Chunk984975.u]
  }),
  E = (0, Chunk509613.k4)(Chunk313789.n.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, {
    buildLayout: () => [Chunk105429.T]
  }),
  I = (0, Chunk509613.wf)(Chunk313789.n.CONNECTIONS_PANEL, {
    usePredicate: () => !(0, Chunk526665.gN)("LegacyConnectionsPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["3fe7U5"]),
    StronglyDiscouragedCustomComponent: Chunk327192.ZP,
    buildLayout: () => []
  }),
  _ = (0, Chunk509613.wf)(Chunk313789.n.CONNECTIONS_PANEL, {
    usePredicate: () => (0, Chunk526665.gN)("ConnectionsPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["3fe7U5"]),
    buildLayout: () => [g, E]
  }),
  O = (0, Chunk509613.m7)(Chunk313789.n.CONNECTIONS_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["3fe7U5"]),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("ConnectionsPanel") ? true : Chunk726985.s6.CONNECTIONS,
    icon: Chunk657707.xPt,
    trailing: {
      type: Chunk970013.W.BADGE_NEW,
      getDismissibleContentTypes: () => [Chunk704215.z.NEW_CRUNCHYROLL_CONNECTION]
    },
    buildLayout: () => (0, Chunk526665.Gl)("ConnectionsPanel") ? [_] : [I]
  })