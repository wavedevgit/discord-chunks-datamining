/** Chunk was on 78376 **/
/** chunk id: 314519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => s
});
var Chunk843472 = require("./843472.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js");
let s = {
  binds: ["shift+pageup"],
  comboKeysBindGlobal: true,
  action() {
    let e = l.A.getChannelId();
    if (null != e) {
      let t = i.Ay.ackMessageId(e);
      null != t && i.Ay.getOldestUnreadTimestamp(e) > 0 && r.A.jumpToMessage({
        channelId: e,
        messageId: t,
        offset: 1,
        context: "Keyboard Shortcut"
      })
    }
    returnfalse
  }
}