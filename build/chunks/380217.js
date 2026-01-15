/** Chunk was on 77069 **/
/** chunk id: 380217, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  o: () => d
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk443702 = require("./443702.jsx"),
  Chunk87065 = require("./87065.js"),
  Chunk43384 = require("./43384.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.wf)(Chunk313789.n.BILLING_PANEL, {
    usePredicate: () => (0, u.gN)("BillingPanel"),
    useTitle: () => S.intl.string(S.t.oeUm2s),
    buildLayout: () => [a.$, o.L],
    hideInStreamerMode: true
  }),
  E = (0, Chunk509613.wf)(Chunk313789.n.BILLING_PANEL, {
    usePredicate: () => !(0, u.gN)("LegacyBillingPanel"),
    useTitle: () => S.intl.string(S.t.oeUm2s),
    StronglyDiscouragedCustomComponent: Chunk443702.ZP,
    buildLayout: () => []
  }),
  d = (0, Chunk509613.m7)(Chunk313789.n.BILLING_SIDEBAR_ITEM, {
    useTitle: () => S.intl.string(S.t.oeUm2s),
    icon: Chunk657707.ciH,
    getLegacySearchKey: () => (0, u.Gl)("BillingPanel") ? true : T.s6.BILLING,
    buildLayout: () => (0, u.Gl)("BillingPanel") ? [c] : [E]
  })