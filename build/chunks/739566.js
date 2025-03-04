/** Chunk was on web.js **/
"use strict";
n.d(t, {
  JZ: () => h,
  Sw: () => g,
  Uj: () => _,
  ZH: () => p,
  ZP: () => f,
  ij: () => m
});
var r = n(512722),
  i = n.n(r),
  o = n(442837),
  a = n(592125),
  s = n(271383),
  l = n(430824),
  c = n(699516),
  u = n(594174),
  d = n(51144);

function f(e) {
  let t = _(e);
  return i()(null != t, "Result cannot be null because the message is not null"), t
}

function _(e) {
  var t;
  let n = (0, o.e7)([a.Z], () => null == e ? null : a.Z.getChannel(e.channel_id)),
    r = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
    i = null == n ? void 0 : n.guild_id,
    f = (0, o.e7)([s.ZP], () => null == i || null == r ? null : s.ZP.getMember(i, r)),
    _ = (0, o.e7)([u.default], () => u.default.getUser(r), [r]),
    p = d.ZP.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : _),
    {
      guild: h,
      guildRoles: g
    } = (0, o.cj)([l.Z], () => {
      let e = l.Z.getGuild(i),
        t = null != e ? l.Z.getRoles(e.id) : void 0;
      return {
        guild: e,
        guildRoles: t
      }
    }, [i]),
    m = (0, o.e7)([c.Z], () => null != r && (null == n ? void 0 : n.isPrivate()) ? c.Z.getNickname(r) : null);
  return null == e ? null : E({
    user: e.author,
    channel: n,
    guild: h,
    guildRoles: g,
    userName: p,
    member: f,
    friendNickname: m
  })
}

function p(e) {
  let t = a.Z.getChannel(e.channel_id);
  return m(e.author, t)
}

function h(e, t) {
  let n = g(e, t);
  return i()(null != n, "Result cannot be null because user and channel are not null"), n
}

function g(e, t) {
  let n = null == e ? void 0 : e.id,
    r = null == t ? void 0 : t.guild_id,
    i = (0, o.e7)([s.ZP], () => null == r || null == n ? null : s.ZP.getMember(r, n)),
    {
      guild: a,
      guildRoles: u
    } = (0, o.cj)([l.Z], () => {
      let e = l.Z.getGuild(r),
        t = null != e ? l.Z.getRoles(e.id) : void 0;
      return {
        guild: e,
        guildRoles: t
      }
    }, [r]),
    f = (0, o.e7)([c.Z], () => null != n && (null == t ? void 0 : t.isPrivate()) ? c.Z.getNickname(n) : null),
    _ = d.ZP.useName(e);
  return E({
    user: e,
    channel: t,
    guild: a,
    guildRoles: u,
    member: i,
    userName: _,
    friendNickname: f
  })
}

function m(e, t) {
  let n = null == e ? void 0 : e.id,
    r = null == t ? void 0 : t.guild_id,
    i = l.Z.getGuild(r),
    o = null != r ? l.Z.getRoles(r) : void 0,
    a = null == r || null == n ? null : s.ZP.getMember(r, n),
    u = null != n && null != t && t.isPrivate() ? c.Z.getNickname(n) : null;
  return E({
    user: e,
    channel: t,
    guild: i,
    guildRoles: o,
    member: a,
    friendNickname: u
  })
}

function E(e) {
  var t, n, r, i;
  let {
    user: o,
    channel: a,
    guild: s,
    guildRoles: l,
    member: c,
    userName: u,
    friendNickname: f
  } = e, _ = null == o ? "???" : null != u ? u : d.ZP.getName(o);
  return (null == o ? void 0 : o.id) == null || null == a ? {
    nick: _,
    colorString: void 0
  } : (null == s ? void 0 : s.id) == null ? {
    nick: null != f ? f : _,
    colorString: void 0
  } : null == c ? {
    nick: _,
    colorString: void 0
  } : {
    nick: null !== (n = c.nick) && void 0 !== n ? n : _,
    colorString: null !== (r = c.colorString) && void 0 !== r ? r : void 0,
    colorRoleName: null != c.colorRoleId && null != s ? null == l ? void 0 : null === (t = l[c.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
    colorRoleId: c.colorRoleId,
    iconRoleId: c.iconRoleId,
    guildMemberAvatar: c.avatar,
    guildMemberAvatarDecoration: c.avatarDecoration,
    primaryGuild: null !== (i = o.primaryGuild) && void 0 !== i ? i : void 0
  }
}