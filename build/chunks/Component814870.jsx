/** Chunk was on 28979 **/
/** chunk id: 814870, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  u: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk611371 = require("./611371.jsx"),
  Chunk757036 = require("./757036.js"),
  Chunk967370 = require("./967370.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk780964 = require("./780964.js"),
  Chunk368631 = require("./368631.jsx"),
  Chunk410166 = require("./410166.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk895431 = require("./895431.js");
let I = (0, Chunk419954.t_)(Chunk780964.X.PRIVATE_BROWSING_PANEL, {
    useTitle: () => d.intl.string(_.default.UAA4V5),
    useBadge: () => (0, n.jsx)(s.A, {}),
    buildLayout: () => [E.r]
  }),
  g = (0, Chunk419954.i4)(Chunk780964.X.PRIVATE_BROWSING_SIDEBAR_ITEM, {
    useTitle: () => d.intl.string(_.default.UAA4V5),
    icon: Chunk934551.GlobeEarthIcon,
    usePredicate: () => {
      let t = (0, r.L)(),
        {
          isSupportedPrivateBrowsingPerkPlatform: e,
          isWeb: i,
          perkAvailableToUser: n
        } = (0, a.lV)();
      return (0, u.lM)("private_browsing_perk_settings_page") && (e || i) && (!t || n)
    },
    buildLayout: () => [I],
    trailing: {
      type: Chunk933297.S.BADGE_NEW,
      getDismissibleContentTypes: Chunk368631.Tq
    }
  })