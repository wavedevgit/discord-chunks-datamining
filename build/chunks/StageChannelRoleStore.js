/** Chunk was on web.js **/
/** chunk id: 312006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => M
}), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk488926 = require("./488926.js"),
  Chunk233993 = require("./233993.js"),
  Chunk105530 = require("./105530.js"),
  Chunk418208 = require("./418208.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = {},
  b = {
    speaker: false,
    moderator: false
  };

function O(e, t) {
  let n = p.A.getVoiceStateForChannel(t, e);
  return (0, m.eY)(n) === m.zF.ON_STAGE
}

function v(e, t, n) {
  return _.$3({
    permission: h.QY,
    user: e,
    context: t,
    overwrites: n.permissionOverwrites,
    roles: u.A.getUnsafeMutableRoles(t.id)
  })
}

function A(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = l.A.getChannel(t),
    i = null == r ? true : r.getGuildId(),
    a = d.A.getGuild(i);
  return null != a && null != r && r.isGuildStageVoice() ? {
    speaker: O(e, t),
    moderator: n ? v(e, a, r) : null
  } : b
}

function I(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  null == y[t] && (y[t] = {});
  let r = A(e, t, n);
  return y[t][e] = r, r
}

function S(e, t) {
  var n;
  if (null == t) returnfalse;
  let r = l.A.getChannel(t);
  return null != r && !!r.isGuildStageVoice() && (null == (n = y[t]) || delete n[e], true)
}

function T(e, t) {
  for (let n in y) {
    let r = l.A.getBasicChannel(n);
    null != r && r.guild_id === t && delete y[n][e]
  }
  returntrue
}

function C(e) {
  let t = Object.values(l.A.getMutableGuildChannelsForGuild(e)).filter(e => e.isGuildStageVoice());
  for (let e of t) delete y[e.id];
  return t.length > 0
}

function N(e) {
  let {
    channels: t
  } = e;
  for (let e of t) delete y[e.id]
}

function w(e) {
  let {
    guildId: t
  } = e;
  C(t)
}

function R(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return null != n && null != t && T(n.id, t)
}

function P(e) {
  let {
    voiceStates: t
  } = e;
  return !a().isEmpty(y) && t.reduce((e, t) => {
    let {
      userId: n,
      channelId: r
    } = t;
    return S(n, r) || e
  }, false)
}

function D(e) {
  return C(e.guildId)
}

function x() {
  y = {}
}

function L(e) {
  let {
    guild: t
  } = e;
  for (let e in y) {
    let n = l.A.getBasicChannel(e);
    (null == n || n.guild_id === t.id) && delete y[e]
  }
}
class j extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.Ay, l.A, d.A, f.default, p.A, u.A)
  }
  isSpeaker(e, t) {
    return this.getPermissionsForUser(e, t).speaker
  }
  isModerator(e, t) {
    var n;
    return null != (n = this.getPermissionsForUser(e, t, true).moderator) && n
  }
  isAudienceMember(e, t) {
    let n = this.getPermissionsForUser(e, t);
    return !n.speaker && !n.moderator
  }
  getPermissionsForUser(e, t) {
    var n, r;
    let i = arguments.length > 2 && true !== arguments[2] && arguments[2];
    if (null == e || null == t || e === (null == (n = f.default.getCurrentUser()) ? true : n.id) && (0, g.o$)()) return b;
    let a = null == (r = y[t]) ? true : r[e];
    if (null != a)
      if (i && null == a.moderator) return I(e, t, true);
      else return a;
    return I(e, t, i)
  }
}
E(j, "displayName", "StageChannelRoleStore");
let M = new j(Chunk73153.h, {
  CHANNEL_UPDATES: N,
  CONNECTION_OPEN: x,
  GUILD_MEMBER_REMOVE: R,
  GUILD_MEMBER_UPDATE: R,
  GUILD_ROLE_UPDATE: w,
  PASSIVE_UPDATE_V2: D,
  VOICE_STATE_UPDATES: P,
  GUILD_CREATE: L,
  GUILD_DELETE: L
})