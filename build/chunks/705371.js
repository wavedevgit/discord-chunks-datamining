/** Chunk was on 75708 **/
/** chunk id: 705371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => u
});
var Chunk904245 = require("./904245.js"),
  Chunk181945 = require("./181945.js"),
  Chunk888369 = require("./888369.js"),
  Chunk375954 = require("./375954.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let u = {
  binds: ["shift+esc"],
  comboKeysBindGlobal: true,
  action() {
    let e = Chunk914010.Z.getGuildId();
    if (null == module || !Chunk888369.default.getGuildHasUnreadIgnoreMuted(module)) return;
    (0, Chunk181945.Z)([module]);
    let t = Chunk944486.Z.getChannelId(module);
    null != exports && (Chunk375954.Z.getMessages(exports).hasMoreAfter ? Chunk904245.Z.jumpToPresent(exports, Chunk981631.AQB) : Chunk585483.S.dispatch(Chunk981631.CkL.SCROLLTO_PRESENT))
  }
}