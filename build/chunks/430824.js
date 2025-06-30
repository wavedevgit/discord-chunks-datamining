/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
}), n(388685);
var r = n(845856),
  i = n(601964),
  a = n(411198),
  o = n(709054),
  s = n(314897),
  l = n(981631),
  c = n(647086);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
class f extends r.fE {
  getGuild(e) {
    if (null != e) return e === l.I_8 ? c.g : this.get(e)
  }
  getGuildCount() {
    return this.length()
  }
  constructor(...e) {
    super(...e), u(this, "getGuilds", this.memoized(e => d({}, e))), u(this, "getGuildsArray", this.memoized(e => Object.values(e))), u(this, "getGuildIds", this.memoized(e => o.default.keys(e)))
  }
}
u(f, "displayName", "GuildStore");
let _ = new f(e => ({
  BACKGROUND_SYNC: t => {
    let {
      guilds: n
    } = t;
    for (let t of n) {
      let n = e.get(t.id);
      null != n && "unavailable" !== t.data_mode && e.set(t.id, a.sp(t, n))
    }
  },
  CONNECTION_OPEN: t => {
    let {
      guilds: n
    } = t;
    e.reset((e, t) => {
      for (let r of n) e[r.id] = a.wD(r, t[r.id])
    })
  },
  OVERLAY_INITIALIZE: t => {
    let {
      guilds: n
    } = t;
    e.reset(e => {
      if (null != n)
        for (let t of n) e[t.id] = new i.ZP(t)
    })
  },
  CACHE_LOADED: t => {
    let {
      guilds: n
    } = t;
    e.reset(e => {
      for (let t of n) e[t.id] = a.cL(t)
    })
  },
  CACHE_LOADED_LAZY: t => {
    let {
      guilds: n
    } = t;
    if (0 === n.length) return !1;
    e.reset(e => {
      for (let t of n) e[t.id] = a.cL(t)
    })
  },
  GUILD_CREATE: t => {
    let {
      guild: n
    } = t;
    e.set(n.id, e => a.wD(n, e))
  },
  GUILD_UPDATE: t => {
    let {
      guild: n
    } = t;
    e.set(n.id, e => a.di(n, e))
  },
  GUILD_DELETE: t => {
    let {
      guild: n
    } = t;
    return !n.unavailable && e.remove(n.id)
  },
  GUILD_MEMBER_ADD: t => {
    let {
      guildId: n,
      joinedAt: r,
      user: i
    } = t, a = s.default.getId(), o = e.get(n);
    if (a !== i.id || null == o) return !1;
    let l = "string" == typeof r ? new Date(r) : r;
    if (l === o.joinedAt || null == l) return !1;
    e.set(n, o.updateJoinedAt(l))
  }
}))