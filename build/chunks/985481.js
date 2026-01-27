/** Chunk was on 83518 **/
/** chunk id: 985481, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  CI: () => T,
  LJ: () => s,
  XK: () => o,
  y5: () => U
}), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk661191 = require("./661191.js"),
  Chunk308645 = require("./308645.js"),
  Chunk739010 = require("./739010.js"),
  Chunk207913 = require("./207913.js"),
  Chunk393033 = require("./393033.js"),
  Chunk239093 = require("./239093.js");

function S() {
  return (0, i.yK)([r.A], () => r.A.getClassifications()).sort((t, e) => _.default.extractTimestamp(e.id) - _.default.extractTimestamp(t.id))
}

function s(t) {
  let e, n = (0, i.bG)([r.A], () => r.A.getClassification(t)),
    _ = (0, i.bG)([r.A], () => r.A.getClassificationRequestState(t)),
    S = (0, i.bG)([r.A], () => r.A.getIsDsaEligible()),
    s = (0, i.bG)([r.A], () => r.A.getIsAppealEligible());
  if ((0, a._g)(n)) {
    var T;
    e = (null == (T = n.guild_metadata) ? true : T.member_type) === A.Z9.OWNER ? u.w$.GUILD_OWNER : u.w$.GUILD_MEMBER
  } else e = u.w$.USER;
  return E.useEffect(() => {
    true === n && null == _ && l.hH(t)
  }, [t, n, _]), {
    classification: n,
    classificationRequestState: _,
    isDsaEligible: S,
    isAppealEligible: s && null != n && null == n.appeal_status,
    violationType: e
  }
}

function T() {
  let t = S(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) > e)
}

function o() {
  let t = S(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) <= e)
}

function U() {
  return (0, i.bG)([r.A], () => r.A.getAppealSignal())
}