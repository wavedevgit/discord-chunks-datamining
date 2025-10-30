/** Chunk was on web.js **/
/** chunk id: 485386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./415506.js"), require("./388685.js");
var Chunk894276 = require("./894276.js"),
  Chunk429091 = require("./429091.js"),
  Chunk601964 = require("./601964.js"),
  Chunk539600 = require("./539600.js"),
  Chunk625137 = require("./625137.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
class u extends Chunk429091.d {
  serializeAllGuildRoles() {
    return this.mapPartitions(Chunk539600.an)
  }
  getUnsafeMutableRoles(e) {
    return this.getPartition(e)
  }
  getManyRoles(e, t) {
    return this.getManyRecords(e, t)
  }
  getRole(e, t) {
    return this.getRecord(e, t)
  }
  getNumRoles(e) {
    return this.partitionLength(e)
  }
  getEveryoneRole(e) {
    let t = (0, a.lV)(e),
      n = this.getRecord(e.id, t);
    if (null == n) throw Error("Guild ".concat(e.id, " does not have an @everyone role"));
    return n
  }
  constructor(...e) {
    super(...e), l(this, "getSortedRoles", this.memoizedPartition((e, t) => s.BL(Object.values(t)))), l(this, "getRolesSnapshot", this.memoizedPartition((e, t) => c({}, t)))
  }
}
l(u, "displayName", "GuildRoleStore");
let d = new u({
  BACKGROUND_SYNC: (e, t) => {
    let {
      guilds: n
    } = e;
    for (let e of n) {
      let n = t.getPartition(e.id);
      null != n && "unavailable" !== e.data_mode && t.setPartition(e.id, "partial" === e.data_mode ? s.EO(e.id, n, e.partial_updates.roles, e.partial_updates.deleted_role_ids) : o.qt(e.id, e.roles))
    }
  },
  OVERLAY_INITIALIZE: (e, t) => {
    t.reset(t => {
      for (let {
          partitionKey: n,
          values: r
        }
        of e.serializedGuildRoles) t[n] = o.If(n, r)
    })
  },
  CONNECTION_OPEN: (e, t) => {
    let {
      guilds: n
    } = e;
    return t.reset(e => {
      for (let {
          id: t,
          roles: r
        }
        of n) e[t] = Array.isArray(r) ? o.qt(t, r) : r
    })
  },
  CACHE_LOADED: (e, t) => {
    let {
      guilds: n
    } = e;
    t.reset(e => {
      for (let {
          id: t,
          roles: r
        }
        of n) e[t] = o.If(t, r)
    })
  },
  CACHE_LOADED_LAZY: (e, t) => {
    0 !== e.guilds.length && t.reset(t => {
      for (let {
          id: n,
          roles: r
        }
        of e.guilds) t[n] = o.If(n, r)
    })
  },
  GUILD_CREATE: (e, t) => {
    let {
      guild: {
        id: n,
        roles: r
      }
    } = e;
    t.setPartition(n, Array.isArray(r) ? o.qt(n, r) : r)
  },
  GUILD_UPDATE: (e, t) => {
    let {
      guild: {
        id: n,
        roles: r
      }
    } = e;
    t.setPartition(n, o.qt(n, r))
  },
  GUILD_DELETE: (e, t) => {
    let {
      guild: {
        id: n,
        unavailable: r
      }
    } = e;
    r || t.removePartition(n)
  },
  GUILD_ROLE_CREATE: (e, t) => {
    t.set(e.guildId, e.role.id, o.wD(e.guildId, e.role))
  },
  GUILD_ROLE_UPDATE: (e, t) => {
    t.set(e.guildId, e.role.id, o.wD(e.guildId, e.role))
  },
  GUILD_ROLE_DELETE: (e, t) => {
    let {
      guildId: n,
      roleId: r
    } = e;
    t.remove(n, r)
  }
}, Chunk894276.Ng.getCachedBridgedStoreMode())