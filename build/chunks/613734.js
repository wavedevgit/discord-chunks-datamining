/** Chunk was on web.js **/
/** chunk id: 613734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KM: () => _,
  U0: () => m,
  YG: () => f,
  y9: () => p
}), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk709054 = require("./709054.js"),
  Chunk103879 = require("./103879.js"),
  Chunk531441 = require("./531441.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk800530 = require("./800530.js");

function d() {
  return (0, i.Wu)([l.Z], () => l.Z.getClassifications()).sort((e, t) => a.default.extractTimestamp(t.id) - a.default.extractTimestamp(e.id))
}

function f(e) {
  let t, n = (0, i.e7)([l.Z], () => l.Z.getClassification(e)),
    a = (0, i.e7)([l.Z], () => l.Z.getClassificationRequestState(e)),
    d = (0, i.e7)([l.Z], () => l.Z.getIsDsaEligible()),
    f = (0, i.e7)([l.Z], () => l.Z.getIsAppealEligible());
  if ((0, c.FB)(n)) {
    var p;
    t = (null == (p = n.guild_metadata) ? true : p.member_type) === s.wO.OWNER ? u.qS.GUILD_OWNER : u.qS.GUILD_MEMBER
  } else t = u.qS.USER;
  return r.useEffect(() => {
    true === n && null == a && o.NA(e)
  }, [e, n, a]), {
    classification: n,
    classificationRequestState: a,
    isDsaEligible: d,
    isAppealEligible: f && null != n && null == n.appeal_status,
    violationType: t
  }
}

function p() {
  let e = d(),
    t = new Date;
  return e.filter(e => new Date(e.max_expiration_time) > t)
}

function _() {
  let e = d(),
    t = new Date;
  return e.filter(e => new Date(e.max_expiration_time) <= t)
}

function m() {
  return (0, i.e7)([l.Z], () => l.Z.getAppealSignal())
}