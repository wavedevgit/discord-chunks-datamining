/** Chunk was on web.js **/
/** chunk id: 739566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JZ: () => m,
  Sw: () => g,
  Uj: () => p,
  ZH: () => h,
  ZP: () => _,
  ij: () => E
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js");

function _(e, t) {
  let n = p(e);
  return i()(null != n, "Result cannot be null because the message is not null"), null != t ? t : n
}

function p(e) {
  var t;
  let n = (0, o.e7)([a.Z], () => null == e ? null : a.Z.getChannel(e.channel_id)),
    r = null == e || null == (t = e.author) ? true : t.id,
    i = null == n ? true : n.guild_id,
    _ = (0, o.e7)([s.ZP], () => null == i || null == r ? null : s.ZP.getMember(i, r)),
    p = (0, o.e7)([d.default], () => d.default.getUser(r), [r]),
    h = f.ZP.useName((null == e ? true : e.author.bot) ? null == e ? true : e.author : p),
    m = (0, o.e7)([c.Z], () => c.Z.getGuild(i), [i]),
    g = null == _ ? true : _.colorRoleId,
    E = (0, o.e7)([l.Z], () => null != i && null != g ? l.Z.getRole(i, g) : true, [i, g]),
    y = (0, o.e7)([u.Z], () => null != r && (null == n ? true : n.isPrivate()) ? u.Z.getNickname(r) : null);
  return null == e ? null : b({
    user: e.author,
    channel: n,
    guild: m,
    memberColorRole: E,
    userName: h,
    member: _,
    friendNickname: y,
    displayNameStyles: null != p ? p.displayNameStyles : e.author.displayNameStyles
  })
}

function h(e) {
  let t = a.Z.getChannel(e.channel_id);
  return E(e.author, t)
}

function m(e, t) {
  let n = g(e, t);
  return i()(null != n, "Result cannot be null because user and channel are not null"), n
}

function g(e, t) {
  let n = null == e ? true : e.id,
    r = null == t ? true : t.guild_id,
    i = (0, o.e7)([s.ZP], () => null == r || null == n ? null : s.ZP.getMember(r, n)),
    a = (0, o.e7)([c.Z], () => c.Z.getGuild(r), [r]),
    d = null == i ? true : i.colorRoleId,
    _ = (0, o.e7)([l.Z], () => null != r && null != d ? l.Z.getRole(r, d) : true, [r, d]),
    p = (0, o.e7)([u.Z], () => null != n && (null == t ? true : t.isPrivate()) ? u.Z.getNickname(n) : null),
    h = f.ZP.useName(e);
  return b({
    user: e,
    channel: t,
    guild: a,
    memberColorRole: _,
    member: i,
    userName: h,
    friendNickname: p,
    displayNameStyles: null == e ? true : e.displayNameStyles
  })
}

function E(e, t) {
  let n = null == e ? true : e.id,
    r = null == t ? true : t.guild_id,
    i = c.Z.getGuild(r),
    o = null == r || null == n ? null : s.ZP.getMember(r, n),
    a = null != r && (null == o ? true : o.colorRoleId) != null ? l.Z.getRole(r, o.colorRoleId) : true,
    d = null != n && null != t && t.isPrivate() ? u.Z.getNickname(n) : null;
  return b({
    user: e,
    channel: t,
    guild: i,
    memberColorRole: a,
    member: o,
    friendNickname: d,
    displayNameStyles: null == e ? true : e.displayNameStyles
  })
}

function b(e) {
  var t, n;
  let {
    user: r,
    channel: i,
    guild: o,
    memberColorRole: a,
    member: s,
    userName: l,
    friendNickname: c,
    displayNameStyles: u
  } = e, d = null == r ? "???" : null != l ? l : f.ZP.getName(r);
  return (null == r ? true : r.id) == null || null == i ? {
    nick: d,
    colorString: null,
    colorStrings: null,
    displayNameStyles: u
  } : (null == o ? true : o.id) == null ? {
    nick: null != c ? c : d,
    colorString: null,
    colorStrings: null,
    displayNameStyles: u
  } : null == s ? {
    nick: d,
    colorString: null,
    colorStrings: null,
    displayNameStyles: u
  } : {
    nick: null != (t = s.nick) ? t : d,
    colorString: s.colorString,
    colorStrings: s.colorStrings,
    colorRoleName: null == a ? true : a.name,
    colorRoleId: null == a ? true : a.id,
    iconRoleId: s.iconRoleId,
    guildMemberAvatar: s.avatar,
    guildMemberAvatarDecoration: s.avatarDecoration,
    primaryGuild: null != (n = r.primaryGuild) ? n : true,
    guildId: o.id,
    authorId: r.id,
    displayNameStyles: u
  }
}