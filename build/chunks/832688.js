/** Chunk was on 28979 **/
/** chunk id: 832688, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  a: () => E
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk723702 = require("./723702.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk62218 = require("./62218.jsx"),
  Chunk922521 = require("./922521.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.t_)(Chunk780964.X.LINUX_PANEL, {
    useTitle: () => A.intl.string(A.t["7pPjTW"]),
    buildLayout: () => [o.v]
  }),
  S = (0, Chunk419954.t_)(Chunk780964.X.LINUX_PANEL, {
    useTitle: () => A.intl.string(A.t["7pPjTW"]),
    StronglyDiscouragedCustomComponent: Chunk62218.A,
    buildLayout: () => []
  }),
  E = (0, Chunk419954.i4)(Chunk780964.X.LINUX_SIDEBAR_ITEM, {
    useTitle: () => A.intl.string(A.t["7pPjTW"]),
    getLegacySearchKey: () => (0, u.WJ)("LinuxPanel") ? true : T.H.LINUX_SETTINGS,
    icon: Chunk934551.ScreenIcon,
    usePredicate: () => s.isPlatformEmbedded && (0, s.isLinux)(),
    buildLayout: () => [(0, u.WJ)("LinuxPanel") ? d : S]
  })