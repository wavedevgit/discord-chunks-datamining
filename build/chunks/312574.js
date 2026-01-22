/** Chunk was on 28979 **/
/** chunk id: 312574, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  u: () => I
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk790076 = require("./790076.jsx"),
  Chunk682262 = require("./682262.js"),
  Chunk694202 = require("./694202.js"),
  Chunk50847 = require("./50847.js"),
  Chunk606275 = require("./606275.js"),
  Chunk222328 = require("./222328.js"),
  Chunk879545 = require("./879545.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let g = (0, Chunk419954.t_)(Chunk780964.X.OVERLAY_PANEL, {
    usePredicate: () => (0, r.dk)("OverlayPanel"),
    useTitle: () => _.intl.string(_.t["9cb1Uz"]),
    buildLayout: () => [d.I, o.u, T.X, S.D, A.h]
  }),
  c = (0, Chunk419954.t_)(Chunk780964.X.OVERLAY_PANEL, {
    usePredicate: () => !(0, r.dk)("OverlayPanel"),
    useTitle: () => _.intl.string(_.t["9cb1Uz"]),
    StronglyDiscouragedCustomComponent: Chunk790076.Ay,
    buildLayout: () => []
  }),
  I = (0, Chunk419954.i4)(Chunk780964.X.OVERLAY_SIDEBAR_ITEM, {
    useTitle: () => _.intl.string(_.t["9cb1Uz"]),
    icon: Chunk934551.WindowTopOutlineIcon,
    usePredicate: Chunk682262.b_,
    getLegacySearchKey: () => (0, r.WJ)("OverlayPanel") ? true : E.H.OVERLAY,
    buildLayout: () => (0, r.WJ)("OverlayPanel") ? [g] : [c]
  })