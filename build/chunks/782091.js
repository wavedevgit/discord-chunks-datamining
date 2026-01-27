/** Chunk was on web.js **/
/** chunk id: 782091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J4: () => _,
  JH: () => p,
  dL: () => m,
  et: () => h,
  xy: () => f
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk977997 = require("./977997.js"),
  Chunk170148 = require("./170148.js"),
  Chunk360469 = require("./360469.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
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
  if (!c.H5.includes(o.type)) return 7;
  if (!(0, l.A)()) return 6;
  if (null != o && !o.isPrivate()) {
    let e = o.getGuildId();
    if (null == e) return 4;
    let n = r.getGuild(e);
    if ((null == n ? true : n.afkChannelId) === o.id) return 5;
    let s = i.can(u.xBc.CONNECT, o);
    if (!i.can(u.xBc.USE_EMBEDDED_ACTIVITIES, o)) return 1;
    let l = a.getCurrentClientVoiceChannelId(o.getGuildId()) === t;
    if (o.isVocal() && !l && !s) return 2
  }
  return 0
}

function _(e) {
  return p({
    channelId: e,
    ChannelStore: i.A,
    GuildStore: a.A,
    PermissionStore: o.A,
    VoiceStateStore: s.A
  })
}

function h(e) {
  return (0, r.bG)([i.A, a.A, o.A, s.A], () => p({
    channelId: e,
    ChannelStore: i.A,
    GuildStore: a.A,
    PermissionStore: o.A,
    VoiceStateStore: s.A
  }), [e])
}

function m(e) {
  switch (e) {
    case 0:
      return d.intl.string(d.t.qJvTKQ);
    case 1:
      return d.intl.string(d.t.hHGrWz);
    default:
      return d.intl.string(d.t.j29zCr)
  }
}