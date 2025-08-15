/** Chunk was on 30202 **/
/** chunk id: 17567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk710845 = require("./710845.js"),
  Chunk601964 = require("./601964.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk411198 = require("./411198.js"),
  Chunk539600 = require("./539600.js"),
  Chunk625137 = require("./625137.js"),
  Chunk287328 = require("./287328.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = new Chunk710845.Z("Guilds"),
  b = new class {
    async getAsync(e) {
      let t = performance.now(),
        n = await m.Z.guilds(e).getMany(),
        i = performance.now();
      return f.verbose("loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
    }
    async getOneAsync(e, t) {
      return await m.Z.guilds(e).get(t)
    }
    handleBackgroundSync(e, t) {
      for (let n of e.guilds) {
        if ("unavailable" === n.data_mode) return;
        let e = o.Z.getGuild(n.id);
        if (null != e) {
          let i = l.Z.getUnsafeMutableRoles(n.id),
            r = "partial" === n.data_mode ? u.EO(n.id, i, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : d.qt(n.id, n.roles);
          this.put(c.rk(c.sp(n, e), d.an(r), a.ZP.getSelfMember(n.id)), t)
        }
      }
    }
    handleConnectionOpen(e, t) {
      for (let n of (this.clear(t), e.guilds)) this.putOne(n, t)
    }
    handleGuildCreate(e, t) {
      this.putOne(e.guild, t)
    }
    handleGuildUpdate(e, t) {
      let n = o.Z.getGuild(e.guild.id),
        i = c.R(e.guild, n);
      this.put(c.rk(i, d.an(d.qt(e.guild.id, e.guild.roles)), a.ZP.getSelfMember(e.guild.id)), t)
    }
    handleGuildDelete(e, t) {
      this.delete(e.guild.id, t)
    }
    handleGuildRoleChange(e, t) {
      let n = o.Z.getGuild(e.guildId),
        i = l.Z.getUnsafeMutableRoles(e.guildId);
      null != n && this.put(c.rk(n, h(g({}, i), {
        [e.role.id]: e.role
      }), a.ZP.getSelfMember(e.guildId)), t)
    }
    handleGuildRoleDelete(e, t) {
      let n = o.Z.getGuild(e.guildId);
      if (null != n) {
        let i = g({}, l.Z.getUnsafeMutableRoles(e.guildId));
        delete i[e.roleId];
        let r = a.ZP.getSelfMember(e.guildId);
        null != r && (r = h(g({}, r), {
          roles: r.roles.filter(t => t !== e.roleId)
        })), this.put(c.rk(n, d.an(i), r), t)
      }
    }
    handleGuildMemberAdd(e, t) {
      if (null != e.joinedAt && e.user.id === s.default.getId()) {
        let n = o.Z.getGuild(e.guildId);
        null != n && this.put(c.rk((0, r.kH)(n, e.joinedAt), d.an(l.Z.getUnsafeMutableRoles(n.id)), a.ZP.getSelfMember(n.id)), t)
      }
    }
    handleGuildMemberUpdate(e, t) {
      if (e.user.id !== s.default.getId()) return;
      let n = o.Z.getGuild(e.guildId);
      null != n && this.put(c.rk(n, d.an(l.Z.getUnsafeMutableRoles(n.id)), {
        roles: e.roles,
        userId: e.user.id
      }), t)
    }
    resetInMemoryState() {}
    putOne(e, t) {
      let n = e.members.find(e => e.user.id === s.default.getId()),
        i = o.Z.getGuild(e.id),
        r = c.rk(c.wD(e, i), d.an(e.roles instanceof Array ? d.qt(e.id, e.roles) : e.roles), null != n ? {
          userId: n.user.id,
          roles: n.roles
        } : null);
      this.put(r, t)
    }
    put(e, t) {
      m.Z.guildsTransaction(t).put(e)
    }
    delete(e, t) {
      m.Z.guildsTransaction(t).delete(e)
    }
    clear(e) {
      m.Z.guildsTransaction(e).delete()
    }
    constructor() {
      p(this, "actions", {
        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
        GUILD_MEMBER_ADD: (e, t) => this.handleGuildMemberAdd(e, t),
        GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
        GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
        GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
        GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
      })
    }
  }