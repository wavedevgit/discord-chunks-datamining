/** Chunk was on web.js **/
/** chunk id: 695349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => m,
  W: () => g
});
var Chunk442837 = require("./442837.js"),
  Chunk496929 = require("./496929.js"),
  Chunk493773 = require("./493773.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk431 = require("./431.js"),
  Chunk580130 = require("./580130.js"),
  Chunk111361 = require("./111361.js"),
  Chunk937579 = require("./937579.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");
let _ = 2592e5;
async function m(e) {
  let t = o.default.getCurrentUser(),
    n = (0, u.I5)(t);
  null == t || n || c.Z.fetchedEndedEntitlements || await (0, i.p0)({
    entitlementType: p.qc2.FRACTIONAL_REDEMPTION,
    excludeEnded: false
  });
  let r = c.Z.getReverseTrialEntitlement(true);
  return !(!(!n && null != r && null != r.endsAt && r.endsAt.getTime() < Date.now()) || r.endsAt.getTime() < Date.now() - _) && r.sourceType === p.kNB.REVERSE_TRIAL && (null == e && await (0, d.Tf)(), null != l.Z.getUserTrialOffer(f.Rt)) || false
}

function h() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = Chunk78839.Z.getPremiumTypeSubscription(),
    n = null != exports && !exports.isBoostOnly,
    l = (0, Chunk442837.e7)([Chunk580130.Z], () => Chunk580130.Z.getReverseTrialEntitlement(false));
  return (0, Chunk493773.ZP)(() => {
    null != module && (0, Chunk111361.I5)(module) && !require && (Chunk580130.Z.fetchedAllEntitlements || Chunk580130.Z.fetchingAllEntitlements || (0, Chunk496929.p0)({
      entitlementType: Chunk981631.qc2.FRACTIONAL_REDEMPTION
    }))
  }), require ? null : Chunk431
}

function g() {
  return null != h()
}