/** Chunk was on 7685 **/
/** chunk id: 946132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk640631 = require("./640631.js"),
  Chunk626584 = require("./626584.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk595766 = require("./595766.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = false / 0,
  h = new Chunk626584.A("MessagePreviewStore");
class g extends Chunk311907.Ay.Store {
  initialize() {
    this.waitFor(a.A, o.A)
  }
  isLatest(e, t) {
    var n;
    let l = this.guilds.get(null != e ? e : null);
    return null != (n = null == l ? true : l.isLatest(t, this.generation)) && n
  }
  isLocalFetchNeeded(e) {
    var t, n;
    return null == (t = null == (n = this.guilds.get(e)) ? true : n.localNeeded) || t
  }
  message(e, t) {
    var n, l;
    return null != (n = null == (l = this.guilds.get(e)) ? true : l.messageRecord(t)) ? n : null
  }
  data(e) {
    return this.guilds.has(e) || this.guilds.set(e, new u.x), this.guilds.get(e)
  }
  handleOneGuildCreate(e) {
    var t, n;
    let l = this.data(e.id);
    l.putMany(null != (t = e.lastMessages) ? t : [], this.generation), l.putMany(null != (n = e.threadMessages) ? n : [], this.generation), null != e.lastMessages && (l.localNeeded = false)
  }
  handleConnectionOpen(e) {
    for (let t of (this.generation += 1, e.guilds)) this.handleOneGuildCreate(t)
  }
  handleGuildCreate(e) {
    this.handleOneGuildCreate(e.guild)
  }
  handleGuildDelete(e) {
    this.guilds.delete(e.guild.id)
  }
  handleMessageCreate(e) {
    var t;
    if (e.optimistic || e.isPushNotification) returnfalse;
    this.data(null != (t = e.guildId) ? t : null).put(e.message.channel_id, e.message, this.generation)
  }
  handleMessageDelete(e) {
    var t, n;
    let l = null != (t = e.guildId) ? t : null;
    if ((null == (n = this.data(l)) ? true : n.messageId(e.channelId)) === e.id) {
      let t = o.A.getMessages(e.channelId),
        n = t.hasMoreAfter ? null : t.last();
      null != n ? this.data(l).put(e.channelId, n, this.generation) : this.data(l).delete(e.channelId)
    }
  }
  handleMessageUpdate(e) {
    var t;
    let n = null != (t = e.guildId) ? t : null,
      l = e.message.channel_id,
      r = e.message.id;
    if (null == l || null == r) returnfalse;
    let i = this.data(n);
    if ((null == i ? true : i.messageId(l)) !== r) returnfalse;
    null == i || i.update(e.message)
  }
  handleThreadListSync(e) {
    var t;
    this.data(e.guildId).putMany(null != (t = e.mostRecentMessages) ? t : [], this.generation)
  }
  handleLoadMessagesSuccess(e) {
    var t, n;
    let l = a.A.getBasicChannel(e.channelId);
    if (null == l) returnfalse;
    (0, i.D)(e.messages), e.isAfter || e.isBefore || e.hasMoreAfter ? this.data(l.guild_id).putNew(e.channelId, null != (n = e.messages[0]) ? n : null, this.generation) : this.data(l.guild_id).put(e.channelId, null != (t = e.messages[0]) ? t : null, this.generation)
  }
  handleLocalMessagesLoaded(e) {
    let t = a.A.getBasicChannel(e.channelId);
    if (null != t) {
      var n;
      (0, i.D)(e.messages), this.data(t.guild_id).putNew(e.channelId, null != (n = e.messages[0]) ? n : null, d)
    }
  }
  handleMessagePreviewsLoaded(e) {
    h.verbose("adding remote previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
    let t = this.data(e.guildId);
    for (let n of e.messages) t.isLatest(n.channel_id, this.generation) || t.put(n.channel_id, n, this.generation)
  }
  handleMessagePreviewsLocallyLoaded(e) {
    h.verbose("adding local previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
    let t = this.data(e.guildId);
    for (let [n, l] of e.messages) t.has(n) || t.put(n, l, d);
    t.localNeeded = false
  }
  handleLogout(e) {
    this.guilds.clear()
  }
  constructor() {
    super(r.h, {
      CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      GUILD_CREATE: e => this.handleGuildCreate(e),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      LOAD_MESSAGES_SUCCESS: e => this.handleLoadMessagesSuccess(e),
      LOCAL_MESSAGES_LOADED: e => this.handleLocalMessagesLoaded(e),
      LOGOUT: e => this.handleLogout(e),
      MESSAGE_CREATE: e => this.handleMessageCreate(e),
      MESSAGE_DELETE: e => this.handleMessageDelete(e),
      MESSAGE_PREVIEWS_LOADED: e => this.handleMessagePreviewsLoaded(e),
      MESSAGE_PREVIEWS_LOCALLY_LOADED: e => this.handleMessagePreviewsLocallyLoaded(e),
      MESSAGE_UPDATE: e => this.handleMessageUpdate(e),
      THREAD_LIST_SYNC: e => this.handleThreadListSync(e)
    }), c(this, "guilds", new Map), c(this, "generation", 0)
  }
}
let f = new g