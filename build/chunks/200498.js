/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  B: () => m,
  Os: () => _,
  _L: () => p,
  jU: () => g,
  nG: () => h
});
var r = n(149765),
  i = n(442837),
  o = n(41776);
n(314897);
var a = n(592125),
  s = n(430824),
  l = n(496675),
  c = n(700785),
  u = n(146085),
  d = n(427679),
  f = n(981631);

function p(e, t, n) {
  var i, o;
  let a = null == n ? void 0 : n.permissionOverwrites[e];
  return {
    id: e,
    type: t,
    deny: null !== (i = null == a ? void 0 : a.deny) && void 0 !== i ? i : c.Hn,
    allow: r.Od(null !== (o = null == a ? void 0 : a.allow) && void 0 !== o ? o : c.Hn, u.yP)
  }
}

function _(e) {
  let {
    allow: t,
    deny: n
  } = e;
  return r.fS(t, c.Hn) && r.fS(n, c.Hn)
}

function h(e) {
  return (0, i.e7)([l.Z, s.Z, a.Z], () => {
    let t = a.Z.getChannel(e),
      n = s.Z.getGuild(null == t ? void 0 : t.getGuildId());
    return !!(l.Z.can(f.Plq.ADMINISTRATOR, n) || l.Z.can(f.Plq.MANAGE_ROLES, t, void 0, void 0, !0) || l.Z.can(u.N, t))
  }, [e])
}

function m(e) {
  return (0, i.e7)([a.Z, l.Z], () => null != e && l.Z.can(f.Plq.MUTE_MEMBERS, a.Z.getChannel(e)), [e])
}

function g(e) {
  return !!(null != e && e.isGuildStageVoice() && o.Z.isLurking(e.guild_id) && d.Z.isPublic(e.id)) && l.Z.can(u.gl, e)
}