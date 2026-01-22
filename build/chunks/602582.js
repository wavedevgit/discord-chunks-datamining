/** Chunk was on web.js **/
/** chunk id: 602582, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk723176 = require("./723176.js"),
  Chunk626584 = require("./626584.js"),
  Chunk142120 = require("./142120.js"),
  Chunk95701 = require("./95701.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk946132 = require("./946132.js"),
  Chunk937136 = require("./937136.js"),
  Chunk652215 = require("./652215.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = new Chunk626584.A("MessagePreviewManager"),
  b = 30,
  y = 1e3,
  O = 5;
class A extends Chunk439372.A {
  addWant(e) {
    var t;
    let n = p.A.getBasicChannel(e);
    if (null == n) return;
    let r = null != (t = n.guild_id) ? t : null;
    (0, d.fT)(n.type) || _.A.isLatest(r, e) || (this.getOrCreate(r).addWant(e), this.fetchLocal(r), this.remoteTick())
  }
  async fetchLocal(e) {
    if (!(!_.A.isLocalFetchNeeded(e) || this.localFetching.has(e))) try {
      var t;
      E.verbose("fetching local previews (via: database, guild_id: ".concat(e, ")")), this.localFetching.add(e);
      let n = f.default.getId(),
        r = await (null == (t = l.A.messages()) ? true : t.getMostRecents(e));
      null != r && n === f.default.getId() && s.h.dispatch({
        type: "MESSAGE_PREVIEWS_LOCALLY_LOADED",
        guildId: e,
        messages: r.map(e => {
          let [t, n] = e;
          return [t, n.message]
        })
      })
    } catch (e) {
      E.log("couldn't fetch local previews (error: ".concat(e, ")"))
    } finally {
      this.localFetching.delete(e)
    }
  }
  fetchGuilds(e, t) {
    let n = t.nextWants(y);
    return 0 === n.length ? Promise.resolve() : t.try(n, () => (E.verbose("fetching guild previews (via: gateway, guild_id: ".concat(e, ", channel_ids: ").concat(n.join(", "), ")")), u.A.getSocket().requestLastMessages(e, n), Promise.resolve()))
  }
  fetchDms(e) {
    let t = e.nextWants(b);
    return 0 === t.length ? Promise.resolve() : e.try(t, async () => {
      E.verbose("fetching dm previews (via: http, channel_ids: ".concat(t.join(", "), ")"));
      let e = (await a.Bo.post({
        url: m.Rsh.MESSAGE_PREVIEWS,
        body: {
          channel_ids: t
        },
        rejectWithError: false
      })).body;
      s.h.dispatch({
        type: "MESSAGE_PREVIEWS_LOADED",
        guildId: null,
        messages: e
      })
    })
  }
  syncChannel(e, t) {
    let n = this.remote.get(e);
    null != n && _.A.isLatest(e, t) && n.removeWant(t)
  }
  getOrCreate(e) {
    return this.remote.has(e) || this.remote.set(e, new h.p), this.remote.get(e)
  }
  cleanup() {
    for (let [e, t] of this.remote) t.empty() && this.remote.delete(e)
  }
  handleConnectionOpenSupplemental() {
    this.handleConnectionResumed(false)
  }
  handleConnectionResumed() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    this.tickQueued && !this.remoteTicking ? (this.remoteTick(), this.remoteTick.flush()) : e && (this.localFetching.clear(), this.remote.clear(), this.remoteTicking = false)
  }
  handleGuildCreate(e) {
    this.remote.delete(e.guild.id)
  }
  handleGuildDelete(e) {
    this.remote.delete(e.guild.id)
  }
  handleLogout() {
    this.localFetching.clear(), this.remote.clear(), this.remoteTicking = false
  }
  handleMessageCreate(e) {
    var t;
    this.syncChannel(null != (t = e.guildId) ? t : null, e.channelId)
  }
  handleMessageDelete(e) {
    var t;
    this.syncChannel(null != (t = e.guildId) ? t : null, e.channelId)
  }
  handleMessageUpdate(e) {
    if (null != e.message.channel_id) {
      var t;
      this.syncChannel(null != (t = e.guildId) ? t : null, e.message.channel_id)
    }
  }
  handleMessagesLoaded(e) {
    var t, n;
    let r = p.A.getBasicChannel(e.channelId),
      i = null != (t = null == r ? true : r.guild_id) ? t : null;
    if (null != r)
      for (let t of null != (n = e.messages) ? n : []) this.syncChannel(i, t.channel_id)
  }
  handleThreadListSync(e) {
    let t = this.remote.get(e.guildId);
    if (null != t) {
      var n;
      for (let r of null != (n = e.mostRecentMessages) ? n : []) t.removeWant(r.channel_id)
    }
  }
  constructor(...e) {
    var t;
    super(...e), t = this, g(this, "remote", new Map), g(this, "remoteTicking", false), g(this, "tickQueued", false), g(this, "localFetching", new Set), g(this, "actions", {
      CONNECTION_OPEN_SUPPLEMENTAL: () => this.handleConnectionOpenSupplemental(),
      CONNECTION_RESUMED: () => this.handleConnectionResumed(),
      GUILD_CREATE: e => this.handleGuildCreate(e),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      LOAD_MESSAGES_SUCCESS: e => this.handleMessagesLoaded(e),
      LOCAL_MESSAGES_LOADED: e => this.handleMessagesLoaded(e),
      LOGOUT: () => this.handleLogout(),
      MESSAGE_CREATE: e => this.handleMessageCreate(e),
      MESSAGE_DELETE: e => this.handleMessageDelete(e),
      MESSAGE_UPDATE: e => this.handleMessageUpdate(e),
      THREAD_LIST_SYNC: e => this.handleThreadListSync(e)
    }), g(this, "remoteTick", i().debounce(async function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0;
      if (!u.A.isConnected()) {
        t.tickQueued = true;
        return
      }
      if (!t.remoteTicking && !(e > O)) {
        t.tickQueued = false;
        try {
          for (let [e, n] of(t.remoteTicking = true, t.remote)) await (null == e ? t.fetchDms(n) : t.fetchGuilds(e, n));
          t.cleanup(), t.remoteTicking = false
        } catch (n) {
          E.log("couldn't fetch message previews (attempt: ".concat(e, ", error: ").concat(n, ")")), t.remoteTicking = false, t.remoteTick(e + 1)
        }
      }
    }, 100))
  }
}
let v = new A