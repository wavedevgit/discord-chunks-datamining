/** Chunk was on 30485 **/
/** chunk id: 836799, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  $: () => c
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk723702 = require("./723702.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk62218 = require("./62218.jsx"),
  Chunk477908 = require("./477908.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.t_)(Chunk780964.X.WINDOWS_PANEL, {
    useTitle: () => T.intl.string(T.t.ZkDZov),
    buildLayout: () => [o.w]
  }),
  S = (0, Chunk419954.t_)(Chunk780964.X.WINDOWS_PANEL, {
    useTitle: () => T.intl.string(T.t.ZkDZov),
    StronglyDiscouragedCustomComponent: Chunk62218.A,
    buildLayout: () => []
  }),
  c = (0, Chunk419954.i4)(Chunk780964.X.WINDOWS_SIDEBAR_ITEM, {
    useTitle: () => T.intl.string(T.t.ZkDZov),
    getLegacySearchKey: () => (0, u.WJ)("WindowsPanel") ? true : d.H.WINDOW_SETTINGS,
    icon: Chunk934551.ScreenIcon,
    usePredicate: () => s.isPlatformEmbedded && (0, s.isWindows)(),
    buildLayout: () => [(0, u.WJ)("WindowsPanel") ? A : S]
  })