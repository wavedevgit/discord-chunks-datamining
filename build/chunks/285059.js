/** Chunk was on web.js **/
/** chunk id: 285059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk967198 = require("./967198.js"),
  Chunk698441 = require("./698441.js"),
  Chunk496092 = require("./496092.js");

function o(e, t, n) {
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
    if (!(0 === a.Ay.getGuildScheduledEventsForGuild(e).length || c.has(e)) && !u.has(e)) try {
      c.add(e), await s.A.getGuildEventsForCurrentUser(e), u.add(e)
    } catch (t) {
      c.delete(e)
    }
  };
class p extends Chunk439372.A {
  async getGuildEventUserCounts(e, t, n) {
    let r = n.filter(n => null == l["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - l["".concat(e, "-").concat(t, "-").concat(n)] > d);
    if (!(Date.now() - l["".concat(e, "-").concat(t)] < d) || 0 !== r.length) {
      l["".concat(e, "-").concat(t)] = Date.now(), r.forEach(n => l["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
      try {
        await s.A.fetchGuildEventUserCounts(e, t, r)
      } catch (e) {}
    }
  }
  getGuildEventUsers(e, t, n) {
    return s.A.fetchUsersForGuildEvent(e, t, n)
  }
  getGuildEventsForCurrentUser(e) {
    return f(e)
  }
  async handleConnectionOpen() {
    c.clear(), u.clear(), l = {}, i.A.getLastSelectedGuildId()
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
      for (let e of a.Ay.getGuildScheduledEventsForGuild(t)) try {
        await this.getGuildEventUserCounts(t, e.id, [])
      } finally {
        await new Promise(e => setTimeout(e, 200 * Math.random() + 50))
      }
  }
  constructor(...e) {
    super(...e), o(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
      INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e)
    })
  }
}
let _ = new p