/** Chunk was on web.js **/
/** chunk id: 474387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk344185 = require("./344185.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js"),
  Chunk882252 = require("./882252.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk147913.Z {
  handleThreadCreate(e) {
    let {
      channel: t
    } = e;
    if (t.isForumPost()) {
      let e = t.ownerId === o.default.getId();
      this.readStateSnapshots[t.id] = {
        isNew: !e,
        hasUnreads: !e
      }
    }
  }
  constructor(...e) {
    super(...e), c(this, "readStateSnapshots", {}), c(this, "actions", {
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      THREAD_CREATE: e => this.handleThreadCreate(e)
    }), c(this, "handleChannelSelect", e => {
      let {
        channelId: t
      } = e;
      if (null == t) return;
      let n = a.Z.getChannel(t);
      null != n && n.isForumLikeChannel() && (this.readStateSnapshots = {}, this.processForumChannel(n.guild_id, t))
    }), c(this, "processForumChannel", (e, t) => {
      let n = i.Z.getThreadsForParent(e, t);
      s.default.keys(n).forEach(e => {
        let t = (0, l.nC)(e);
        null != t && (this.readStateSnapshots[e] = t)
      })
    }), c(this, "getReadStateSnapshotAnalytics", e => this.readStateSnapshots[e])
  }
}
let d = new u