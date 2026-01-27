/** Chunk was on web.js **/
/** chunk id: 71393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk357758 = require("./357758.js"),
  Chunk867051 = require("./867051.js"),
  Chunk942269 = require("./942269.js"),
  Chunk260509 = require("./260509.js"),
  Chunk860689 = require("./860689.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let t = e;
  return (0, i.yE)(o.vI, h(p({}, t), {
    features: (0, r.y)(t.features),
    joinedAt: null != t.joinedAt ? new Date(t.joinedAt) : null
  }))
}
class g extends Chunk942269.yW {
  stateWrapper() {
    return this.database
  }
  getGuildCount() {
    return this.database.length()
  }
  constructor(...e) {
    super(...e), f(this, "database", this.addKVDatabase("guilds", m)), f(this, "getGuild", e => {
      if (null != e) return e === u.YYv ? d._ : this.database.get(e)
    }), f(this, "getGuilds", this.database.memoized(e => p({}, e))), f(this, "getGuildsArray", this.database.memoized(e => Object.values(e))), f(this, "getGuildIds", this.database.memoized(e => l.default.keys(e)))
  }
}
f(g, "displayName", "GuildStore");
let E = new g({
  BACKGROUND_SYNC: (e, t) => {
    let {
      guilds: n
    } = e;
    for (let e of n) {
      let n = t.get(e.id);
      null != n && "unavailable" !== e.data_mode && t.set(e.id, s.kI(e, n))
    }
  },
  CONNECTION_OPEN: (e, t) => {
    let {
      guilds: n
    } = e, r = {};
    for (let e of n) {
      let n = t.get(e.id);
      null != n && (r[e.id] = n)
    }
    for (let e of (t.clear(), n)) t.set(e.id, s.Wj(e, r[e.id]))
  },
  OVERLAY_INITIALIZE: (e, t) => {
    let {
      guilds: n
    } = e;
    if (t.clear(), null != n)
      for (let {
          properties: e,
          additionalFields: r
        }
        of n) t.set(e.id, s.zT(e, {
        joinedAt: null != r.joinedAt ? new Date(r.joinedAt) : null,
        premiumSubscriberCount: r.premiumSubscriberCount
      }))
  },
  CACHE_LOADED: (e, t) => {
    let {
      guilds: n
    } = e;
    for (let e of (t.clear(), n)) t.set(e.id, s.$O(e))
  },
  CACHE_LOADED_LAZY: (e, t) => {
    let {
      guilds: n
    } = e;
    if (0 !== n.length)
      for (let e of (t.clear(), n)) t.set(e.id, s.$O(e))
  },
  GUILD_CREATE: (e, t) => {
    let {
      guild: n
    } = e, r = t.get(n.id);
    t.set(n.id, s.Wj(n, r))
  },
  GUILD_UPDATE: (e, t) => {
    let {
      guild: n
    } = e, r = t.get(n.id);
    t.set(n.id, s.Y1(n, r))
  },
  GUILD_DELETE: (e, t) => {
    let {
      guild: n
    } = e;
    n.unavailable || t.remove(n.id)
  },
  GUILD_MEMBER_ADD: (e, t) => {
    let {
      guildId: n,
      joinedAt: r,
      user: i
    } = e, a = c.default.getId(), s = t.get(n);
    if (a !== i.id || null == s) return;
    let l = "string" == typeof r ? new Date(r) : r;
    l !== s.joinedAt && null != l && t.set(n, (0, o.kn)(s, l))
  }
})