/** Chunk was on 8798 **/
/** chunk id: 594792, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk469993 = require("./469993.js"),
  Chunk836039 = require("./836039.js"),
  Chunk49463 = require("./49463.js"),
  Chunk260509 = require("./260509.js"),
  Chunk567305 = require("./567305.js"),
  Chunk555325 = require("./555325.js"),
  Chunk985018 = require("./985018.jsx");
let c = {
  title: () => u.intl.string(u.t["KzCF/6"]),
  description: () => u.intl.string(u.t.xMW8FH),
  canCreateGuild: false,
  useIsGuildSupported: () => (0, n.bG)([a.A], () => (e, t) => (0, s.bM)(e, t) && (0, o.V9)({
    guild: e,
    isOwner: true,
    canManageGuildRoleSubscriptions: true,
    isMonetizationWaitlistEnabledForGuild: (0, l.Kw)(e.id),
    isGuildEligibleForRoleSubscriptions: (0, d.OV)(e.id),
    isExpeditedMonetizationOnboardingGuild: (0, l.Sm)(e),
    isUserInCreatorMonetizationEligibleCountry: (0, l.Z1)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, r.mk)(e.id)
  }), [], n.My)
}