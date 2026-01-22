/** Chunk was on web.js **/
/** chunk id: 71393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk23974 = require("./23974.js"),
  Chunk260509 = require("./260509.js"),
  Chunk860689 = require("./860689.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js");

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
class f extends Chunk23974.f {
  getGuildCount() {
    return this.length()
  }
  constructor(...e) {
    super(...e), u(this, "getGuild", e => {
      if (null != e) return e === l.YYv ? c._ : this.get(e)
    }), u(this, "getGuilds", this.memoized(e => d({}, e))), u(this, "getGuildsArray", this.memoized(e => Object.values(e))), u(this, "getGuildIds", this.memoized(e => s.default.keys(e)))
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
      null != n && "unavailable" !== e.data_mode && t.set(e.id, a.kI(e, n))
    }
  },
  CONNECTION_OPEN: (e, t) => {
    let {
      guilds: n
    } = e;
    t.reset((e, t) => {
      for (let r of n) e[r.id] = a.Wj(r, t[r.id])
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
          of n) e[t.id] = a.zT(t, {
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
      for (let t of n) e[t.id] = a.$O(t)
    })
  },
  CACHE_LOADED_LAZY: (e, t) => {
    let {
      guilds: n
    } = e;
    0 !== n.length && t.reset(e => {
      for (let t of n) e[t.id] = a.$O(t)
    })
  },
  GUILD_CREATE: (e, t) => {
    let {
      guild: n
    } = e;
    t.set(n.id, e => a.Wj(n, e))
  },
  GUILD_UPDATE: (e, t) => {
    let {
      guild: n
    } = e;
    t.set(n.id, e => a.Y1(n, e))
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
    } = e, s = o.default.getId(), l = t.get(n);
    if (s !== a.id || null == l) return;
    let c = "string" == typeof r ? new Date(r) : r;
    c !== l.joinedAt && null != c && t.set(n, (0, i.kn)(l, c))
  }
}, "libdiscore")