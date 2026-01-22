/** Chunk was on 28979 **/
/** chunk id: 886854, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  yj: () => C
});
var Chunk934551 = require("./934551.js"),
  Chunk920603 = require("./920603.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk368631 = require("./368631.jsx"),
  Chunk614651 = require("./614651.jsx"),
  Chunk859669 = require("./859669.jsx"),
  Chunk662802 = require("./662802.js"),
  Chunk988208 = require("./988208.js"),
  Chunk819070 = require("./819070.js"),
  Chunk352694 = require("./352694.js"),
  Chunk136451 = require("./136451.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let N = (0, Chunk419954.t_)(Chunk780964.X.APPEARANCE_PANEL, {
    useTitle: () => c.intl.string(c.t["iHH+ky"]),
    initialize: () => {
      (0, l.v)()
    },
    buildLayout: () => [_.S, S._, I.b, E.U, d.M, A.d]
  }),
  O = (0, Chunk419954.t_)(Chunk780964.X.APPEARANCE_PANEL, {
    useTitle: () => c.intl.string(c.t["iHH+ky"]),
    StronglyDiscouragedCustomComponent: Chunk614651.Ay,
    buildLayout: () => []
  }),
  C = (0, Chunk419954.i4)(Chunk780964.X.APPEARANCE_SIDEBAR_ITEM, {
    useTitle: () => c.intl.string(c.t["iHH+ky"]),
    getLegacySearchKey: () => (0, a.WJ)("AppearanceSidebarItem") ? true : g.H.APPEARANCE,
    icon: Chunk934551.PaintPaletteIcon,
    trailing: {
      type: Chunk933297.S.BADGE_NEW,
      getDismissibleContentTypes: Chunk368631.p_,
      stronglyDiscouragedBadgeComponent: Chunk368631.AW
    },
    buildLayout: () => (0, a.WJ)("AppearanceSidebarItem") ? [N] : [O]
  })