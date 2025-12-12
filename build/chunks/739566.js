/** Chunk was on web.js **/
/** chunk id: 739566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JZ: () => g,
  Sw: () => E,
  Uj: () => m,
  ZH: () => h,
  ZP: () => _,
  ij: () => b
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk386725 = require("./386725.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js");

function _(e, t) {
  let n = m(e);
  return i()(null != n, "Result cannot be null because the message is not null"), null != t ? t : n
}

function m(e) {
  var t;
  let n = (0, o.e7)([s.Z], () => null == e ? null : s.Z.getChannel(e.channel_id)),
    r = null == e || null == (t = e.author) ? true : t.id,
    i = null == n ? true : n.guild_id,
    _ = (0, o.e7)([l.ZP], () => null == i || null == r ? null : l.ZP.getMember(i, r)),
    m = (0, o.e7)([f.default], () => f.default.getUser(r), [r]),
    h = p.ZP.useName((null == e ? true : e.author.bot) ? null == e ? true : e.author : m),
    g = (0, o.e7)([u.Z], () => u.Z.getGuild(i), [i]),
    E = null == _ ? true : _.colorRoleId,
    b = (0, o.e7)([c.Z], () => null != i && null != E ? c.Z.getRole(i, E) : true, [i, E]),
    O = (0, o.e7)([d.Z], () => null != r && (null == n ? true : n.isPrivate()) ? d.Z.getNickname(r) : null),
    v = (0, a.Z)({
      userId: r,
      guildId: i
    });
  return null == e ? null : y({
    user: e.author,
    channel: n,
    guild: g,
    memberColorRole: b,
    userName: h,
    member: _,
    friendNickname: O,
    displayNameStyles: v
  })
}

function h(e) {
  let t = s.Z.getChannel(e.channel_id);
  return b(e.author, t)
}

function g(e, t) {
  let n = E(e, t);
  return i()(null != n, "Result cannot be null because user and channel are not null"), n
}

function E(e, t) {
  let n = null == e ? true : e.id,
    r = null == t ? true : t.guild_id,
    i = (0, o.e7)([l.ZP], () => null == r || null == n ? null : l.ZP.getMember(r, n)),
    a = (0, o.e7)([u.Z], () => u.Z.getGuild(r), [r]),
    s = null == i ? true : i.colorRoleId,
    f = (0, o.e7)([c.Z], () => null != r && null != s ? c.Z.getRole(r, s) : true, [r, s]),
    _ = (0, o.e7)([d.Z], () => null != n && (null == t ? true : t.isPrivate()) ? d.Z.getNickname(n) : null),
    m = p.ZP.useName(e);
  return y({
    user: e,
    channel: t,
    guild: a,
    memberColorRole: f,
    member: i,
    userName: m,
    friendNickname: _,
    displayNameStyles: null == e ? true : e.displayNameStyles
  })
}

function b(e, t) {
  let n = null == e ? true : e.id,
    r = null == t ? true : t.guild_id,
    i = u.Z.getGuild(r),
    o = null == r || null == n ? null : l.ZP.getMember(r, n),
    a = null != r && (null == o ? true : o.colorRoleId) != null ? c.Z.getRole(r, o.colorRoleId) : true,
    s = null != n && null != t && t.isPrivate() ? d.Z.getNickname(n) : null;
  return y({
    user: e,
    channel: t,
    guild: i,
    memberColorRole: a,
    member: o,
    friendNickname: s,
    displayNameStyles: null == e ? true : e.displayNameStyles
  })
}

function y(e) {
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
  } = e, d = null == r ? "???" : null != l ? l : p.ZP.getName(r);
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