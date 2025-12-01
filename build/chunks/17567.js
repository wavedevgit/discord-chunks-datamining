/** Chunk was on web.js **/
/** chunk id: 17567, original params: e,t,n (module,exports,re quire) **/
"use strict";
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

function m(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = new Chunk710845.Z("Guilds");
class E {
  async getAsync(e) {
    let t = performance.now(),
      n = await f.Z.guilds(e).getMany(),
      r = performance.now();
    return g.verbose("loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
  }
  async getOneAsync(e, t) {
    return await f.Z.guilds(e).get(t)
  }
  handleBackgroundSync(e, t) {
    for (let n of e.guilds) {
      if ("unavailable" === n.data_mode) return;
      let e = l.Z.getGuild(n.id);
      if (null != e) {
        let r = s.Z.getUnsafeMutableRoles(n.id),
          i = "partial" === n.data_mode ? d.EO(n.id, r, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : u.qt(n.id, n.roles);
        this.put(c.rk(c.sp(n, e), u.an(i), o.ZP.getSelfMember(n.id)), t)
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
    let n = l.Z.getGuild(e.guild.id),
      r = c.R(e.guild, n);
    this.put(c.rk(r, u.an(u.qt(e.guild.id, e.guild.roles)), o.ZP.getSelfMember(e.guild.id)), t)
  }
  handleGuildDelete(e, t) {
    this.delete(e.guild.id, t)
  }
  handleGuildRoleChange(e, t) {
    let n = l.Z.getGuild(e.guildId),
      r = s.Z.getUnsafeMutableRoles(e.guildId);
    null != n && this.put(c.rk(n, u.an(h(_({}, r), {
      [e.role.id]: u.wD(e.guildId, e.role)
    })), o.ZP.getSelfMember(e.guildId)), t)
  }
  handleGuildRoleDelete(e, t) {
    let n = l.Z.getGuild(e.guildId);
    if (null != n) {
      let r = _({}, s.Z.getUnsafeMutableRoles(e.guildId));
      delete r[e.roleId];
      let i = o.ZP.getSelfMember(e.guildId);
      null != i && (i = h(_({}, i), {
        roles: i.roles.filter(t => t !== e.roleId)
      })), this.put(c.rk(n, u.an(r), i), t)
    }
  }
  handleGuildMemberAdd(e, t) {
    if (null != e.joinedAt && e.user.id === a.default.getId()) {
      let n = l.Z.getGuild(e.guildId);
      null != n && this.put(c.rk((0, i.kH)(n, e.joinedAt), u.an(s.Z.getUnsafeMutableRoles(n.id)), o.ZP.getSelfMember(n.id)), t)
    }
  }
  handleGuildMemberUpdate(e, t) {
    if (e.user.id !== a.default.getId()) return;
    let n = l.Z.getGuild(e.guildId);
    null != n && this.put(c.rk(n, u.an(s.Z.getUnsafeMutableRoles(n.id)), {
      roles: e.roles,
      userId: e.user.id
    }), t)
  }
  resetInMemoryState() {}
  putOne(e, t) {
    let n = e.members.find(e => e.user.id === a.default.getId()),
      r = l.Z.getGuild(e.id),
      i = c.rk(c.wD(e, r), u.an(e.roles instanceof Array ? u.qt(e.id, e.roles) : e.roles), null != n ? {
        userId: n.user.id,
        roles: n.roles
      } : null);
    this.put(i, t)
  }
  put(e, t) {
    f.Z.guildsTransaction(t).put(e)
  }
  delete(e, t) {
    f.Z.guildsTransaction(t).delete(e)
  }
  clear(e) {
    f.Z.guildsTransaction(e).delete()
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
let b = new E