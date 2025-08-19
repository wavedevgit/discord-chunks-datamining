/** Chunk was on 66181 **/
/** chunk id: 261375, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./539854.js");
var Chunk149765 = require("./149765.js"),
  Chunk768433 = require("./768433.js"),
  Chunk710845 = require("./710845.js"),
  Chunk38618 = require("./38618.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk386438 = require("./386438.js"),
  Chunk287328 = require("./287328.js"),
  Chunk458772 = require("./458772.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = new Chunk710845.Z("GuildBasicChannels");

function x(e, t) {
  return null == e || e.type !== t.type || e.parent_id !== t.parent_id || m.Z.computeBasicPermissions(e) !== m.Z.computeBasicPermissions(t)
}
let _ = new class {
  async getAsync(e) {
    let t = performance.now(),
      [n, i] = await Promise.all([g.Z.basicChannels(e).getKvEntries(), g.Z.syncedBasicChannels(e).getKvEntries()]),
      r = performance.now() - t,
      [s, a] = function(e) {
        let t = [],
          n = [];
        for (let [i, r] of e)(r ? t : n).push(i);
        return [t, n]
      }(i),
      l = new Set(s);
    return this.synced = l, b.verbose("loaded in ".concat(r, "ms (guilds: ").concat(n.length, ", synced: ").concat(l.size, " unsynced: ").concat(a.length, ")")), {
      all: n,
      stale: a,
      channels: n.filter(e => {
        let [t, n] = e;
        return l.has(t)
      })
    }
  }
  handleChannelCreate(e, t) {
    null != e.channel.guild_id && this.unsync(e.channel.guild_id, t)
  }
  handleChannelDelete(e, t) {
    null != e.channel.guild_id && this.unsync(e.channel.guild_id, t)
  }
  handleChannelUpdates(e, t) {
    for (let n of e.channels.filter(e => null != e.guild_id)) x(c.Z.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t)
  }
  handleBackgroundSync(e, t) {
    for (let s of e.guilds) switch (s.data_mode) {
      case "unavailable":
        break;
      case "partial":
        var n, i, r;
        let e = e => (0, l.q_)(e, s.id);
        this.onGuildUpdate(s.id, null != (i = null == (n = s.partial_updates.channels) ? true : n.map(e)) ? i : [], null != (r = s.partial_updates.deleted_channel_ids) ? r : [], t);
        break;
      default:
        this.onGuildSync(s.id, t)
    }
  }
  handleConnectionOpen(e, t) {
    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
  }
  async handlePostConnectionOpen() {
    let e = Chunk38618.Z.lastTimeConnectedChanged(),
      t = Chunk287328.Z.database();
    if (null == this.synced || null == exports || !(0, Chunk768433.O)()) return;
    let n = Chunk430824.Z.getGuildIds(),
      i = require.filter(e => !this.synced.has(e));
    for (let r of (b.verbose("scheduling basic_channel optimstic writes (guilds: ".concat(Chunk149765.length, ")")), require)) {
      if (null == this.synced || exports !== Chunk287328.Z.database() || module !== Chunk38618.Z.lastTimeConnectedChanged()) break;
      if (!this.synced.has(Chunk768433)) {
        b.verbose("optimstically writing basic_channels (guild: ".concat(Chunk768433, ")"));
        try {
          await Chunk592125.o.loadGuildIds([Chunk768433]), await exports.transaction(e => this.syncOne(r, e), "handlePostConnectionOpen")
        } catch (e) {
          b.warn("couldn't optimstically write basic_channel:", module);
          return
        }
        await new Promise(e => setTimeout(e, 1e3))
      }
    }
  }
  handleGuildCreate(e, t) {
    this.handleOneGuildCreate(e.guild, t)
  }
  handleOneGuildCreate(e, t) {
    let {
      id: n,
      channels: i
    } = e;
    switch (i.op) {
      case "full_sync":
        this.onGuildSync(n, t);
        break;
      case "update":
        this.onGuildUpdate(n, i.writes, i.deletes, t)
    }
  }
  handleGuildUpdate(e, t) {
    this.unsync(e.guild.id, t)
  }
  handleGuildDelete(e, t) {
    true !== e.guild.unavailable && this.delete(e.guild.id, t)
  }
  handleGuildRoleUpdate(e, t) {
    let n = e.role,
      r = d.Z.getRole(e.guildId, n.id);
    null != r && i.fS(i.vB(n.permissions), r.permissions) || this.unsync(e.guildId, t)
  }
  handleGuildMemberUpdate(e, t) {
    e.user.id === o.default.getId() && this.unsync(e.guildId, t)
  }
  handleWriteCaches(e, t) {
    this.sync(t)
  }
  resetInMemoryState() {
    this.synced = null
  }
  onGuildUpdate(e, t, n, i) {
    (n.length > 0 || t.some(e => x(c.Z.getBasicChannel(e.id), e))) && this.unsync(e, i)
  }
  onGuildSync(e, t) {
    this.unsync(e, t)
  }
  delete(e, t) {
    this.unsync(e, t), g.Z.basicChannelsTransaction(t).delete(e), g.Z.syncedBasicChannelsTransaction(t).delete(e)
  }
  unsync(e, t) {
    var n;
    null == (n = this.synced) || n.delete(e), g.Z.basicChannelsTransaction(t).delete(e), g.Z.syncedBasicChannelsTransaction(t).put(e, false), h.Z.invalidate(e)
  }
  sync(e) {
    b.verbose("Starting to write all basic channels");
    let t = performance.now(),
      n = {
        written: 0,
        skipped: 0
      };
    for (let t of u.Z.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
    let i = performance.now() - t;
    b.verbose("".concat(n.written, " basic_channel guilds submitted (took: ").concat(i, "ms, skipped: ").concat(n.skipped, " guilds)"))
  }
  syncOne(e, t) {
    var n, i, r;
    return !(null == u.Z.getGuild(e) || (null == (n = this.synced) ? true : n.has(e))) && (null == (i = this.synced) || i.add(e), g.Z.basicChannelsTransaction(t).put(e, (r = e, Object.values(c.Z.getMutableGuildChannelsForGuild(r)).map(e => ({
      id: e.id,
      type: e.type,
      guild_id: e.guild_id,
      parent_id: e.parent_id,
      basicPermissions: p.Z.asBasicFlag(m.Z.computePermissions(e))
    })))), g.Z.syncedBasicChannelsTransaction(t).put(e, true), true)
  }
  constructor() {
    f(this, "synced", null), f(this, "actions", {
      BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
      CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
      CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
      CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
      CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
      GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
      GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
      GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
      GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleUpdate(e, t),
      GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      WRITE_CACHES: (e, t) => this.handleWriteCaches(e, t)
    })
  }
}