/** Chunk was on web.js **/
/** chunk id: 732071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  K: () => _
}), require("./65821.js"), require("./896048.js"), require("./747238.js"), require("./321073.js");
var Chunk635377 = require("./635377.js"),
  i = require.n(Chunk635377),
  Chunk439372 = require("./439372.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 6e4,
  u = 1e3,
  d = 10,
  f = 2e3,
  p = 500;
var _ = function(e) {
  return e.ANNOUNCEMENT = "announcement", e.APP_EMBED = "app_embed", e
}({});

function h(e) {
  if ("announcement" === e.type) return {
    event: s.HAw.ANNOUNCEMENT_MESSAGE_VIEWED,
    properties: {
      message_id: e.messageId,
      channel_id: e.channelId,
      guild_id: e.guildId,
      source_channel_id: e.sourceChannelId,
      source_guild_id: e.sourceGuildId
    }
  };
  if ("app_embed" === e.type) return {
    event: s.HAw.APP_EMBED_VIEWED,
    properties: {
      application_id: e.applicationId,
      link_type: e.linkType,
      message_id: e.messageId,
      channel_id: e.channelId,
      guild_id: e.guildId
    }
  };
  throw Error("Invalid message type for message view tracking")
}
class m extends Chunk439372.A {
  handleMessageBecameVisible(e) {
    let {
      type: t,
      messageId: n
    } = e, r = "".concat(n, "-").concat(t);
    if (null != this.currentlyVisibleMessageTimers[r] || this.viewsInCurrentChannel.has(r)) return;
    let i = this.recentViewTimes.get(r);
    if (null != i && Date.now() - i < c) return;
    let a = setTimeout(() => {
      delete this.currentlyVisibleMessageTimers[r], this.viewsInCurrentChannel.add(r), this.recentViewTimes.set(r, Date.now()), this.bufferViewTrack(e)
    }, u);
    this.currentlyVisibleMessageTimers[r] = a
  }
  handleMessageLostVisibility(e, t) {
    let n = "".concat(e, "-").concat(t),
      r = this.currentlyVisibleMessageTimers[n];
    null != r && (clearTimeout(r), delete this.currentlyVisibleMessageTimers[n])
  }
  handleMessageListVisibilityChange(e) {
    for (let t of e) this.handleMessageBecameVisible(t);
    let t = new Set(e.map(e => "".concat(e.messageId, "-").concat(e.type)));
    for (let e of Object.keys(this.currentlyVisibleMessageTimers))
      if (!t.has(e)) {
        let [t, n] = e.split("-");
        this.handleMessageLostVisibility(t, n)
      }
  }
  handleChannelSelect() {
    for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
    this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
  }
  drainBuffer() {
    for (let e of this.batchBuffer) {
      let t = h(e);
      o.default.track(t.event, t.properties)
    }
    this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
  }
  bufferViewTrack(e) {
    this.batchBuffer.length >= d && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), f))
  }
  constructor(...e) {
    super(...e), l(this, "currentlyVisibleMessageTimers", {}), l(this, "viewsInCurrentChannel", new Set), l(this, "recentViewTimes", new(i())({
      max: p,
      maxAge: c
    })), l(this, "batchBuffer", []), l(this, "batchTimerId", null), l(this, "actions", {
      CHANNEL_SELECT: () => this.handleChannelSelect()
    })
  }
}
let g = new m