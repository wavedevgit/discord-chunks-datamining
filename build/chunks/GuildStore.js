/** Chunk was on web.js **/
/** chunk id: 430824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk516888 = require("./516888.js"),
  Chunk601964 = require("./601964.js"),
  Chunk411198 = require("./411198.js"),
  Chunk709054 = require("./709054.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
class f extends Chunk516888.f {
  getGuildCount() {
    return this.length()
  }
  constructor(...e) {
    super(...e), u(this, "getGuild", e => {
      if (null != e) return e === l.I_8 ? c.g : this.get(e)
    }), u(this, "getGuilds", this.memoized(e => d({}, e))), u(this, "getGuildsArray", this.memoized(e => Object.values(e))), u(this, "getGuildIds", this.memoized(e => o.default.keys(e)))
  }
}
u(f, "displayName", "GuildStore");
let p = new f({
  BACKGROUND_SYNC: (e, t) => {
    let {
      guilds: n
    } = e;
    for (let e of n) {
      let n = t.get(e.id);
      null != n && "unavailable" !== e.data_mode && t.set(e.id, a.sp(e, n))
    }
  },
  CONNECTION_OPEN: (e, t) => {
    let {
      guilds: n
    } = e;
    t.reset((e, t) => {
      for (let r of n) e[r.id] = a.wD(r, t[r.id])
    })
  },
  OVERLAY_INITIALIZE: (e, t) => {
    let {
      guilds: n
    } = e;
    t.reset(e => {
      if (null != n)
        for (let {
            properties: t,
            additionalFields: r
          }
          of n) e[t.id] = a.Ee(t, {
          joinedAt: null != r.joinedAt ? new Date(r.joinedAt) : null,
          premiumSubscriberCount: r.premiumSubscriberCount
        })
    })
  },
  CACHE_LOADED: (e, t) => {
    let {
      guilds: n
    } = e;
    t.reset(e => {
      for (let t of n) e[t.id] = a.cL(t)
    })
  },
  CACHE_LOADED_LAZY: (e, t) => {
    let {
      guilds: n
    } = e;
    0 !== n.length && t.reset(e => {
      for (let t of n) e[t.id] = a.cL(t)
    })
  },
  GUILD_CREATE: (e, t) => {
    let {
      guild: n
    } = e;
    t.set(n.id, e => a.wD(n, e))
  },
  GUILD_UPDATE: (e, t) => {
    let {
      guild: n
    } = e;
    t.set(n.id, e => a.R(n, e))
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
      user: a
    } = e, o = s.default.getId(), l = t.get(n);
    if (o !== a.id || null == l) return;
    let c = "string" == typeof r ? new Date(r) : r;
    c !== l.joinedAt && null != c && t.set(n, (0, i.kH)(l, c))
  }
}, "libdiscore")