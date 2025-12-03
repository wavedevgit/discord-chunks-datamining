/** Chunk was on web.js **/
/** chunk id: 982168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gi: () => C,
  H0: () => P,
  P0: () => T,
  UD: () => v,
  WF: () => A,
  _5: () => y,
  gT: () => I,
  iZ: () => S,
  iq: () => N,
  sP: () => b
}), require("./642613.js");
var Chunk149765 = require("./149765.js"),
  Chunk294509 = require("./294509.js"),
  Chunk629710 = require("./629710.js"),
  Chunk860164 = require("./860164.js"),
  Chunk660189 = require("./660189.js"),
  Chunk241559 = require("./241559.js"),
  Chunk182274 = require("./182274.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk970257 = require("./970257.js"),
  Chunk893908 = require("./893908.js"),
  Chunk953252 = require("./953252.js"),
  Chunk806246 = require("./806246.js");

function b(e) {
  if (!(0, m.Fi)(e.author)) returnfalse;
  let t = u.Z.getChannel(e.channel_id);
  if (null == t) returnfalse;
  let n = d.Z.getGuild(t.guild_id);
  if (null == n) returnfalse;
  let r = (0, g.Z)(n),
    i = (0, h.Z)(n);
  return r && null != i
}
let y = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [d.Z, p.default],
    n = (0, l.cD)(e, t);
  if (null == n) returnfalse;
  let {
    user: i,
    guild: a
  } = n;
  return null != a && !!(0, g.Z)(a) && null != (0, h.Z)(a) && r.Db(_.uB({
    user: i,
    context: a,
    checkElevated: false
  }), E.I)
};

function O(e) {
  return T(u.Z.getChannel(e))
}

function v(e) {
  return S(u.Z.getChannel(e))
}

function S(e) {
  return null != e && e.isModeratorReportChannel() && e.isForumChannel()
}

function I(e) {
  return null != e && e.isModeratorReportChannel() && e.isForumPost()
}

function T(e) {
  return null != e && (S(e) || I(e))
}

function A(e) {
  if (null == e || !(0, c.U)() || !O(e)) returntrue;
  let {
    loaded: t,
    firstMessage: n
  } = s.Z.getMessage(e);
  return !t || null == n || !(0, a.X6)(n, i.qn.EXPLICIT)
}

function C(e, t) {
  return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && I(t)
}

function N(e) {
  return e.sort((e, t) => e.id == o.a.MULTIPLE_REPORTS ? false : +(t.id == o.a.MULTIPLE_REPORTS))
}

function P(e, t) {
  var n, r, i;
  let a = u.Z.getChannel(e);
  if (null == a || !a.isModeratorReportChannel()) returnfalse;
  let o = f.Z.getMessages(e).first();
  return (null == o || null == (i = o.messageSnapshots) || null == (r = i[0]) || null == (n = r.moderatorReport) ? true : n.reported_user_id) === t
}