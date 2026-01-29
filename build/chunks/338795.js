/** Chunk was on 4670 **/
/** chunk id: 338795, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  J: () => m
});
var Chunk934551 = require("./934551.js"),
  Chunk98207 = require("./98207.js"),
  Chunk631670 = require("./631670.js"),
  Chunk419954 = require("./419954.js"),
  Chunk576622 = require("./576622.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk782844 = require("./782844.jsx"),
  Chunk828797 = require("./828797.js"),
  Chunk611478 = require("./611478.jsx"),
  Chunk402089 = require("./402089.jsx"),
  Chunk281225 = require("./281225.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let C = (0, Chunk419954.dT)(Chunk780964.X.ACCOUNT_STANDING_TAB, {
    getTitle: () => O.intl.string(O.t["Vov/9o"]),
    onItemSelect: () => {
      o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
        target_tab_name: c.D.STANDING
      })
    },
    buildLayout: () => [E.Q]
  }),
  N = (0, Chunk419954.dT)(Chunk780964.X.ACCOUNT_SECURITY_TAB, {
    getTitle: () => O.intl.string(O.t.Am9YHi),
    onItemSelect: () => {
      o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
        target_tab_name: c.D.SECURITY
      })
    },
    buildLayout: () => [S.P, A.o, _.s]
  }),
  b = (0, Chunk419954.t_)(Chunk780964.X.ACCOUNT_PANEL, {
    useTitle: () => O.intl.string(O.t["JAIM/m"]),
    initialize: function() {
      let e = u.default.getCurrentUser();
      return null != e && (0, a.A)(e.id, e.getAvatarURL(true, 80)), () => {
        l.A.clearBackupCodes(), (0, s.Uo)()
      }
    },
    hideInStreamerMode: true,
    buildLayout: () => [N, C]
  }),
  p = (0, Chunk419954.t_)(Chunk780964.X.ACCOUNT_PANEL, {
    useTitle: () => O.intl.string(O.t["JAIM/m"]),
    StronglyDiscouragedCustomComponent: Chunk782844.A,
    buildLayout: () => []
  }),
  m = (0, Chunk419954.i4)(Chunk780964.X.ACCOUNT_SIDEBAR_ITEM, {
    useTitle: () => O.intl.string(O.t["JAIM/m"]),
    getLegacySearchKey: () => (0, T.WJ)("AccountPanel") ? true : g.H.ACCOUNT,
    icon: Chunk934551.UserIcon,
    buildLayout: () => (0, T.WJ)("AccountPanel") ? [b] : [p]
  })