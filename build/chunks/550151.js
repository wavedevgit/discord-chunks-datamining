/** Chunk was on web.js **/
/** chunk id: 550151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => _,
  Gy: () => p,
  vG: () => h
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk147036 = require("./147036.js"),
  Chunk170148 = require("./170148.js"),
  Chunk166352 = require("./166352.js"),
  Chunk652215 = require("./652215.js"),
  p = function(e) {
    return e[e.CAN_JOIN = 0] = "CAN_JOIN", e[e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", e[e.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", e[e.CHANNEL_FULL = 3] = "CHANNEL_FULL", e[e.NO_CHANNEL = 4] = "NO_CHANNEL", e[e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS", e[e.ACTIVITY_NOT_SUPPORTED_ON_OS = 6] = "ACTIVITY_NOT_SUPPORTED_ON_OS", e[e.ACTIVITY_AGE_GATED = 7] = "ACTIVITY_AGE_GATED", e[e.NO_USER = 8] = "NO_USER", e[e.IS_AFK_CHANNEL = 9] = "IS_AFK_CHANNEL", e[e.NO_GUILD = 10] = "NO_GUILD", e
  }({});

function _(e) {
  var t, n, r;
  let {
    userId: i,
    activity: a,
    application: s,
    channelId: o,
    currentUser: l,
    isActivitiesEnabledForCurrentPlatform: u,
    ChannelStore: p,
    VoiceStateStore: _,
    PermissionStore: h,
    GuildStore: m
  } = e;
  if (null == i) return 8;
  if ((null == l ? true : l.nsfwAllowed) === false && (null == s || null == (t = s.embeddedActivityConfig) ? true : t.requires_age_gate) === true) return 7;
  if (!u) return 5;
  if (!(0, d.A)(null == s || null == (n = s.embeddedActivityConfig) ? true : n.supported_platforms)) return 6;
  let g = null != o ? o : null == (r = _.getVoiceStateForSession(i, null == a ? true : a.session_id)) ? true : r.channelId;
  if (null == g) return 4;
  let E = p.getChannel(o);
  if (null == E) return 4;
  if (!E.isPrivate()) {
    let e = E.getGuildId();
    if (null == e) return 10;
    let t = m.getGuild(e);
    if ((null == t ? true : t.afkChannelId) === E.id) return 9;
    let n = _.getCurrentClientVoiceChannelId(E.getGuildId()) === g,
      r = (0, c.Pd)(E, _, m),
      i = h.can(f.xBc.CONNECT, E);
    if (!h.can(f.xBc.USE_EMBEDDED_ACTIVITIES, E)) return 1;
    if (E.isVocal() && !n) {
      if (r) return 3;
      if (!i) return 2
    }
  }
  return 0
}

function h(e) {
  let {
    userId: t,
    activity: n,
    channelId: c,
    application: d
  } = e, f = (0, u.z)(), p = (0, r.bG)([o.default], () => o.default.getCurrentUser());
  return (0, r.bG)([i.A, l.A, s.A, a.A], () => _({
    userId: t,
    activity: n,
    application: d,
    channelId: c,
    currentUser: p,
    isActivitiesEnabledForCurrentPlatform: f,
    ChannelStore: i.A,
    VoiceStateStore: l.A,
    PermissionStore: s.A,
    GuildStore: a.A
  }), [n, d, c, p, f, t])
}