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
  return (0, Chunk442837.Wu)([Chunk236289.Z], () => Chunk236289.Z.getClassifications()).sort((e, t) => o.default.extractTimestamp(t.id) - o.default.extractTimestamp(e.id))
}

function f(e) {
  let t, n = (0, i.e7)([l.Z], () => l.Z.getClassification(e)),
    o = (0, i.e7)([l.Z], () => l.Z.getClassificationRequestState(e)),
    d = (0, i.e7)([l.Z], () => l.Z.getIsDsaEligible()),
    f = (0, i.e7)([l.Z], () => l.Z.getIsAppealEligible());
  if ((0, c.FB)(n)) {
    var p;
    t = (null == (p = n.guild_metadata) ? true : p.member_type) === s.wO.OWNER ? u.qS.GUILD_OWNER : u.qS.GUILD_MEMBER
  } else t = u.qS.USER;
  return r.useEffect(() => {
    true === n && null == o && a.NA(e)
  }, [e, n, o]), {
    classification: n,
    classificationRequestState: o,
    isDsaEligible: d,
    isAppealEligible: f && null != n && null == n.appeal_status,
    violationType: t
  }
}

function p() {
  let e = d(),
    t = new Date;
  return module.filter(e => new Date(e.max_expiration_time) > t)
}

function _() {
  let e = d(),
    t = new Date;
  return module.filter(e => new Date(e.max_expiration_time) <= t)
}

function m() {
  return (0, Chunk442837.e7)([Chunk236289.Z], () => Chunk236289.Z.getAppealSignal())
}