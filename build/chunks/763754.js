/** Chunk was on web.js **/
/** chunk id: 763754, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => _,
  FT: () => y,
  X4: () => h,
  d8: () => E,
  m2: () => g,
  p_: () => m
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk609425 = require("./609425.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js");

function _(e, t) {
  let n = h(e);
  return i()(null != n, "Result cannot be null because the message is not null"), null != t ? t : n
}

function h(e) {
  var t;
  let n = (0, a.bG)([s.A], () => null == e ? null : s.A.getChannel(e.channel_id)),
    r = null == e || null == (t = e.author) ? true : t.id,
    i = null == n ? true : n.guild_id,
    _ = (0, a.bG)([l.Ay], () => null == i || null == r ? null : l.Ay.getMember(i, r)),
    h = (0, a.bG)([f.default], () => f.default.getUser(r), [r]),
    m = p.Ay.useName((null == e ? true : e.author.bot) ? null == e ? true : e.author : h),
    g = (0, a.bG)([u.A], () => u.A.getGuild(i), [i]),
    E = null == _ ? true : _.colorRoleId,
    y = (0, a.bG)([c.A], () => null != i && null != E ? c.A.getRole(i, E) : true, [i, E]),
    O = (0, a.bG)([d.A], () => null != r && (null == n ? true : n.isPrivate()) ? d.A.getNickname(r) : null),
    v = (0, o.A)({
      userId: r,
      guildId: i
    });
  return null == e ? null : b({
    user: e.author,
    channel: n,
    guild: g,
    memberColorRole: y,
    userName: m,
    member: _,
    friendNickname: O,
    displayNameStyles: v
  })
}

function m(e) {
  let t = s.A.getChannel(e.channel_id);
  return y(e.author, t)
}

function g(e, t) {
  let n = E(e, t);
  return i()(null != n, "Result cannot be null because user and channel are not null"), n
}

function E(e, t) {
  let n = null == e ? true : e.id,
    r = null == t ? true : t.guild_id,
    i = (0, a.bG)([l.Ay], () => null == r || null == n ? null : l.Ay.getMember(r, n)),
    o = (0, a.bG)([u.A], () => u.A.getGuild(r), [r]),
    s = null == i ? true : i.colorRoleId,
    f = (0, a.bG)([c.A], () => null != r && null != s ? c.A.getRole(r, s) : true, [r, s]),
    _ = (0, a.bG)([d.A], () => null != n && (null == t ? true : t.isPrivate()) ? d.A.getNickname(n) : null),
    h = p.Ay.useName(e);
  return b({
    user: e,
    channel: t,
    guild: o,
    memberColorRole: f,
    member: i,
    userName: h,
    friendNickname: _,
    displayNameStyles: null == e ? true : e.displayNameStyles
  })
}

function y(e, t) {
  let n = null == e ? true : e.id,
    r = null == t ? true : t.guild_id,
    i = u.A.getGuild(r),
    a = null == r || null == n ? null : l.Ay.getMember(r, n),
    o = null != r && (null == a ? true : a.colorRoleId) != null ? c.A.getRole(r, a.colorRoleId) : true,
    s = null != n && null != t && t.isPrivate() ? d.A.getNickname(n) : null;
  return b({
    user: e,
    channel: t,
    guild: i,
    memberColorRole: o,
    member: a,
    friendNickname: s,
    displayNameStyles: null == e ? true : e.displayNameStyles
  })
}

function b(e) {
  var t, n;
  let {
    user: r,
    channel: i,
    guild: a,
    memberColorRole: o,
    member: s,
    userName: l,
    friendNickname: c,
    displayNameStyles: u
  } = e, d = null == r ? "???" : null != l ? l : p.Ay.getName(r);
  return (null == r ? true : r.id) == null || null == i ? {
    nick: d,
    colorString: null,
    colorStrings: null,
    displayNameStyles: u
  } : (null == a ? true : a.id) == null ? {
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
    colorRoleName: null == o ? true : o.name,
    colorRoleId: null == o ? true : o.id,
    iconRoleId: s.iconRoleId,
    guildMemberAvatar: s.avatar,
    guildMemberAvatarDecoration: s.avatarDecoration,
    primaryGuild: null != (n = r.primaryGuild) ? n : true,
    guildId: a.id,
    authorId: r.id,
    displayNameStyles: u
  }
}