/** Chunk was on 28979 **/
/** chunk id: 728699, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  T: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk934551 = require("./934551.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk834981 = require("./834981.js"),
  Chunk793998 = require("./793998.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk264474 = require("./264474.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842130 = require("./842130.js");
let c = (0, Chunk419954.t_)(Chunk780964.X.FAMILY_CENTER_PANEL, {
    usePredicate: () => !(0, A.dk)("LegacyFamilyCenterPanel"),
    useTitle: () => g.intl.string(_.default.RZqaJn),
    StronglyDiscouragedCustomComponent: Chunk793998.p,
    buildLayout: () => []
  }),
  I = (0, Chunk419954.t_)(Chunk780964.X.FAMILY_CENTER_PANEL, {
    usePredicate: () => (0, A.dk)("FamilyCenterPanel"),
    useTitle: () => g.intl.string(_.default.RZqaJn),
    buildLayout: () => [S.g]
  }),
  O = (0, Chunk419954.i4)(Chunk780964.X.FAMILY_CENTER_SIDEBAR_ITEM, {
    useTitle: () => g.intl.string(_.default.RZqaJn),
    getLegacySearchKey: () => (0, A.WJ)("FamilyCenterPanel") ? true : E.H.PRIVACY_FAMILY_CENTER,
    icon: Chunk934551.GroupIcon,
    trailing: {
      type: Chunk933297.S.STRONGLY_DISCOURAGED_CUSTOM,
      getDismissibleContentTypes: () => [s.M.FAMILY_CENTER_NEW_BADGE],
      useCustomDecoration: function(t) {
        let e = (0, u.VT)();
        return t === s.M.FAMILY_CENTER_NEW_BADGE ? (0, n.jsx)(r.LpS, {
          text: g.intl.string(g.t.y2b7CA)
        }) : e > 0 ? (0, n.jsx)(r.hVq, {
          count: e
        }) : null
      }
    },
    buildLayout: () => (0, A.WJ)("FamilyCenterPanel") ? [I] : [c]
  })