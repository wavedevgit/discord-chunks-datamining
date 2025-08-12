/** Chunk was on 20501 **/
/** chunk id: 239748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => o
});
var Chunk925549 = require("./925549.js"),
  Chunk475468 = require("./475468.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");
let o = {
  binds: ["mod+alt+left"],
  comboKeysBindGlobal: true,
  action() {
    var e;
    if (!Chunk19780.Z.isConnected()) returnfalse;
    let t = null != (e = Chunk19780.Z.getGuildId()) ? module : Chunk981631.ME,
      n = Chunk944486.Z.getChannelId(exports);
    return (0, Chunk475468.K)(exports, require), Chunk925549.Z.channelListScrollTo(exports, Chunk19780.Z.getChannelId()), false
  }
}