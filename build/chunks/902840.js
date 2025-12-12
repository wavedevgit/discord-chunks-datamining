/** Chunk was on web.js **/
/** chunk id: 902840, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Lp: () => d,
  l9: () => _,
  tW: () => u,
  ts: () => p
});
var Chunk399606 = require("./399606.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function l(e) {
  var t;
  if (null == e) returnfalse;
  let n = o.Z.getGuild(null != (t = null == e ? true : e.guild_id) ? t : ""),
    r = null != n && n.rulesChannelId === e.id,
    s = (0, i.Y2)(n);
  return a.TPd.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !r && !s
}

function c(e) {
  return null != e && (e === a.ME || e === a.I_8)
}

function u(e) {
  return d(e, true, false)
}

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  return !(null == e || !l(e) || false === t && e.hasFlag(s.zZ.SUMMARIES_DISABLED)) && f(o.Z.getGuild(e.guild_id), n)
}

function f(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return !(null == e || c(e.id)) && !!e.features.has(a.GuildFeatures.SUMMARIES_ENABLED_GA) && (!t || e.features.has(a.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
}

function p(e) {
  arguments.length > 1 && true !== arguments[1] && arguments[1];
  let t = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return d(e, t)
}

function _(e) {
  return arguments.length > 1 && true !== arguments[1] && arguments[1], (0, r.e7)([o.Z], () => {
    var t;
    return f(o.Z.getGuild(null != (t = null == e ? true : e.id) ? t : a.lds), false)
  }, [e])
}