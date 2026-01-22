/** Chunk was on 28979 **/
/** chunk id: 899463, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  rC: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk934551 = require("./934551.js"),
  Chunk734066 = require("./734066.js"),
  Chunk953336 = require("./953336.jsx"),
  Chunk314695 = require("./314695.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk467758 = require("./467758.js"),
  Chunk269420 = require("./269420.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let _ = (0, Chunk419954.t_)(Chunk780964.X.CLIPS_PANEL, {
    useTitle: () => E.intl.string(E.t.z2jK6X),
    useBadge: () => (0, n.jsx)(r.A, {}),
    usePredicate: () => !(0, T.$m)("LegacyClipsPane"),
    StronglyDiscouragedCustomComponent: Chunk314695.A,
    buildLayout: () => []
  }),
  g = (0, Chunk419954.t_)(Chunk780964.X.CLIPS_PANEL, {
    useTitle: () => E.intl.string(E.t.z2jK6X),
    useBadge: () => (0, n.jsx)(r.A, {}),
    usePredicate: () => {
      let t = (0, T.$m)("ClipsPanel"),
        e = (0, s.sw)();
      return t && e
    },
    buildLayout: () => [d.K, A.W]
  }),
  c = (0, Chunk419954.i4)(Chunk780964.X.CLIPS_SIDEBAR_ITEM, {
    useTitle: () => E.intl.string(E.t.z2jK6X),
    icon: Chunk934551.ClipsIcon,
    getLegacySearchKey: () => (0, T.qz)("ClipsPanel") ? true : S.H.CLIPS,
    buildLayout: () => (0, T.qz)("ClipsPanel") ? [g] : [_]
  })