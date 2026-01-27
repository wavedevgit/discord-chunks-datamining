/** Chunk was on web.js **/
/** chunk id: 444261, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk919577 = require("./919577.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk439372.A {
  handleChannelDelete(e) {
    let {
      channel: t
    } = e;
    if (null != t.guild_id) {
      let e = l.A.getAllThreadsForParent(t.id);
      e.length > 0 && r.Ay.Emitter.batched(() => {
        for (let t of e) i.h.dispatch({
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
      message: a
    } = e, c = l.A.getChannel(i);
    if ((null == (n = a.author) ? true : n.id) !== s.default.getId() || !(null == c ? true : c.isActiveThread())) return;
    let u = new Date(null != (t = null == (r = c.threadMetadata) ? true : r.archiveTimestamp) ? t : 0).getTime();
    Date.now() - u < 5e3 && o.A.resort(c.parent_id)
  }
  handleGuildDelete(e) {
    let {
      guild: t
    } = e;
    if (t.unavailable) return;
    let n = l.A.getAllThreadsForGuild(t.id);
    0 !== n.length && r.Ay.Emitter.batched(() => {
      for (let e of n) i.h.dispatch({
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