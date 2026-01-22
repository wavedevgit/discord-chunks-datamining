/** Chunk was on web.js **/
/** chunk id: 637073, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => g,
  m: () => h
});
var Chunk311907 = require("./311907.js"),
  Chunk339048 = require("./339048.js"),
  Chunk964486 = require("./964486.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk816733 = require("./816733.js"),
  Chunk469778 = require("./469778.js"),
  Chunk474090 = require("./474090.js"),
  Chunk694080 = require("./694080.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js");
let _ = 2592e5;
async function h(e) {
  let t = s.default.getCurrentUser(),
    n = (0, u.ki)(t);
  null == t || n || c.A.fetchedEndedEntitlements || await (0, i.qw)({
    entitlementType: p.zF_.FRACTIONAL_REDEMPTION,
    excludeEnded: false
  });
  let r = c.A.getReverseTrialEntitlement(true);
  return !(!(!n && null != r && null != r.endsAt && r.endsAt.getTime() < Date.now()) || r.endsAt.getTime() < Date.now() - _) && r.sourceType === p.GD.REVERSE_TRIAL && (null == e && await (0, d._D)(), null != l.A.getUserTrialOffer(f.Tt)) || false
}

function m() {
  let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
    t = o.A.getPremiumTypeSubscription(),
    n = null != t && !t.isBoostOnly,
    l = (0, r.bG)([c.A], () => c.A.getReverseTrialEntitlement(false));
  return (0, a.Ay)(() => {
    null != e && (0, u.ki)(e) && !n && (c.A.fetchedAllEntitlements || c.A.fetchingAllEntitlements || (0, i.qw)({
      entitlementType: p.zF_.FRACTIONAL_REDEMPTION
    }))
  }), n ? null : l
}

function g() {
  return null != m()
}