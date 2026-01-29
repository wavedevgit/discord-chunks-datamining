/** Chunk was on 4670 **/
/** chunk id: 430443, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  U: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk10094 = require("./10094.js"),
  Chunk683760 = require("./683760.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk788868 = require("./788868.js");
let o = [{
    id: "none",
    label: "Non-Nitro",
    value: 0
  }, {
    id: "tier_0",
    label: "Nitro Basic",
    value: Chunk788868.PremiumTypes.TIER_0
  }, {
    id: "tier_1",
    label: "Nitro Classic",
    value: Chunk788868.PremiumTypes.TIER_1
  }, {
    id: "tier_2",
    label: "Nitro Standard",
    value: Chunk788868.PremiumTypes.TIER_2
  }],
  d = (0, Chunk419954.Hn)(Chunk780964.X.PREMIUM_TYPE_OVERRIDE, {
    useTitle: () => "Premium Type Override",
    useSearchTerms: () => ["nitro override"],
    useSubtitle: () => "Overrides the client's local premium type.",
    fieldLayout: "horizontal-responsive",
    useOptions: () => o,
    clearable: true,
    useValue: () => (0, n.bG)([s.A], () => {
      let e = s.A.getPremiumTypeOverride();
      return null === e ? 0 : e
    }),
    setValue: e => {
      0 === e ? (0, l.O)(null, true) : null === e ? (0, l.O)(true, true) : (0, l.O)(0 === e ? null : e, true)
    }
  })