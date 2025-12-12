/** Chunk was on web.js **/
/** chunk id: 897285, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk914010 = require("./914010.js"),
  Chunk924301 = require("./924301.js"),
  Chunk482241 = require("./482241.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {},
  c = new Set,
  u = new Set,
  d = 18e5,
  f = async e => {
    if (!(0 === a.ZP.getGuildScheduledEventsForGuild(e).length || c.has(e)) && !u.has(e)) try {
      c.add(e), await o.Z.getGuildEventsForCurrentUser(e), u.add(e)
    } catch (t) {
      c.delete(e)
    }
  };
class p extends Chunk147913.Z {
  async getGuildEventUserCounts(e, t, n) {
    let r = n.filter(n => null == l["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - l["".concat(e, "-").concat(t, "-").concat(n)] > d);
    if (!(Date.now() - l["".concat(e, "-").concat(t)] < d) || 0 !== r.length) {
      l["".concat(e, "-").concat(t)] = Date.now(), r.forEach(n => l["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
      try {
        await o.Z.fetchGuildEventUserCounts(e, t, r)
      } catch (e) {}
    }
  }
  getGuildEventUsers(e, t, n) {
    return o.Z.fetchUsersForGuildEvent(e, t, n)
  }
  getGuildEventsForCurrentUser(e) {
    return f(e)
  }
  async handleConnectionOpen() {
    c.clear(), u.clear(), l = {}, Chunk914010.Z.getLastSelectedGuildId()
  }
  handleGuildUnavailable(e) {
    let {
      guildId: t
    } = e;
    c.delete(t), u.delete(t), delete l[t]
  }
  handleGuildDelete(e) {
    let {
      guild: t
    } = e, n = t.id;
    c.delete(n), u.delete(n), delete l[n]
  }
  handleInviteResolveSuccess(e) {
    var t;
    let {
      invite: n
    } = e, r = n.guild_scheduled_event, i = null == (t = n.guild) ? true : t.id;
    null != r && null != i && f(i)
  }
  async handleChannelSelect(e) {
    let {
      guildId: t
    } = e;
    if (null != t)
      for (let e of a.ZP.getGuildScheduledEventsForGuild(t)) try {
        await this.getGuildEventUserCounts(t, e.id, [])
      } finally {
        await new Promise(e => setTimeout(e, 200 * Math.random() + 50))
      }
  }
  constructor(...e) {
    super(...e), s(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
      INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e)
    })
  }
}
let _ = new p