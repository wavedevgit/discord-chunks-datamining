/** Chunk was on 4670 **/
/** chunk id: 832688, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  a: () => S
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
let c = (0, Chunk419954.t_)(Chunk780964.X.LINUX_PANEL, {
    useTitle: () => T.intl.string(T.t["7pPjTW"]),
    buildLayout: () => [o.v]
  }),
  A = (0, Chunk419954.t_)(Chunk780964.X.LINUX_PANEL, {
    useTitle: () => T.intl.string(T.t["7pPjTW"]),
    StronglyDiscouragedCustomComponent: Chunk62218.A,
    buildLayout: () => []
  }),
  S = (0, Chunk419954.i4)(Chunk780964.X.LINUX_SIDEBAR_ITEM, {
    useTitle: () => T.intl.string(T.t["7pPjTW"]),
    getLegacySearchKey: () => (0, a.WJ)("LinuxPanel") ? true : d.H.LINUX_SETTINGS,
    icon: Chunk934551.ScreenIcon,
    usePredicate: () => s.isPlatformEmbedded && (0, s.isLinux)(),
    buildLayout: () => [(0, a.WJ)("LinuxPanel") ? c : A]
  })