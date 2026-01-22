/** Chunk was on 28979 **/
/** chunk id: 550649, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  z: () => c
});
var Chunk934551 = require("./934551.js"),
  Chunk554146 = require("./554146.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk75698 = require("./75698.jsx"),
  Chunk831562 = require("./831562.js"),
  Chunk927631 = require("./927631.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zZ)(Chunk780964.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
    buildLayout: () => [T.l]
  }),
  _ = (0, Chunk419954.zZ)(Chunk780964.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, {
    buildLayout: () => [A.W]
  }),
  I = (0, Chunk419954.t_)(Chunk780964.X.CONNECTIONS_PANEL, {
    usePredicate: () => !(0, a.dk)("LegacyConnectionsPanel"),
    useTitle: () => E.intl.string(E.t["3fe7U5"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk75698.Ay,
    buildLayout: () => []
  }),
  g = (0, Chunk419954.t_)(Chunk780964.X.CONNECTIONS_PANEL, {
    usePredicate: () => (0, a.dk)("ConnectionsPanel"),
    useTitle: () => E.intl.string(E.t["3fe7U5"]),
    hideInStreamerMode: true,
    buildLayout: () => [d, _]
  }),
  c = (0, Chunk419954.i4)(Chunk780964.X.CONNECTIONS_SIDEBAR_ITEM, {
    useTitle: () => E.intl.string(E.t["3fe7U5"]),
    getLegacySearchKey: () => (0, a.WJ)("ConnectionsPanel") ? true : S.H.CONNECTIONS,
    icon: Chunk934551.LinkIcon,
    trailing: {
      type: Chunk933297.S.BADGE_NEW,
      getDismissibleContentTypes: () => [l.M.NEW_CRUNCHYROLL_CONNECTION]
    },
    buildLayout: () => (0, a.WJ)("ConnectionsPanel") ? [g] : [I]
  })