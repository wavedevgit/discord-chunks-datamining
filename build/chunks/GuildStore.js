/** Chunk was on web.js **/
/** chunk id: 71393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk357758 = require("./357758.js"),
  Chunk867051 = require("./867051.js"),
  Chunk548965 = require("./548965.js"),
  Chunk942269 = require("./942269.js"),
  Chunk260509 = require("./260509.js"),
  Chunk860689 = require("./860689.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let t = e;
  return (0, i.yE)(s.vI, m(_({}, t), {
    features: (0, r.y)(t.features),
    joinedAt: null != t.joinedAt ? new Date(t.joinedAt) : null,
    premiumProgressBarEnabledUserUpdatedAt: null != t.premiumProgressBarEnabledUserUpdatedAt ? new Date(t.premiumProgressBarEnabledUserUpdatedAt) : null
  }))
}
class E extends Chunk942269.yW {
  stateWrapper() {
    return this.database
  }
  getGuildCount() {
    return this.database.length()
  }
  constructor(...e) {
    super(...e), p(this, "database", this.addKVDatabase("guilds", g)), p(this, "getGuild", e => {
      if (null != e) return e === d.YYv ? f._ : this.database.get(e)
    }), p(this, "getGuilds", this.database.memoized(e => _({}, e))), p(this, "getGuildsArray", this.database.memoized(e => Object.values(e))), p(this, "getGuildIds", this.database.memoized(e => c.default.keys(e)))
  }
}
p(E, "displayName", "GuildStore");
let y = new E({
  BACKGROUND_SYNC: (e, t) => {
    let {
      guilds: n
    } = e;
    for (let e of n) {
      let n = t.get(e.id);
      null != n && "unavailable" !== e.data_mode && t.set(e.id, l.kI(e, n))
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
    for (let e of (t.clear(), n)) t.set(e.id, l.Wj(e, r[e.id]))
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
        of n) t.set(e.id, l.zT(e, {
        joinedAt: null != r.joinedAt ? new Date(r.joinedAt) : null,
        premiumSubscriberCount: r.premiumSubscriberCount
      }))
  },
  CACHE_LOADED: (e, t) => {
    let {
      guilds: n
    } = e;
    for (let e of (t.clear(), n)) t.set(e.id, l.$O(e))
  },
  CACHE_LOADED_LAZY: (e, t) => {
    let {
      guilds: n
    } = e;
    if (0 !== n.length)
      for (let e of (t.clear(), n)) t.set(e.id, l.$O(e))
  },
  GUILD_CREATE: (e, t) => {
    let {
      guild: n
    } = e, r = t.get(n.id);
    t.set(n.id, l.Wj(n, r))
  },
  GUILD_UPDATE: (e, t) => {
    let {
      guild: n
    } = e, r = t.get(n.id);
    t.set(n.id, l.Y1(n, r))
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
    } = e, a = u.default.getId(), o = t.get(n);
    if (a !== i.id || null == o) return;
    let l = "string" == typeof r ? new Date(r) : r;
    l !== o.joinedAt && null != l && t.set(n, (0, s.kn)(o, l))
  }
}, Chunk548965.P4.getCachedBridgedStoreMode())