/** Chunk was on web.js **/
/** chunk id: 527805, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fw: () => p,
  ZP: () => _,
  s5: () => m
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk934415 = require("./934415.js"),
  Chunk790920 = require("./790920.js"),
  Chunk983695 = require("./983695.js"),
  Chunk981631 = require("./981631.js"),
  p = function(e) {
    return e[e.CAN_JOIN = 0] = "CAN_JOIN", e[e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", e[e.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", e[e.CHANNEL_FULL = 3] = "CHANNEL_FULL", e[e.NO_CHANNEL = 4] = "NO_CHANNEL", e[e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", e[e.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS", e[e.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED", e[e.NO_USER = 8] = "NO_USER", e[e.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL", e[e.NO_GUILD = 10] = "NO_GUILD", e
  }({});

function _(e) {
  var t, n, r;
  let {
    userId: i,
    activity: a,
    application: o,
    channelId: s,
    currentUser: l,
    isActivitiesEnabledForCurrentPlatform: u,
    ChannelStore: p,
    VoiceStateStore: _,
    PermissionStore: m,
    GuildStore: h
  } = e;
  if (null == i) return 8;
  if ((null == l ? true : l.nsfwAllowed) === false && (null == o || null == (t = o.embeddedActivityConfig) ? true : t.requires_age_gate) === true) return 7;
  if (!u) return 5;
  if (!(0, d.Z)(null == o || null == (n = o.embeddedActivityConfig) ? true : n.supported_platforms)) return 6;
  let g = null != s ? s : null == (r = _.getVoiceStateForSession(i, null == a ? true : a.session_id)) ? true : r.channelId;
  if (null == g) return 4;
  let E = p.getChannel(s);
  if (null == E) return 4;
  if (!E.isPrivate()) {
    let e = E.getGuildId();
    if (null == e) return 10;
    let t = h.getGuild(e);
    if ((null == t ? true : t.afkChannelId) === E.id) return 9;
    let n = _.getCurrentClientVoiceChannelId(E.getGuildId()) === g,
      r = (0, c.rY)(E, _, h),
      i = m.can(f.Plq.CONNECT, E);
    if (!m.can(f.Plq.USE_EMBEDDED_ACTIVITIES, E)) return 1;
    if (E.isVocal() && !n) {
      if (r) return 3;
      if (!i) return 2
    }
  }
  return 0
}

function m(e) {
  let {
    userId: t,
    activity: n,
    channelId: c,
    application: d
  } = e, f = (0, u.z)(), p = (0, r.e7)([s.default], () => s.default.getCurrentUser());
  return (0, r.e7)([i.Z, l.Z, o.Z, a.Z], () => _({
    userId: t,
    activity: n,
    application: d,
    channelId: c,
    currentUser: p,
    isActivitiesEnabledForCurrentPlatform: f,
    ChannelStore: i.Z,
    VoiceStateStore: l.Z,
    PermissionStore: o.Z,
    GuildStore: a.Z
  }), [n, d, c, p, f, t])
}