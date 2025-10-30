/** Chunk was on web.js **/
/** chunk id: 88751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => M
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk700785 = require("./700785.js"),
  Chunk146085 = require("./146085.js"),
  Chunk590415 = require("./590415.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = {},
  b = {
    speaker: false,
    moderator: false
  };

function y(e, t) {
  let n = _.Z.getVoiceStateForChannel(t, e);
  return (0, m.gf)(n) === m.xO.ON_STAGE
}

function O(e, t, n) {
  return p.BT({
    permission: h.yP,
    user: e,
    context: t,
    overwrites: n.permissionOverwrites,
    roles: u.Z.getUnsafeMutableRoles(t.id)
  })
}

function v(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = l.Z.getChannel(t),
    i = null == r ? true : r.getGuildId(),
    a = d.Z.getGuild(i);
  return null != a && null != r && r.isGuildStageVoice() ? {
    speaker: y(e, t),
    moderator: n ? O(e, a, r) : null
  } : b
}

function I(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  null == E[t] && (E[t] = {});
  let r = v(e, t, n);
  return E[t][e] = r, r
}

function S(e, t) {
  var n;
  if (null == t) returnfalse;
  let r = l.Z.getChannel(t);
  return null != r && !!r.isGuildStageVoice() && (null == (n = E[t]) || delete n[e], true)
}

function T(e, t) {
  for (let n in E) {
    let r = l.Z.getBasicChannel(n);
    null != r && r.guild_id === t && delete E[n][e]
  }
  returntrue
}

function A(e) {
  let t = Object.values(l.Z.getMutableGuildChannelsForGuild(e)).filter(e => e.isGuildStageVoice());
  for (let e of t) delete E[e.id];
  return t.length > 0
}

function C(e) {
  let {
    channels: t
  } = e;
  for (let e of t) delete E[e.id]
}

function N(e) {
  let {
    guildId: t
  } = e;
  A(t)
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
  return !a().isEmpty(E) && t.reduce((e, t) => {
    let {
      userId: n,
      channelId: r
    } = t;
    return S(n, r) || e
  }, false)
}

function w(e) {
  return A(e.guildId)
}

function D() {
  E = {}
}

function L(e) {
  let {
    guild: t
  } = e;
  for (let e in E) {
    let n = l.Z.getBasicChannel(e);
    (null == n || n.guild_id === t.id) && delete E[e]
  }
}
class x extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk271383.ZP, Chunk592125.Z, Chunk430824.Z, Chunk594174.default, Chunk979651.Z, Chunk485386.Z)
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
    var n;
    let r = arguments.length > 2 && true !== arguments[2] && arguments[2];
    if (null == e || null == t) return b;
    let i = null == (n = E[t]) ? true : n[e];
    if (null != i)
      if (r && null == i.moderator) return I(e, t, true);
      else return i;
    return I(e, t, r)
  }
}
g(x, "displayName", "StageChannelRoleStore");
let M = new x(Chunk570140.Z, {
  CHANNEL_UPDATES: C,
  CONNECTION_OPEN: D,
  GUILD_MEMBER_REMOVE: R,
  GUILD_MEMBER_UPDATE: R,
  GUILD_ROLE_UPDATE: N,
  PASSIVE_UPDATE_V2: w,
  VOICE_STATE_UPDATES: P,
  GUILD_CREATE: L,
  GUILD_DELETE: L
})