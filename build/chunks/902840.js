/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Jc: () => d,
  Lp: () => u,
  l9: () => p,
  tW: () => c,
  ts: () => f
});
var r = n(399606),
  i = n(430824),
  o = n(981631),
  a = n(176505);

function s(e) {
  var t;
  if (null == e) return !1;
  let n = i.Z.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ""),
    r = null != n && n.rulesChannelId === e.id;
  return o.TPd.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !r
}

function l(e) {
  return null != e && (e === o.ME || e === o.I_8)
}

function c(e) {
  return u(e, !0, !1)
}

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  return !(null == e || !s(e) || !1 === t && e.hasFlag(a.zZ.SUMMARIES_DISABLED)) && d(i.Z.getGuild(e.guild_id), n)
}

function d(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return !(null == e || l(e.id)) && !!e.hasFeature(o.oNc.SUMMARIES_ENABLED_GA) && (!t || e.hasFeature(o.oNc.SUMMARIES_ENABLED_BY_USER))
}

function f(e) {
  arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return u(e, t)
}

function p(e) {
  return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], (0, r.e7)([i.Z], () => {
    var t;
    return d(i.Z.getGuild(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : o.lds), !1)
  }, [e])
}