/** Chunk was on web.js **/
/** chunk id: 746887, original params: e,t,n (module,exports,re quire) **/
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
    let e = o.Z.getGuildId();
    return null != e && (a.ZP.getChannels(e)[s.d4z.GUILD_CATEGORY].some(e => {
      let {
        channel: t
      } = e;
      return "null" !== t.id && !i.Z.isCollapsed(t.id)
    }) ? (0, r.N5)(e) : (0, r.lc)(e), false)
  }
}