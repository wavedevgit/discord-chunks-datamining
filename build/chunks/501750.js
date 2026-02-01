/** Chunk was on 30485 **/
/** chunk id: 501750, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  y: () => E
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
let S = (0, Chunk419954.t_)(Chunk780964.X.NITRO_PANEL, {
    usePredicate: () => !(0, u.dk)("LegacyNitroPanel"),
    useTitle: () => A.intl.string(A.t.Ipxkog),
    StronglyDiscouragedCustomComponent: Chunk517235.A,
    buildLayout: () => []
  }),
  c = (0, Chunk419954.t_)(Chunk780964.X.NITRO_PANEL, {
    usePredicate: () => (0, u.dk)("NitroPanel"),
    useTitle: () => A.intl.string(A.t.Ipxkog),
    buildLayout: () => [d.r]
  }),
  E = (0, Chunk419954.i4)(Chunk780964.X.NITRO_SIDEBAR_ITEM, {
    useTitle: () => A.intl.string(A.t.Ipxkog),
    getLegacySearchKey: () => (0, u.WJ)("NitroPanel") ? true : T.H.PREMIUM,
    icon: Chunk934551.NitroWheelIcon,
    trailing: {
      type: Chunk933297.S.STRONGLY_DISCOURAGED_CUSTOM,
      useCustomDecoration: (t, e) => (0, o.e)(e)
    },
    buildLayout: () => (0, u.WJ)("NitroPanel") ? [c] : [S]
  })