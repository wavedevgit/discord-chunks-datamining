/** Chunk was on web.js **/
/** chunk id: 765383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  k: () => _
}), require("./415506.js"), require("./388685.js"), require("./35282.js"), require("./539854.js");
var Chunk31775 = require("./31775.js"),
  i = require.n(Chunk31775),
  Chunk147913 = require("./147913.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

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

function m(e) {
  if ("announcement" === e.type) return {
    event: s.rMx.ANNOUNCEMENT_MESSAGE_VIEWED,
    properties: {
      message_id: e.messageId,
      channel_id: e.channelId,
      guild_id: e.guildId,
      source_channel_id: e.sourceChannelId,
      source_guild_id: e.sourceGuildId
    }
  };
  if ("app_embed" === e.type) return {
    event: s.rMx.APP_EMBED_VIEWED,
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
class h extends Chunk147913.Z {
  handleMessageBecameVisible(e) {
    let {
      type: t,
      messageId: n
    } = e, r = "".concat(n, "-").concat(t);
    if (null != this.currentlyVisibleMessageTimers[r] || this.viewsInCurrentChannel.has(r)) return;
    let i = this.recentViewTimes.get(r);
    if (null != i && Date.now() - i < c) return;
    let o = setTimeout(() => {
      delete this.currentlyVisibleMessageTimers[r], this.viewsInCurrentChannel.add(r), this.recentViewTimes.set(r, Date.now()), this.bufferViewTrack(e)
    }, u);
    this.currentlyVisibleMessageTimers[r] = o
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
    for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(module);
    this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
  }
  drainBuffer() {
    for (let e of this.batchBuffer) {
      let t = m(module);
      Chunk626135.default.track(exports.event, exports.properties)
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
let g = new h