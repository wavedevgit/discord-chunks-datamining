/** Chunk was on web.js **/
/** chunk id: 985481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CI: () => p,
  LJ: () => f,
  XK: () => _,
  y5: () => h
}), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk661191 = require("./661191.js"),
  Chunk308645 = require("./308645.js"),
  Chunk739010 = require("./739010.js"),
  Chunk207913 = require("./207913.js"),
  Chunk393033 = require("./393033.js"),
  Chunk239093 = require("./239093.js");

function d() {
  return (0, i.yK)([l.A], () => l.A.getClassifications()).sort((e, t) => a.default.extractTimestamp(t.id) - a.default.extractTimestamp(e.id))
}

function f(e) {
  let t, n = (0, i.bG)([l.A], () => l.A.getClassification(e)),
    a = (0, i.bG)([l.A], () => l.A.getClassificationRequestState(e)),
    d = (0, i.bG)([l.A], () => l.A.getIsDsaEligible()),
    f = (0, i.bG)([l.A], () => l.A.getIsAppealEligible());
  if ((0, c._g)(n)) {
    var p;
    t = (null == (p = n.guild_metadata) ? true : p.member_type) === o.Z9.OWNER ? u.w$.GUILD_OWNER : u.w$.GUILD_MEMBER
  } else t = u.w$.USER;
  return r.useEffect(() => {
    true === n && null == a && s.hH(e)
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

function h() {
  return (0, i.bG)([l.A], () => l.A.getAppealSignal())
}