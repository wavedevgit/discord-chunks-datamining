/** Chunk was on web.js **/
/** chunk id: 432371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kc: () => u,
  cI: () => p,
  pk: () => d,
  vC: () => _
});
var Chunk417597 = require("./417597.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function l(e) {
  var t;
  if (null == e) returnfalse;
  let n = a.A.getGuild(null != (t = null == e ? true : e.guild_id) ? t : ""),
    r = null != n && n.rulesChannelId === e.id,
    s = (0, i.wh)(n);
  return o.kvI.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !r && !s
}

function c(e) {
  return null != e && (e === o.ME || e === o.YYv)
}

function u(e) {
  return d(e, true, false)
}

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  return !(null == e || !l(e) || false === t && e.hasFlag(s.lx.SUMMARIES_DISABLED)) && f(a.A.getGuild(e.guild_id), n)
}

function f(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return !(null == e || c(e.id)) && !!e.features.has(o.GuildFeatures.SUMMARIES_ENABLED_GA) && (!t || e.features.has(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
}

function p(e) {
  arguments.length > 1 && true !== arguments[1] && arguments[1];
  let t = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return d(e, t)
}

function _(e) {
  return arguments.length > 1 && true !== arguments[1] && arguments[1], (0, r.bG)([a.A], () => {
    var t;
    return f(a.A.getGuild(null != (t = null == e ? true : e.id) ? t : o.dJq), false)
  }, [e])
}