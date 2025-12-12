/** Chunk was on web.js **/
/** chunk id: 359915, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk883429 = require("./883429.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk147913.Z {
  handleChannelDelete(e) {
    let {
      channel: t
    } = e;
    if (null != t.guild_id) {
      let e = l.Z.getAllThreadsForParent(t.id);
      e.length > 0 && r.ZP.Emitter.batched(() => {
        for (let t of e) i.Z.dispatch({
          type: "THREAD_DELETE",
          channel: t
        })
      })
    }
  }
  handleMessageCreate(e) {
    var t, n, r;
    let {
      channelId: i,
      message: o
    } = e, c = l.Z.getChannel(i);
    if ((null == (t = o.author) ? true : t.id) !== s.default.getId() || !(null == c ? true : c.isActiveThread())) return;
    let u = new Date(null != (r = null == (n = c.threadMetadata) ? true : n.archiveTimestamp) ? r : 0).getTime();
    Date.now() - u < 5e3 && a.Z.resort(c.parent_id)
  }
  handleGuildDelete(e) {
    let {
      guild: t
    } = e;
    if (t.unavailable) return;
    let n = l.Z.getAllThreadsForGuild(t.id);
    0 !== n.length && r.ZP.Emitter.batched(() => {
      for (let e of n) i.Z.dispatch({
        type: "THREAD_DELETE",
        channel: e
      })
    })
  }
  constructor(...e) {
    super(...e), c(this, "actions", {
      CHANNEL_DELETE: this.handleChannelDelete,
      MESSAGE_CREATE: this.handleMessageCreate,
      GUILD_DELETE: this.handleGuildDelete
    })
  }
}
let d = new u