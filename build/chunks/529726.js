/** Chunk was on web.js **/
/** chunk id: 529726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk31775 = require("./31775.js"),
  i = require.n(Chunk31775),
  Chunk147913 = require("./147913.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 6e4,
  d = 1e3,
  f = 10,
  _ = 2e3,
  p = 500;
class h extends Chunk147913.Z {
  handleMessageBecameVisible(e) {
    let {
      messageId: t
    } = e;
    if (null != this.currentlyVisibleMessageTimers[t] || this.viewsInCurrentChannel.has(t)) return;
    let n = this.recentViewTimes.get(t);
    if (null != n && Date.now() - n < u) return;
    let r = setTimeout(() => {
      delete this.currentlyVisibleMessageTimers[t], this.viewsInCurrentChannel.add(t), this.recentViewTimes.set(t, Date.now()), this.bufferViewTrack(e)
    }, d);
    this.currentlyVisibleMessageTimers[t] = r
  }
  handleMessageLostVisibility(e) {
    let t = this.currentlyVisibleMessageTimers[e];
    null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e])
  }
  handleMessageListVisibilityChange(e) {
    for (let t of e) this.handleMessageBecameVisible(t);
    let t = new Set(e.map(e => e.messageId));
    for (let e of s.default.keys(this.currentlyVisibleMessageTimers)) t.has(e) || this.handleMessageLostVisibility(e)
  }
  handleChannelSelect() {
    for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(module);
    this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
  }
  drainBuffer() {
    for (let e of this.batchBuffer) Chunk626135.default.track(Chunk981631.rMx.ANNOUNCEMENT_MESSAGE_VIEWED, {
      message_id: module.messageId,
      channel_id: module.channelId,
      guild_id: module.guildId,
      source_channel_id: module.sourceChannelId,
      source_guild_id: module.sourceGuildId
    });
    this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
  }
  bufferViewTrack(e) {
    this.batchBuffer.length >= f && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), _))
  }
  constructor(...e) {
    super(...e), c(this, "currentlyVisibleMessageTimers", {}), c(this, "viewsInCurrentChannel", new Set), c(this, "recentViewTimes", new(i())({
      max: p,
      maxAge: u
    })), c(this, "batchBuffer", []), c(this, "batchTimerId", null), c(this, "actions", {
      CHANNEL_SELECT: () => this.handleChannelSelect()
    })
  }
}
let m = new h