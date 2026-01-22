/** Chunk was on 28979 **/
/** chunk id: 883967, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  J: () => _
});
var Chunk934551 = require("./934551.js"),
  Chunk824552 = require("./824552.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk891912 = require("./891912.jsx"),
  Chunk993470 = require("./993470.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let S = (0, Chunk419954.zZ)(Chunk780964.X.AUTHORIZED_APPS_CATEGORY, {
    buildLayout: () => [o.C],
    initialize: () => (l.A.fetch(), () => {
      a.iU.setState({
        searchQuery: ""
      })
    })
  }),
  E = (0, Chunk419954.t_)(Chunk780964.X.AUTHORIZED_APPS_PANEL, {
    usePredicate: () => !(0, u.dk)("LegacyAuthorizedAppsPanel"),
    useTitle: () => A.intl.string(A.t["f6kk+r"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk891912.Ay,
    buildLayout: () => []
  }),
  d = (0, Chunk419954.t_)(Chunk780964.X.AUTHORIZED_APPS_PANEL, {
    usePredicate: () => (0, u.dk)("AuthorizedAppsPanel"),
    useTitle: () => A.intl.string(A.t["f6kk+r"]),
    hideInStreamerMode: true,
    buildLayout: () => [S]
  }),
  _ = (0, Chunk419954.i4)(Chunk780964.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
    useTitle: () => A.intl.string(A.t["f6kk+r"]),
    getLegacySearchKey: () => (0, u.WJ)("AuthorizedAppsPanel") ? true : T.H.AUTHORIZED_APPS,
    icon: Chunk934551.AppsIcon,
    buildLayout: () => (0, u.WJ)("AuthorizedAppsPanel") ? [d] : [E]
  })