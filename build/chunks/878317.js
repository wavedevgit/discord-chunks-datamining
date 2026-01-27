/** Chunk was on web.js **/
/** chunk id: 878317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk970278 = require("./970278.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk661191 = require("./661191.js"),
  Chunk767581 = require("./767581.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk439372.A {
  handleThreadCreate(e) {
    let {
      channel: t
    } = e;
    if (t.isForumPost()) {
      let e = t.ownerId === a.default.getId();
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
      let n = o.A.getChannel(t);
      null != n && n.isForumLikeChannel() && (this.readStateSnapshots = {}, this.processForumChannel(n.guild_id, t))
    }), c(this, "processForumChannel", (e, t) => {
      let n = i.A.getThreadsForParent(e, t);
      s.default.keys(n).forEach(e => {
        let t = (0, l.yg)(e);
        null != t && (this.readStateSnapshots[e] = t)
      })
    }), c(this, "getReadStateSnapshotAnalytics", e => this.readStateSnapshots[e])
  }
}
let d = new u