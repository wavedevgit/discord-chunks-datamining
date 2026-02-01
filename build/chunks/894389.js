/** Chunk was on 30485 **/
/** chunk id: 894389, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  b: () => c
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk115980 = require("./115980.jsx"),
  Chunk901177 = require("./901177.js"),
  Chunk994421 = require("./994421.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.t_)(Chunk780964.X.BILLING_PANEL, {
    usePredicate: () => (0, r.dk)("BillingPanel"),
    useTitle: () => T.intl.string(T.t.oeUm2s),
    buildLayout: () => [a.B, o.Z],
    hideInStreamerMode: true
  }),
  S = (0, Chunk419954.t_)(Chunk780964.X.BILLING_PANEL, {
    usePredicate: () => !(0, r.dk)("LegacyBillingPanel"),
    useTitle: () => T.intl.string(T.t.oeUm2s),
    StronglyDiscouragedCustomComponent: Chunk115980.Ay,
    buildLayout: () => []
  }),
  c = (0, Chunk419954.i4)(Chunk780964.X.BILLING_SIDEBAR_ITEM, {
    useTitle: () => T.intl.string(T.t.oeUm2s),
    icon: Chunk934551.CreditCardIcon,
    getLegacySearchKey: () => (0, r.WJ)("BillingPanel") ? true : d.H.BILLING,
    buildLayout: () => (0, r.WJ)("BillingPanel") ? [A] : [S]
  })