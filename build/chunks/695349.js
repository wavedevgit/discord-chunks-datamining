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
  let e = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
    t = s.Z.getPremiumTypeSubscription(),
    n = null != t && !t.isBoostOnly,
    l = (0, r.e7)([c.Z], () => c.Z.getReverseTrialEntitlement(false));
  return (0, a.ZP)(() => {
    null != e && (0, u.I5)(e) && !n && (c.Z.fetchedAllEntitlements || c.Z.fetchingAllEntitlements || (0, i.p0)({
      entitlementType: p.qc2.FRACTIONAL_REDEMPTION
    }))
  }), n ? null : l
}

function g() {
  return null != h()
}