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
    let e = Chunk944486.Z.getChannelId();
    if (null != module) {
      let t = Chunk306680.ZP.ackMessageId(module);
      null != exports && Chunk306680.ZP.getOldestUnreadTimestamp(module) > 0 && Chunk904245.Z.jumpToMessage({
        channelId: module,
        messageId: exports,
        offset: 1,
        context: "Keyboard Shortcut"
      })
    }
    returnfalse
  }
}