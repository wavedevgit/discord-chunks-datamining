/** Chunk was on 4670 **/
/** chunk id: 883967, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  J: () => _
});
var Chunk934551 = require("./934551.js"),
  Chunk824552 = require("./824552.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk891912 = require("./891912.jsx"),
  Chunk993470 = require("./993470.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let c = (0, Chunk419954.zZ)(Chunk780964.X.AUTHORIZED_APPS_CATEGORY, {
    buildLayout: () => [o.C],
    initialize: () => (l.A.fetch(), () => {
      u.iU.setState({
        searchQuery: ""
      })
    })
  }),
  A = (0, Chunk419954.t_)(Chunk780964.X.AUTHORIZED_APPS_PANEL, {
    usePredicate: () => !(0, a.dk)("LegacyAuthorizedAppsPanel"),
    useTitle: () => T.intl.string(T.t["f6kk+r"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk891912.Ay,
    buildLayout: () => []
  }),
  S = (0, Chunk419954.t_)(Chunk780964.X.AUTHORIZED_APPS_PANEL, {
    usePredicate: () => (0, a.dk)("AuthorizedAppsPanel"),
    useTitle: () => T.intl.string(T.t["f6kk+r"]),
    hideInStreamerMode: true,
    buildLayout: () => [c]
  }),
  _ = (0, Chunk419954.i4)(Chunk780964.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
    useTitle: () => T.intl.string(T.t["f6kk+r"]),
    getLegacySearchKey: () => (0, a.WJ)("AuthorizedAppsPanel") ? true : d.H.AUTHORIZED_APPS,
    icon: Chunk934551.AppsIcon,
    buildLayout: () => (0, a.WJ)("AuthorizedAppsPanel") ? [S] : [A]
  })