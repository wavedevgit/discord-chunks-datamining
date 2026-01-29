/** Chunk was on 4670 **/
/** chunk id: 334219, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  z: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk3137 = require("./3137.js"),
  Chunk454292 = require("./454292.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk74695 = require("./74695.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk625587 = require("./625587.js");
let S = (0, Chunk419954.t_)(Chunk780964.X.POGGERMODE_PANEL, {
    usePredicate: () => !(0, o.dk)("LegacyPoggermodePanel"),
    useTitle: () => c.intl.string(c.t.AtCukI),
    StronglyDiscouragedCustomComponent: Chunk454292.A,
    buildLayout: () => []
  }),
  _ = (0, Chunk419954.t_)(Chunk780964.X.POGGERMODE_PANEL, {
    usePredicate: () => (0, o.dk)("PoggermodePanel"),
    useTitle: () => c.intl.string(c.t.AtCukI),
    buildLayout: () => [d.c]
  }),
  E = (0, Chunk419954.i4)(Chunk780964.X.POGGERMODE_SIDEBAR_ITEM, {
    useTitle: () => c.intl.string(c.t.AtCukI),
    getLegacySearchKey: () => (0, o.WJ)("PoggermodePanel") ? true : T.H.POGGERMODE,
    icon: () => (0, n.jsx)("img", {
      alt: "",
      src: i(724405),
      className: A.$
    }),
    usePredicate: () => (0, l.bG)([s.A], () => s.A.settingsVisible),
    buildLayout: () => (0, o.WJ)("PoggermodePanel") ? [_] : [S]
  })