/** Chunk was on 3940 **/
/** chunk id: 613734, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  KM: () => c,
  U0: () => U,
  YG: () => s,
  y9: () => T
}), require("./642613.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk709054 = require("./709054.js"),
  Chunk103879 = require("./103879.js"),
  Chunk364226 = require("./364226.js"),
  Chunk531441 = require("./531441.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk800530 = require("./800530.js");

function S() {
  return (0, Chunk442837.Wu)([Chunk236289.Z], () => Chunk236289.Z.getClassifications()).sort((t, e) => _.default.extractTimestamp(e.id) - _.default.extractTimestamp(t.id))
}

function s(t) {
  let e, n = (0, E.e7)([r.Z], () => r.Z.getClassification(t)),
    _ = (0, E.e7)([r.Z], () => r.Z.getClassificationRequestState(t)),
    S = (0, E.e7)([r.Z], () => r.Z.getIsDsaEligible()),
    s = (0, E.e7)([r.Z], () => r.Z.getIsAppealEligible()),
    T = (0, A.A)("classification_detail");
  if ((0, u.FB)(n)) {
    var c;
    e = (null == (c = n.guild_metadata) ? true : c.member_type) === a.wO.OWNER ? o.qS.GUILD_OWNER : o.qS.GUILD_MEMBER
  } else e = o.qS.USER;
  return i.useEffect(() => {
    true === n && null == _ && l.NA(t)
  }, [t, n, _]), {
    classification: n,
    classificationRequestState: _,
    isDsaEligible: S,
    isAppealEligible: s && null != n && null == n.appeal_status && (!(0, u.FB)(n) || T),
    violationType: e
  }
}

function T() {
  let t = S(),
    e = new Date;
  return module.filter(t => new Date(t.max_expiration_time) > e)
}

function c() {
  let t = S(),
    e = new Date;
  return module.filter(t => new Date(t.max_expiration_time) <= e)
}

function U() {
  return (0, Chunk442837.e7)([Chunk236289.Z], () => Chunk236289.Z.getAppealSignal())
}