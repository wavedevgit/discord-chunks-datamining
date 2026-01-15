/** Chunk was on web.js **/
/** chunk id: 984933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => ec,
  Zb: () => T,
  sH: () => I
}), require("./642613.js"), require("./539854.js"), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430198 = require("./430198.js"),
  Chunk933557 = require("./933557.js"),
  Chunk853856 = require("./853856.js"),
  Chunk846787 = require("./846787.js"),
  Chunk131704 = require("./131704.js"),
  Chunk700785 = require("./700785.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = "SELECTABLE",
  T = "VOCAL",
  C = null,
  A = {},
  N = {},
  P = {},
  w = null,
  R = {},
  D = {
    comparator: false,
    channel: (0, Chunk131704.createChannelRecord)({
      id: Chunk981631.Sc2,
      type: Chunk981631.d4z.GUILD_CATEGORY,
      name: "Uncategorized"
    })
  },
  x = M(Chunk981631.kod),
  L = [],
  j = {};

function M(e) {
  return {
    id: e,
    [I]: [],
    [T]: [],
    [v.d4z.GUILD_CATEGORY]: [D],
    count: 0
  }
}

function k(e) {
  let t = A[e];
  return null == t && (t = Y(e)), t
}

function U(e, t) {
  let {
    comparator: n
  } = e, {
    comparator: r
  } = t;
  return n - r
}

function G(e) {
  e[I].sort(U), e[T].sort(U), e[v.d4z.GUILD_CATEGORY].sort(U)
}

function Z(e) {
  return (0, p.r8)(e) ? I : (0, p.bw)(e) ? T : e
}

function F() {
  let e = {},
    t = d.Z.getFavoriteChannels();
  for (let n in t) {
    let r = m.Z.getChannel(n);
    if (null == r) continue;
    let i = t[n],
      a = (0, f.r)(t, i, r);
    e[n] = {
      channel: a,
      comparator: a.position
    }
  }
  return e
}

function B(e) {
  if (e === v.I_8) return F();
  let t = {},
    n = m.Z.getMutableGuildChannelsForGuild(e);
  for (let e in n) t[e] = {
    channel: n[e],
    comparator: n[e].position
  };
  return t
}

function V(e) {
  let {
    id: t
  } = e, n = B(t);
  return a().forEach(n, n => {
    let r = n.channel;
    if (e.count += 1, p.zS.has(r.type) && !b.Z.can(v.Plq.VIEW_CHANNEL, r) && !c.Z.isChannelGated(r.guild_id, r.id) && r.id !== w) return;
    let i = Z(r.type);
    r.type === v.d4z.GUILD_DIRECTORY && (null == R[t] && (R[t] = []), R[t].push(n)), null != e[i] && e[i].push(n)
  }), e
}

function H() {
  A = {}, R = {}, N = {}, P = {}, null != C && Y(C)
}

function Y(e) {
  let t = M(e);
  return A[e] = t, R[e] = [], V(t), G(t), W(t), en(e), t
}

function W(e) {
  let t = N[e.id] = {},
    n = {};
  e[I].forEach(e => {
    let {
      channel: r
    } = e, i = (0, u.F6)(r, O.default, y.Z), a = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
    null == a ? n[i] = 1 : (n[i] = a + 1, i += "~".concat(a)), t[r.id] = {
      id: r.id,
      name: i
    }
  })
}

function K(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if (null == t) returnfalse;
  A[t] = true, C === t && Y(t)
}

function z(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return delete A[t], delete N[t], delete P[t], delete R[t], true
}

function q(e) {
  let {
    guildId: t,
    user: n
  } = e;
  if (h.default.getId() !== n.id) returnfalse;
  A[t] = true, t === C && Y(t)
}

function Q(e) {
  let t = m.Z.getBasicChannel(e.id);
  null != t && null != t.guild_id && Y(t.guild_id)
}

function X(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) returnfalse;
  A[t] = true, t === C && Y(t)
}

function J(e) {
  let {
    channels: t
  } = e, n = false;
  for (let e of t) {
    let {
      guild_id: t
    } = e;
    null != t && (A[t] = true, n = true, C === t && Y(t))
  }
  return n
}

function $(e) {
  let {
    guildId: t
  } = e;
  A[t] = true, t === C && Y(t)
}

function ee(e, t) {
  return o.Db(_.uB({
    user: e,
    context: t,
    checkElevated: false
  }), v.TC2)
}

function et(e, t) {
  let n = E.Z.getGuild(t);
  if (null != n && ee(e, n)) returntrue;
  let r = A[t];
  null == r && (r = Y(t));
  let {
    [I]: i, [T]: a
  } = r;
  for (let {
      channel: t
    }
    of i)
    if (ee(e, t)) returntrue;
  for (let {
      channel: t
    }
    of a)
    if (ee(e, t)) returntrue;
  returnfalse
}

function en(e) {
  et(O.default.getCurrentUser(), e) ? P[e] = true : delete P[e]
}

function er(e, t) {
  var n;
  w = t;
  let r = null != (n = null == e ? true : e.getGuildId()) ? n : null;
  if (null == r) returnfalse;
  A[r] = true, r === C && Y(r)
}

function ei(e) {
  let {
    channelId: t
  } = e;
  return null == t && null != w ? er(m.Z.getChannel(w), null) : er(m.Z.getChannel(t), t)
}

function ea(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let {
      channelId: n,
      sessionId: r
    } = t;
    return h.default.getSessionId() !== r ? e : er(m.Z.getChannel(n), n) || e
  }, false)
}

function eo(e) {
  let {
    guildId: t
  } = e;
  if (C = null != t ? t : null, null == t || null != A[t]) returnfalse;
  Y(t)
}

function es() {
  Y(v.I_8)
}
class el extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(h.default, m.Z, d.Z, c.Z, g.ZP, E.Z, b.Z, O.default), this.syncWith([d.Z], es)
  }
  getAllGuilds() {
    return A
  }
  getChannels(e) {
    return null != e ? k(e) : x
  }
  getFirstChannelOfType(e, t, n) {
    let r = this.getChannels(e)[n].find(t);
    return null != r ? r.channel : null
  }
  getFirstChannel(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] && arguments[2];
    return null != (n = this.getFirstChannelOfType(e, t, I)) ? n : r ? this.getFirstChannelOfType(e, t, T) : null
  }
  getDefaultChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : v.Plq.VIEW_CHANNEL;
    return this.getFirstChannel(e, e => b.Z.can(n, e.channel), t)
  }
  getSFWDefaultChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : v.Plq.VIEW_CHANNEL;
    return this.getFirstChannel(e, e => b.Z.can(n, e.channel) && !e.channel.nsfw, t)
  }
  getSelectableChannelIds(e) {
    return this.getChannels(e)[I].map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })
  }
  getSelectableChannels(e) {
    return this.getChannels(e)[I]
  }
  getVocalChannelIds(e) {
    return this.getChannels(e)[T].map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })
  }
  getDirectoryChannelIds(e) {
    var t, n;
    return null != (n = null == (t = R[e]) ? true : t.map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })) ? n : L
  }
  hasSelectableChannel(e, t) {
    return this.getSelectableChannelIds(e).includes(t)
  }
  hasElevatedPermissions(e) {
    return P[e] || false
  }
  hasChannels(e) {
    return this.getChannels(e).count > 0
  }
  hasCategories(e) {
    return this.getChannels(e)[v.d4z.GUILD_CATEGORY].length > 1
  }
  getTextChannelNameDisambiguations(e) {
    var t;
    return null != e && null != (t = N[e]) ? t : j
  }
}
S(el, "displayName", "GuildChannelStore");
let ec = new el(Chunk570140.Z, {
  BACKGROUND_SYNC: H,
  CHANNEL_SELECT: eo,
  CONNECTION_OPEN: H,
  OVERLAY_INITIALIZE: H,
  CACHE_LOADED_LAZY: H,
  GUILD_CREATE: K,
  GUILD_UPDATE: K,
  GUILD_DELETE: z,
  GUILD_MEMBER_UPDATE: q,
  CHANNEL_CREATE: X,
  CHANNEL_DELETE: X,
  CHANNEL_UPDATES: J,
  GUILD_ROLE_CREATE: $,
  GUILD_ROLE_UPDATE: $,
  GUILD_ROLE_DELETE: $,
  IMPERSONATE_UPDATE: $,
  IMPERSONATE_STOP: $,
  VOICE_CHANNEL_SELECT: ei,
  VOICE_CHANNEL_STATUS_UPDATE: Q,
  VOICE_STATE_UPDATES: ea
})