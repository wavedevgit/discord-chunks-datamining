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
  Chunk590415 = require("./590415.js"),
  Chunk430104 = require("./430104.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = {},
  y = {
    speaker: false,
    moderator: false
  };

function O(e, t) {
  let n = p.Z.getVoiceStateForChannel(t, e);
  return (0, h.gf)(n) === h.xO.ON_STAGE
}

function v(e, t, n) {
  return _.BT({
    permission: m.yP,
    user: e,
    context: t,
    overwrites: n.permissionOverwrites,
    roles: u.Z.getUnsafeMutableRoles(t.id)
  })
}

function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = l.Z.getChannel(t),
    i = null == r ? true : r.getGuildId(),
    a = d.Z.getGuild(i);
  return null != a && null != r && r.isGuildStageVoice() ? {
    speaker: O(e, t),
    moderator: n ? v(e, a, r) : null
  } : y
}

function I(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  null == b[t] && (b[t] = {});
  let r = S(e, t, n);
  return b[t][e] = r, r
}

function T(e, t) {
  var n;
  if (null == t) returnfalse;
  let r = l.Z.getChannel(t);
  return null != r && !!r.isGuildStageVoice() && (null == (n = b[t]) || delete n[e], true)
}

function A(e, t) {
  for (let n in b) {
    let r = l.Z.getBasicChannel(n);
    null != r && r.guild_id === t && delete b[n][e]
  }
  returntrue
}

function C(e) {
  let t = Object.values(l.Z.getMutableGuildChannelsForGuild(e)).filter(e => e.isGuildStageVoice());
  for (let e of t) delete b[e.id];
  return t.length > 0
}

function N(e) {
  let {
    channels: t
  } = e;
  for (let e of t) delete b[e.id]
}

function P(e) {
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
  return null != n && null != t && A(n.id, t)
}

function D(e) {
  let {
    voiceStates: t
  } = e;
  return !a().isEmpty(b) && t.reduce((e, t) => {
    let {
      userId: n,
      channelId: r
    } = t;
    return T(n, r) || e
  }, false)
}

function w(e) {
  return C(e.guildId)
}

function x() {
  b = {}
}

function L(e) {
  let {
    guild: t
  } = e;
  for (let e in b) {
    let n = l.Z.getBasicChannel(e);
    (null == n || n.guild_id === t.id) && delete b[e]
  }
}
class j extends(r = Chunk442837.ZP.Store) {
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
    var n, r;
    let i = arguments.length > 2 && true !== arguments[2] && arguments[2];
    if (null == e || null == t || e === (null == (n = f.default.getCurrentUser()) ? true : n.id) && (0, g.NE)()) return y;
    let a = null == (r = b[t]) ? true : r[e];
    if (null != a)
      if (i && null == a.moderator) return I(e, t, true);
      else return a;
    return I(e, t, i)
  }
}
E(j, "displayName", "StageChannelRoleStore");
let M = new j(Chunk570140.Z, {
  CHANNEL_UPDATES: N,
  CONNECTION_OPEN: x,
  GUILD_MEMBER_REMOVE: R,
  GUILD_MEMBER_UPDATE: R,
  GUILD_ROLE_UPDATE: P,
  PASSIVE_UPDATE_V2: w,
  VOICE_STATE_UPDATES: D,
  GUILD_CREATE: L,
  GUILD_DELETE: L
})