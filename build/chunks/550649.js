/** Chunk was on 4670 **/
/** chunk id: 550649, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  z: () => I
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
let S = (0, Chunk419954.zZ)(Chunk780964.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
    buildLayout: () => [d.l]
  }),
  _ = (0, Chunk419954.zZ)(Chunk780964.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, {
    buildLayout: () => [T.W]
  }),
  E = (0, Chunk419954.t_)(Chunk780964.X.CONNECTIONS_PANEL, {
    usePredicate: () => !(0, u.dk)("LegacyConnectionsPanel"),
    useTitle: () => A.intl.string(A.t["3fe7U5"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk75698.Ay,
    buildLayout: () => []
  }),
  g = (0, Chunk419954.t_)(Chunk780964.X.CONNECTIONS_PANEL, {
    usePredicate: () => (0, u.dk)("ConnectionsPanel"),
    useTitle: () => A.intl.string(A.t["3fe7U5"]),
    hideInStreamerMode: true,
    buildLayout: () => [S, _]
  }),
  I = (0, Chunk419954.i4)(Chunk780964.X.CONNECTIONS_SIDEBAR_ITEM, {
    useTitle: () => A.intl.string(A.t["3fe7U5"]),
    getLegacySearchKey: () => (0, u.WJ)("ConnectionsPanel") ? true : c.H.CONNECTIONS,
    icon: Chunk934551.LinkIcon,
    trailing: {
      type: Chunk933297.S.BADGE_NEW,
      getDismissibleContentTypes: () => [l.M.NEW_CRUNCHYROLL_CONNECTION]
    },
    buildLayout: () => (0, u.WJ)("ConnectionsPanel") ? [g] : [E]
  })