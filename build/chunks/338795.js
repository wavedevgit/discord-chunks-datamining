/** Chunk was on 28979 **/
/** chunk id: 338795, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  J: () => D
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
let N = (0, Chunk419954.dT)(Chunk780964.X.ACCOUNT_STANDING_TAB, {
    getTitle: () => O.intl.string(O.t["Vov/9o"]),
    onItemSelect: () => {
      o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
        target_tab_name: d.D.STANDING
      })
    },
    buildLayout: () => [g.Q]
  }),
  C = (0, Chunk419954.dT)(Chunk780964.X.ACCOUNT_SECURITY_TAB, {
    getTitle: () => O.intl.string(O.t.Am9YHi),
    onItemSelect: () => {
      o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
        target_tab_name: d.D.SECURITY
      })
    },
    buildLayout: () => [E.P, S.o, _.s]
  }),
  L = (0, Chunk419954.t_)(Chunk780964.X.ACCOUNT_PANEL, {
    useTitle: () => O.intl.string(O.t["JAIM/m"]),
    initialize: function() {
      let t = a.default.getCurrentUser();
      return null != t && (0, u.A)(t.id, t.getAvatarURL(true, 80)), () => {
        l.A.clearBackupCodes(), (0, s.Uo)()
      }
    },
    hideInStreamerMode: true,
    buildLayout: () => [C, N]
  }),
  b = (0, Chunk419954.t_)(Chunk780964.X.ACCOUNT_PANEL, {
    useTitle: () => O.intl.string(O.t["JAIM/m"]),
    StronglyDiscouragedCustomComponent: Chunk782844.A,
    buildLayout: () => []
  }),
  D = (0, Chunk419954.i4)(Chunk780964.X.ACCOUNT_SIDEBAR_ITEM, {
    useTitle: () => O.intl.string(O.t["JAIM/m"]),
    getLegacySearchKey: () => (0, A.WJ)("AccountPanel") ? true : c.H.ACCOUNT,
    icon: Chunk934551.UserIcon,
    buildLayout: () => (0, A.WJ)("AccountPanel") ? [L] : [b]
  })