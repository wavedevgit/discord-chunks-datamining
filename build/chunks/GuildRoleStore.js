/** Chunk was on web.js **/
/** chunk id: 317525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./65821.js"), require("./896048.js");
var Chunk136722 = require("./136722.js"),
  Chunk867051 = require("./867051.js"),
  Chunk548965 = require("./548965.js"),
  Chunk942269 = require("./942269.js"),
  Chunk260509 = require("./260509.js"),
  Chunk34457 = require("./34457.js"),
  Chunk9865 = require("./9865.js"),
  Chunk7864 = require("./7864.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let t = e;
  return (0, i.yE)(l.xh, _(f({}, t), {
    permissions: r.iu(t.permissions)
  }))
}
class m extends Chunk942269.yW {
  stateWrapper() {
    return this.database
  }
  serializeAllGuildRoles() {
    return this.database.mapPartitions(c.cH)
  }
  getUnsafeMutableRoles(e) {
    return this.database.getPartition(e)
  }
  getManyRoles(e, t) {
    return this.database.getManyRecords(e, t)
  }
  getRole(e, t) {
    return this.database.getRecord(e, t)
  }
  getNumRoles(e) {
    return this.database.partitionLength(e)
  }
  getEveryoneRole(e) {
    let t = (0, s.af)(e),
      n = this.database.getRecord(e.id, t);
    if (null == n) throw Error("Guild ".concat(e.id, " does not have an @everyone role"));
    return n
  }
  partitionVersion(e) {
    return this.database.partitionVersion(e)
  }
  constructor(...e) {
    super(...e), d(this, "database", this.addKKVDatabase("guild_roles", h)), d(this, "getSortedRoles", this.database.memoizedPartition((e, t) => u.gE(Object.values(t)))), d(this, "getRolesSnapshot", this.database.memoizedPartition((e, t) => f({}, t)))
  }
}
d(m, "displayName", "GuildRoleStore");
let g = new m({
  BACKGROUND_SYNC: (e, t) => {
    let {
      guilds: n
    } = e;
    for (let e of n) {
      let n = t.getNullablePartition(e.id);
      null != n && "unavailable" !== e.data_mode && t.setPartition(e.id, "partial" === e.data_mode ? u.ly(e.id, n, e.partial_updates.roles, e.partial_updates.deleted_role_ids) : c.hd(e.id, e.roles))
    }
  },
  OVERLAY_INITIALIZE: (e, t) => {
    for (let {
        partitionKey: n,
        values: r
      }
      of(t.clear(), e.serializedGuildRoles)) t.setPartition(n, c.lj(n, r))
  },
  CONNECTION_OPEN: (e, t) => {
    let {
      guilds: n
    } = e;
    for (let {
        id: e,
        roles: r
      }
      of(t.clear(), n)) t.setPartition(e, Array.isArray(r) ? c.hd(e, r) : r)
  },
  CACHE_LOADED: (e, t) => {
    let {
      guilds: n
    } = e;
    for (let {
        id: e,
        roles: r
      }
      of(t.clear(), n)) t.setPartition(e, c.lj(e, r))
  },
  CACHE_LOADED_LAZY: (e, t) => {
    if (0 !== e.guilds.length)
      for (let {
          id: n,
          roles: r
        }
        of(t.clear(), e.guilds)) t.setPartition(n, c.lj(n, r))
  },
  GUILD_CREATE: (e, t) => {
    let {
      guild: {
        id: n,
        roles: r
      }
    } = e;
    t.setPartition(n, Array.isArray(r) ? c.hd(n, r) : r)
  },
  GUILD_UPDATE: (e, t) => {
    let {
      guild: {
        id: n,
        roles: r
      }
    } = e;
    t.setPartition(n, c.hd(n, r))
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
    t.setRecord(e.guildId, e.role.id, c.Wj(e.guildId, e.role))
  },
  GUILD_ROLE_UPDATE: (e, t) => {
    t.setRecord(e.guildId, e.role.id, c.Wj(e.guildId, e.role))
  },
  GUILD_ROLE_DELETE: (e, t) => {
    let {
      guildId: n,
      roleId: r
    } = e;
    t.removeRecord(n, r)
  }
}, Chunk548965.P4.getCachedBridgedStoreMode())