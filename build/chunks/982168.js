/** Chunk was on web.js **/
/** chunk id: 982168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gi: () => A,
  P0: () => I,
  UD: () => O,
  WF: () => T,
  _5: () => b,
  gT: () => S,
  iZ: () => v,
  iq: () => C,
  sP: () => E
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
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk970257 = require("./970257.js"),
  Chunk893908 = require("./893908.js"),
  Chunk953252 = require("./953252.js"),
  Chunk806246 = require("./806246.js");

function E(e) {
  if (!(0, _.Fi)(e.author)) returnfalse;
  let t = u.Z.getChannel(e.channel_id);
  if (null == t) returnfalse;
  let n = d.Z.getGuild(t.guild_id);
  if (null == n) returnfalse;
  let r = (0, h.Z)(n),
    i = (0, m.Z)(n);
  return r && null != i
}
let b = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [d.Z, f.default],
    n = (0, l.cD)(e, t);
  if (null == n) returnfalse;
  let {
    user: i,
    guild: a
  } = n;
  return null != a && !!(0, h.Z)(a) && null != (0, m.Z)(a) && r.Db(p.uB({
    user: i,
    context: a,
    checkElevated: false
  }), g.I)
};

function y(e) {
  return I(u.Z.getChannel(e))
}

function O(e) {
  return v(u.Z.getChannel(e))
}

function v(e) {
  return null != e && e.isModeratorReportChannel() && e.isForumChannel()
}

function S(e) {
  return null != e && e.isModeratorReportChannel() && e.isForumPost()
}

function I(e) {
  return null != e && (v(e) || S(e))
}

function T(e) {
  if (null == e || !(0, c.U)() || !y(e)) returntrue;
  let {
    loaded: t,
    firstMessage: n
  } = s.Z.getMessage(e);
  return !t || null == n || !(0, a.X6)(n, i.qn.EXPLICIT)
}

function A(e, t) {
  return !!e.isFirstMessageInForumPost(t) && !!e.isSystemDM() && S(t)
}

function C(e) {
  return e.sort((e, t) => e.id == o.a.MULTIPLE_REPORTS ? false : +(t.id == o.a.MULTIPLE_REPORTS))
}