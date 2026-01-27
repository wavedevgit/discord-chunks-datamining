/** Chunk was on 28979 **/
/** chunk id: 863671, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  $: () => O
});
var Chunk64700 = require("./64700.js"),
  Chunk934551 = require("./934551.js"),
  Chunk554146 = require("./554146.js"),
  Chunk200921 = require("./200921.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk119762 = require("./119762.jsx"),
  Chunk119695 = require("./119695.js"),
  Chunk766761 = require("./766761.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let g = (0, Chunk419954.zZ)(Chunk780964.X.SESSIONS_CATEGORY, {
    buildLayout: () => [d.I, S.A],
    initialize: () => ((0, r.GY)(), () => {
      (0, r.ZQ)()
    }),
    useInlineNotice: function() {
      return n.useMemo(() => ({
        type: a.W.STRONGLY_DISCOURAGED_CUSTOM,
        notice: A.jH
      }), [])
    }
  }),
  c = (0, Chunk419954.t_)(Chunk780964.X.SESSIONS_PANEL, {
    usePredicate: () => !(0, T.dk)("LegacySessionsPanel"),
    useTitle: () => _.intl.string(_.t["+1h0k/"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk119762.Ay,
    buildLayout: () => []
  }),
  I = (0, Chunk419954.t_)(Chunk780964.X.SESSIONS_PANEL, {
    usePredicate: () => (0, T.dk)("SessionsPanel"),
    useTitle: () => _.intl.string(_.t["+1h0k/"]),
    hideInStreamerMode: true,
    buildLayout: () => [g]
  }),
  O = (0, Chunk419954.i4)(Chunk780964.X.SESSIONS_SIDEBAR_ITEM, {
    useTitle: () => _.intl.string(_.t["+1h0k/"]),
    getLegacySearchKey: () => (0, T.WJ)("SessionsPanel") ? true : E.H.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
    icon: Chunk934551.LaptopPhoneIcon,
    trailing: {
      type: Chunk933297.S.BADGE_NEW,
      getDismissibleContentTypes: () => [s.M.AUTH_SESSIONS_NEW]
    },
    buildLayout: () => (0, T.WJ)("SessionsPanel") ? [I] : [c]
  })