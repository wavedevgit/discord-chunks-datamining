/** Chunk was on web.js **/
/** chunk id: 983543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk287328 = require("./287328.js"),
  Chunk710845 = require("./710845.js"),
  Chunk38618 = require("./38618.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk584731 = require("./584731.js"),
  Chunk620778 = require("./620778.js"),
  Chunk981631 = require("./981631.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = new Chunk710845.Z("MessagePreviewManager"),
  b = 30,
  y = 1e3,
  O = 5;
class v extends Chunk147913.Z {
  addWant(e) {
    var t;
    let n = p.Z.getBasicChannel(e);
    if (null == n) return;
    let r = null != (t = n.guild_id) ? t : null;
    (0, d.Q5)(n.type) || _.Z.isLatest(r, e) || (this.getOrCreate(r).addWant(e), this.fetchLocal(r), this.remoteTick())
  }
  async fetchLocal(e) {
    if (!(!_.Z.isLocalFetchNeeded(e) || this.localFetching.has(e))) try {
      var t;
      E.verbose("fetching local previews (via: database, guild_id: ".concat(e, ")")), this.localFetching.add(e);
      let n = f.default.getId(),
        r = await (null == (t = l.Z.messages()) ? true : t.getMostRecents(e));
      null != r && n === f.default.getId() && o.Z.dispatch({
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
    return 0 === n.length ? Promise.resolve() : t.try(n, () => (E.verbose("fetching guild previews (via: gateway, guild_id: ".concat(e, ", channel_ids: ").concat(n.join(", "), ")")), u.Z.getSocket().requestLastMessages(e, n), Promise.resolve()))
  }
  fetchDms(e) {
    let t = e.nextWants(b);
    return 0 === t.length ? Promise.resolve() : e.try(t, async () => {
      E.verbose("fetching dm previews (via: http, channel_ids: ".concat(t.join(", "), ")"));
      let e = (await a.tn.post({
        url: m.ANM.MESSAGE_PREVIEWS,
        body: {
          channel_ids: t
        },
        rejectWithError: false
      })).body;
      o.Z.dispatch({
        type: "MESSAGE_PREVIEWS_LOADED",
        guildId: null,
        messages: e
      })
    })
  }
  syncChannel(e, t) {
    let n = this.remote.get(e);
    null != n && _.Z.isLatest(e, t) && n.removeWant(t)
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
    let r = p.Z.getBasicChannel(e.channelId),
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
      if (!u.Z.isConnected()) {
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
let S = new v