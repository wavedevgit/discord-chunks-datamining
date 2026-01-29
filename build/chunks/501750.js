/** Chunk was on 4670 **/
/** chunk id: 501750, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  y: () => _
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk517235 = require("./517235.jsx"),
  Chunk965304 = require("./965304.jsx"),
  Chunk485079 = require("./485079.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.t_)(Chunk780964.X.NITRO_PANEL, {
    usePredicate: () => !(0, a.dk)("LegacyNitroPanel"),
    useTitle: () => c.intl.string(c.t.Ipxkog),
    StronglyDiscouragedCustomComponent: Chunk517235.A,
    buildLayout: () => []
  }),
  S = (0, Chunk419954.t_)(Chunk780964.X.NITRO_PANEL, {
    usePredicate: () => (0, a.dk)("NitroPanel"),
    useTitle: () => c.intl.string(c.t.Ipxkog),
    buildLayout: () => [d.r]
  }),
  _ = (0, Chunk419954.i4)(Chunk780964.X.NITRO_SIDEBAR_ITEM, {
    useTitle: () => c.intl.string(c.t.Ipxkog),
    getLegacySearchKey: () => (0, a.WJ)("NitroPanel") ? true : T.H.PREMIUM,
    icon: Chunk934551.NitroWheelIcon,
    trailing: {
      type: Chunk933297.S.STRONGLY_DISCOURAGED_CUSTOM,
      useCustomDecoration: (e, t) => (0, o.e)(t)
    },
    buildLayout: () => (0, a.WJ)("NitroPanel") ? [S] : [A]
  })