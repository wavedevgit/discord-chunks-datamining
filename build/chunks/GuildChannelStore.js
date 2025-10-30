/** Chunk was on web.js **/
/** chunk id: 984933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => ec,
  Zb: () => T,
  sH: () => S
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let S = "SELECTABLE",
  T = "VOCAL",
  A = null,
  C = {},
  N = {},
  R = {},
  P = null,
  w = {},
  D = {
    comparator: false,
    channel: (0, Chunk131704.createChannelRecord)({
      id: Chunk981631.Sc2,
      type: Chunk981631.d4z.GUILD_CATEGORY,
      name: "Uncategorized"
    })
  },
  L = k(Chunk981631.kod),
  x = [],
  M = {};

function k(e) {
  return {
    id: e,
    [S]: [],
    [T]: [],
    [v.d4z.GUILD_CATEGORY]: [D],
    count: 0
  }
}

function j(e) {
  let t = C[e];
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
  e[S].sort(U), e[T].sort(U), e[v.d4z.GUILD_CATEGORY].sort(U)
}

function B(e) {
  return (0, _.r8)(e) ? S : (0, _.bw)(e) ? T : e
}

function Z() {
  let e = {},
    t = Chunk853856.Z.getFavoriteChannels();
  for (let n in exports) {
    let r = Chunk592125.Z.getChannel(require);
    if (null == r) continue;
    let i = exports[require],
      a = (0, Chunk846787.r)(exports, Chunk392711, r);
    module[require] = {
      channel: a,
      comparator: a.position
    }
  }
  return module
}

function F(e) {
  if (e === v.I_8) return Z();
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
  } = e, n = F(t);
  return a().forEach(n, n => {
    let r = n.channel;
    if (e.count += 1, _.zS.has(r.type) && !b.Z.can(v.Plq.VIEW_CHANNEL, r) && !c.Z.isChannelGated(r.guild_id, r.id) && r.id !== P) return;
    let i = B(r.type);
    r.type === v.d4z.GUILD_DIRECTORY && (null == w[t] && (w[t] = []), w[t].push(n)), null != e[i] && e[i].push(n)
  }), e
}

function H() {
  C = {}, w = {}, N = {}, R = {}, null != A && Y(A)
}

function Y(e) {
  let t = k(e);
  return C[e] = t, w[e] = [], V(t), G(t), W(t), en(e), t
}

function W(e) {
  let t = N[e.id] = {},
    n = {};
  e[S].forEach(e => {
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
  C[t] = true, A === t && Y(t)
}

function z(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return delete C[t], delete N[t], delete R[t], delete w[t], true
}

function q(e) {
  let {
    guildId: t,
    user: n
  } = e;
  if (h.default.getId() !== n.id) returnfalse;
  C[t] = true, t === A && Y(t)
}

function X(e) {
  let t = m.Z.getBasicChannel(e.id);
  null != t && null != t.guild_id && Y(t.guild_id)
}

function Q(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) returnfalse;
  C[t] = true, t === A && Y(t)
}

function J(e) {
  let {
    channels: t
  } = e, n = false;
  for (let e of t) {
    let {
      guild_id: t
    } = e;
    null != t && (C[t] = true, n = true, A === t && Y(t))
  }
  return n
}

function $(e) {
  let {
    guildId: t
  } = e;
  C[t] = true, t === A && Y(t)
}

function ee(e, t) {
  return o.Db(p.uB({
    user: e,
    context: t,
    checkElevated: false
  }), v.TC2)
}

function et(e, t) {
  let n = E.Z.getGuild(t);
  if (null != n && ee(e, n)) returntrue;
  let r = C[t];
  null == r && (r = Y(t));
  let {
    [S]: i, [T]: a
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
  et(O.default.getCurrentUser(), e) ? R[e] = true : delete R[e]
}

function er(e, t) {
  var n;
  P = t;
  let r = null != (n = null == e ? true : e.getGuildId()) ? n : null;
  if (null == r) returnfalse;
  C[r] = true, r === A && Y(r)
}

function ei(e) {
  let {
    channelId: t
  } = e;
  return null == t && null != P ? er(m.Z.getChannel(P), null) : er(m.Z.getChannel(t), t)
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
  if (A = null != t ? t : null, null == t || null != C[t]) returnfalse;
  Y(t)
}

function es() {
  Y(Chunk981631.I_8)
}
class el extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk853856.Z, Chunk430198.Z, Chunk271383.ZP, Chunk430824.Z, Chunk496675.Z, Chunk594174.default), this.syncWith([Chunk853856.Z], es)
  }
  getAllGuilds() {
    return C
  }
  getChannels(e) {
    return null != e ? j(e) : L
  }
  getFirstChannelOfType(e, t, n) {
    let r = this.getChannels(e)[n].find(t);
    return null != r ? r.channel : null
  }
  getFirstChannel(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] && arguments[2];
    return null != (n = this.getFirstChannelOfType(e, t, S)) ? n : r ? this.getFirstChannelOfType(e, t, T) : null
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
    return this.getChannels(e)[S].map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })
  }
  getSelectableChannels(e) {
    return this.getChannels(e)[S]
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
    return null != (n = null == (t = w[e]) ? true : t.map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })) ? n : x
  }
  hasSelectableChannel(e, t) {
    return this.getSelectableChannelIds(e).includes(t)
  }
  hasElevatedPermissions(e) {
    return R[e] || false
  }
  hasChannels(e) {
    return this.getChannels(e).count > 0
  }
  hasCategories(e) {
    return this.getChannels(e)[v.d4z.GUILD_CATEGORY].length > 1
  }
  getTextChannelNameDisambiguations(e) {
    var t;
    return null != e && null != (t = N[e]) ? t : M
  }
}
I(el, "displayName", "GuildChannelStore");
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
  CHANNEL_CREATE: Q,
  CHANNEL_DELETE: Q,
  CHANNEL_UPDATES: J,
  GUILD_ROLE_CREATE: $,
  GUILD_ROLE_UPDATE: $,
  GUILD_ROLE_DELETE: $,
  IMPERSONATE_UPDATE: $,
  IMPERSONATE_STOP: $,
  VOICE_CHANNEL_SELECT: ei,
  VOICE_CHANNEL_STATUS_UPDATE: X,
  VOICE_STATE_UPDATES: ea
})