/** Chunk was on web.js **/
/** chunk id: 138976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => o
});
var Chunk904245 = require("./904245.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js");
let o = {
  binds: ["shift+pageup"],
  comboKeysBindGlobal: true,
  action() {
    let e = a.Z.getChannelId();
    if (null != e) {
      let t = i.ZP.ackMessageId(e);
      null != t && i.ZP.getOldestUnreadTimestamp(e) > 0 && r.Z.jumpToMessage({
        channelId: e,
        messageId: t,
        offset: 1,
        context: "Keyboard Shortcut"
      })
    }
    returnfalse
  }
}