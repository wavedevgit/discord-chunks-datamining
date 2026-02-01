/** Chunk was on web.js **/
/** chunk id: 808728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => ec,
  I6: () => I,
  vM: () => S
}), require("./638769.js"), require("./321073.js"), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk717125 = require("./717125.js"),
  Chunk47167 = require("./47167.js"),
  Chunk181079 = require("./181079.js"),
  Chunk424345 = require("./424345.js"),
  Chunk95701 = require("./95701.js"),
  Chunk488926 = require("./488926.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = "SELECTABLE",
  S = "VOCAL",
  T = null,
  C = {},
  N = {},
  w = {},
  R = null,
  P = {},
  D = {
    comparator: false,
    channel: (0, Chunk95701.createChannelRecord)({
      id: Chunk652215._Ee,
      type: Chunk652215.rbe.GUILD_CATEGORY,
      name: "Uncategorized"
    })
  },
  L = j(Chunk652215.eGj),
  x = [],
  M = {};

function j(e) {
  return {
    id: e,
    [I]: [],
    [S]: [],
    [v.rbe.GUILD_CATEGORY]: [D],
    count: 0
  }
}

function k(e) {
  let t = C[e];
  return null == t && (t = W(e)), t
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
  e[I].sort(U), e[S].sort(U), e[v.rbe.GUILD_CATEGORY].sort(U)
}

function V(e) {
  return (0, p.tr)(e) ? I : (0, p.ay)(e) ? S : e
}

function F() {
  let e = {},
    t = d.A.getFavoriteChannels();
  for (let n in t) {
    let r = m.A.getChannel(n);
    if (null == r) continue;
    let i = t[n],
      a = (0, f.K)(t, i, r);
    e[n] = {
      channel: a,
      comparator: a.position
    }
  }
  return e
}

function B(e) {
  if (e === v.YYv) return F();
  let t = {},
    n = m.A.getMutableGuildChannelsForGuild(e);
  for (let e in n) t[e] = {
    channel: n[e],
    comparator: n[e].position
  };
  return t
}

function H(e) {
  let {
    id: t
  } = e, n = B(t);
  return a().forEach(n, n => {
    let r = n.channel;
    if (e.count += 1, p.JT.has(r.type) && !y.A.can(v.xBc.VIEW_CHANNEL, r) && !c.A.isChannelGated(r.guild_id, r.id) && r.id !== R) return;
    let i = V(r.type);
    r.type === v.rbe.GUILD_DIRECTORY && (null == P[t] && (P[t] = []), P[t].push(n)), null != e[i] && e[i].push(n)
  }), e
}

function Y() {
  C = {}, P = {}, N = {}, w = {}, null != T && W(T)
}

function W(e) {
  let t = j(e);
  return C[e] = t, P[e] = [], H(t), G(t), K(t), en(e), t
}

function K(e) {
  let t = N[e.id] = {},
    n = {};
  e[I].forEach(e => {
    let {
      channel: r
    } = e, i = (0, u.m1)(r, O.default, b.A), a = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
    null == a ? n[i] = 1 : (n[i] = a + 1, i += "~".concat(a)), t[r.id] = {
      id: r.id,
      name: i
    }
  })
}

function z(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if (null == t) returnfalse;
  C[t] = true, T === t && W(t)
}

function q(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return delete C[t], delete N[t], delete w[t], delete P[t], true
}

function Z(e) {
  let {
    guildId: t,
    user: n
  } = e;
  if (h.default.getId() !== n.id) returnfalse;
  C[t] = true, t === T && W(t)
}

function Q(e) {
  let t = m.A.getBasicChannel(e.id);
  null != t && null != t.guild_id && W(t.guild_id)
}

function X(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) returnfalse;
  C[t] = true, t === T && W(t)
}

function J(e) {
  let {
    channels: t
  } = e, n = false;
  for (let e of t) {
    let {
      guild_id: t
    } = e;
    null != t && (C[t] = true, n = true, T === t && W(t))
  }
  return n
}

function $(e) {
  let {
    guildId: t
  } = e;
  C[t] = true, t === T && W(t)
}

function ee(e, t) {
  return o.X8(_.cc({
    user: e,
    context: t,
    checkElevated: false
  }), v.Lti)
}

function et(e, t) {
  let n = E.A.getGuild(t);
  if (null != n && ee(e, n)) returntrue;
  let r = C[t];
  null == r && (r = W(t));
  let {
    [I]: i, [S]: a
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
  et(O.default.getCurrentUser(), e) ? w[e] = true : delete w[e]
}

function er(e, t) {
  var n;
  R = t;
  let r = null != (n = null == e ? true : e.getGuildId()) ? n : null;
  if (null == r) returnfalse;
  C[r] = true, r === T && W(r)
}

function ei(e) {
  let {
    channelId: t
  } = e;
  return null == t && null != R ? er(m.A.getChannel(R), null) : er(m.A.getChannel(t), t)
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
    return h.default.getSessionId() !== r ? e : er(m.A.getChannel(n), n) || e
  }, false)
}

function eo(e) {
  let {
    guildId: t
  } = e;
  if (T = null != t ? t : null, null == t || null != C[t]) returnfalse;
  W(t)
}

function es() {
  W(v.YYv)
}
class el extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(h.default, m.A, d.A, c.A, g.Ay, E.A, y.A, O.default), this.syncWith([d.A], es)
  }
  getAllGuilds() {
    return C
  }
  getChannels(e) {
    return null != e ? k(e) : L
  }
  getFirstChannelOfType(e, t, n) {
    let r = this.getChannels(e)[n].find(t);
    return null != r ? r.channel : null
  }
  getFirstChannel(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] && arguments[2];
    return null != (n = this.getFirstChannelOfType(e, t, I)) ? n : r ? this.getFirstChannelOfType(e, t, S) : null
  }
  getDefaultChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : v.xBc.VIEW_CHANNEL;
    return this.getFirstChannel(e, e => y.A.can(n, e.channel), t)
  }
  getSFWDefaultChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : v.xBc.VIEW_CHANNEL;
    return this.getFirstChannel(e, e => y.A.can(n, e.channel) && !e.channel.nsfw, t)
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
    return this.getChannels(e)[S].map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })
  }
  getDirectoryChannelIds(e) {
    var t, n;
    return null != (t = null == (n = P[e]) ? true : n.map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })) ? t : x
  }
  hasSelectableChannel(e, t) {
    return this.getSelectableChannelIds(e).includes(t)
  }
  hasElevatedPermissions(e) {
    return w[e] || false
  }
  hasChannels(e) {
    return this.getChannels(e).count > 0
  }
  hasCategories(e) {
    return this.getChannels(e)[v.rbe.GUILD_CATEGORY].length > 1
  }
  getTextChannelNameDisambiguations(e) {
    var t;
    return null != e && null != (t = N[e]) ? t : M
  }
}
A(el, "displayName", "GuildChannelStore");
let ec = new el(Chunk73153.h, {
  BACKGROUND_SYNC: Y,
  CHANNEL_SELECT: eo,
  CONNECTION_OPEN: Y,
  OVERLAY_INITIALIZE: Y,
  CACHE_LOADED_LAZY: Y,
  GUILD_CREATE: z,
  GUILD_UPDATE: z,
  GUILD_DELETE: q,
  GUILD_MEMBER_UPDATE: Z,
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