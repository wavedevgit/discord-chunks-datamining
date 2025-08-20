/** Chunk was on web.js **/
/** chunk id: 540768, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => l
});
var Chunk211739 = require("./211739.js"),
  Chunk680089 = require("./680089.js"),
  Chunk984933 = require("./984933.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js");
let l = {
  binds: ["mod+shift+a"],
  comboKeysBindGlobal: true,
  action() {
    let e = Chunk914010.Z.getGuildId();
    return null != module && (Chunk984933.ZP.getChannels(module)[Chunk981631.d4z.GUILD_CATEGORY].some(e => {
      let {
        channel: t
      } = e;
      return "null" !== t.id && !i.Z.isCollapsed(t.id)
    }) ? (0, Chunk211739.N5)(module) : (0, Chunk211739.lc)(module), false)
  }
}