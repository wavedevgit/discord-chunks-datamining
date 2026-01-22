/** Chunk was on 28979 **/
/** chunk id: 830842, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  _: () => E
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk69435 = require("./69435.jsx"),
  Chunk945353 = require("./945353.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.t_)(Chunk780964.X.ADVANCED_PANEL, {
    useTitle: () => T.intl.string(T.t["8/udY0"]),
    usePredicate: () => !(0, r.dk)("LegacyAdvancedPanel"),
    StronglyDiscouragedCustomComponent: Chunk69435.Ay,
    buildLayout: () => []
  }),
  S = (0, Chunk419954.t_)(Chunk780964.X.ADVANCED_PANEL, {
    useTitle: () => T.intl.string(T.t["8/udY0"]),
    usePredicate: () => (0, r.dk)("AdvancedPanel"),
    buildLayout: () => [a.J]
  }),
  E = (0, Chunk419954.i4)(Chunk780964.X.ADVANCED_SIDEBAR_ITEM, {
    useTitle: () => T.intl.string(T.t["8/udY0"]),
    getLegacySearchKey: () => (0, r.WJ)("AdvancedPanel") ? true : o.H.SETTINGS_ADVANCED,
    icon: Chunk934551.MoreHorizontalIcon,
    buildLayout: () => (0, r.WJ)("AdvancedPanel") ? [S] : [A]
  })