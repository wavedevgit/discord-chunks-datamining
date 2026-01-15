/** Chunk was on 77069 **/
/** chunk id: 51435, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  J: () => A
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
let d = (0, Chunk509613.k4)(Chunk313789.n.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
    buildLayout: () => [T.u]
  }),
  _ = (0, Chunk509613.k4)(Chunk313789.n.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, {
    buildLayout: () => [S.T]
  }),
  g = (0, Chunk509613.wf)(Chunk313789.n.CONNECTIONS_PANEL, {
    usePredicate: () => !(0, a.gN)("LegacyConnectionsPanel"),
    useTitle: () => E.intl.string(E.t["3fe7U5"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk327192.ZP,
    buildLayout: () => []
  }),
  I = (0, Chunk509613.wf)(Chunk313789.n.CONNECTIONS_PANEL, {
    usePredicate: () => (0, a.gN)("ConnectionsPanel"),
    useTitle: () => E.intl.string(E.t["3fe7U5"]),
    hideInStreamerMode: true,
    buildLayout: () => [d, _]
  }),
  A = (0, Chunk509613.m7)(Chunk313789.n.CONNECTIONS_SIDEBAR_ITEM, {
    useTitle: () => E.intl.string(E.t["3fe7U5"]),
    getLegacySearchKey: () => (0, a.Gl)("ConnectionsPanel") ? true : c.s6.CONNECTIONS,
    icon: Chunk657707.LinkIcon,
    trailing: {
      type: Chunk970013.W.BADGE_NEW,
      getDismissibleContentTypes: () => [l.z.NEW_CRUNCHYROLL_CONNECTION]
    },
    buildLayout: () => (0, a.Gl)("ConnectionsPanel") ? [I] : [g]
  })