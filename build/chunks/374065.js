/** Chunk was on web.js **/
/** chunk id: 374065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hn: () => _,
  KF: () => m,
  e4: () => p,
  g5: () => h,
  jy: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk790920 = require("./790920.js"),
  Chunk701488 = require("./701488.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  f = function(e) {
    return e[e.CAN_LAUNCH = 0] = "CAN_LAUNCH", e[e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", e[e.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", e[e.NO_CHANNEL = 3] = "NO_CHANNEL", e[e.NO_GUILD = 4] = "NO_GUILD", e[e.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL", e[e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", e[e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL = 7] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL", e
  }({});

function p(e) {
  let {
    channelId: t,
    ChannelStore: n,
    GuildStore: r,
    PermissionStore: i,
    VoiceStateStore: a
  } = e, o = n.getChannel(t);
  if (null == o) return 3;
  if (!c.Gu.includes(o.type)) return 7;
  if (!(0, l.a)()) return 6;
  if (null != o && !o.isPrivate()) {
    let e = o.getGuildId();
    if (null == e) return 4;
    let n = r.getGuild(e);
    if ((null == n ? true : n.afkChannelId) === o.id) return 5;
    let s = i.can(u.Plq.CONNECT, o);
    if (!i.can(u.Plq.USE_EMBEDDED_ACTIVITIES, o)) return 1;
    let l = a.getCurrentClientVoiceChannelId(o.getGuildId()) === t;
    if (o.isVocal() && !l && !s) return 2
  }
  return 0
}

function _(e) {
  return p({
    channelId: e,
    ChannelStore: i.Z,
    GuildStore: a.Z,
    PermissionStore: o.Z,
    VoiceStateStore: s.Z
  })
}

function m(e) {
  return (0, r.e7)([i.Z, a.Z, o.Z, s.Z], () => p({
    channelId: e,
    ChannelStore: i.Z,
    GuildStore: a.Z,
    PermissionStore: o.Z,
    VoiceStateStore: s.Z
  }), [e])
}

function h(e) {
  switch (e) {
    case 0:
      return d.intl.string(d.t.qJvTKQ);
    case 1:
      return d.intl.string(d.t.hHGrWz);
    default:
      return d.intl.string(d.t.j29zCr)
  }
}