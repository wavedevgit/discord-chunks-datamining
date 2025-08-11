/** Chunk was on 8102 **/
/** chunk id: 710091, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk223892 = require("./223892.js"),
  Chunk738774 = require("./738774.js"),
  Chunk353926 = require("./353926.js"),
  Chunk601964 = require("./601964.js"),
  Chunk923726 = require("./923726.js"),
  Chunk144507 = require("./144507.js"),
  Chunk388032 = require("./388032.jsx");
let c = {
  title: () => Chunk388032.intl.string(Chunk388032.t["KzCF//"]),
  description: () => Chunk388032.intl.string(Chunk388032.t.xMW8FB),
  canCreateGuild: false,
  useIsGuildSupported: () => (0, Chunk442837.e7)([Chunk353926.Z], () => (e, t) => (0, s.eM)(e, t) && (0, d.X$)({
    guild: e,
    isOwner: true,
    canManageGuildRoleSubscriptions: true,
    isMonetizationWaitlistEnabledForGuild: (0, l.mG)(e.id),
    isGuildEligibleForRoleSubscriptions: (0, u.kT)(e.id),
    isExpeditedMonetizationOnboardingGuild: (0, l.Rw)(e),
    isUserInCreatorMonetizationEligibleCountry: (0, l.DB)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, r.cu)(e.id)
  }), [], Chunk442837.pF)
}