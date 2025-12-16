/** Chunk was on 77069 **/
/** chunk id: 380217, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  o: () => g
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk443702 = require("./443702.jsx"),
  Chunk87065 = require("./87065.js"),
  Chunk743587 = require("./743587.js"),
  Chunk43384 = require("./43384.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.wf)(Chunk313789.n.BILLING_PANEL, {
    usePredicate: () => (0, Chunk526665.gN)("BillingPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.oeUm2s),
    buildLayout: () => [Chunk87065.$, Chunk43384.L, Chunk743587.B],
    hideInStreamerMode: true
  }),
  d = (0, Chunk509613.wf)(Chunk313789.n.BILLING_PANEL, {
    usePredicate: () => !(0, Chunk526665.gN)("LegacyBillingPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.oeUm2s),
    StronglyDiscouragedCustomComponent: Chunk443702.ZP,
    buildLayout: () => []
  }),
  g = (0, Chunk509613.m7)(Chunk313789.n.BILLING_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.oeUm2s),
    icon: Chunk657707.ciH,
    getLegacySearchKey: () => (0, Chunk526665.Gl)("BillingPanel") ? true : Chunk726985.s6.BILLING,
    buildLayout: () => (0, Chunk526665.Gl)("BillingPanel") ? [E] : [d]
  })