/** Chunk was on web.js **/
/** chunk id: 613734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KM: () => h,
  U0: () => m,
  YG: () => _,
  y9: () => p
}), require("./642613.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk709054 = require("./709054.js"),
  Chunk103879 = require("./103879.js"),
  Chunk364226 = require("./364226.js"),
  Chunk531441 = require("./531441.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk800530 = require("./800530.js");

function f() {
  return (0, Chunk442837.Wu)([Chunk236289.Z], () => Chunk236289.Z.getClassifications()).sort((e, t) => o.default.extractTimestamp(t.id) - o.default.extractTimestamp(e.id))
}

function _(e) {
  let t, n = (0, i.e7)([c.Z], () => c.Z.getClassification(e)),
    o = (0, i.e7)([c.Z], () => c.Z.getClassificationRequestState(e)),
    f = (0, i.e7)([c.Z], () => c.Z.getIsDsaEligible()),
    _ = (0, i.e7)([c.Z], () => c.Z.getIsAppealEligible()),
    p = (0, s.A)("classification_detail");
  if ((0, u.FB)(n)) {
    var h;
    t = (null == (h = n.guild_metadata) ? true : h.member_type) === l.wO.OWNER ? d.qS.GUILD_OWNER : d.qS.GUILD_MEMBER
  } else t = d.qS.USER;
  return r.useEffect(() => {
    true === n && null == o && a.NA(e)
  }, [e, n, o]), {
    classification: n,
    classificationRequestState: o,
    isDsaEligible: f,
    isAppealEligible: _ && null != n && null == n.appeal_status && (!(0, u.FB)(n) || p),
    violationType: t
  }
}

function p() {
  let e = f(),
    t = new Date;
  return module.filter(e => new Date(e.max_expiration_time) > t)
}

function h() {
  let e = f(),
    t = new Date;
  return module.filter(e => new Date(e.max_expiration_time) <= t)
}

function m() {
  return (0, Chunk442837.e7)([Chunk236289.Z], () => Chunk236289.Z.getAppealSignal())
}