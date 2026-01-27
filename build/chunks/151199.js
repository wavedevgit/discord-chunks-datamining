/** Chunk was on 60667 **/
/** chunk id: 151199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => o
});
var Chunk914430 = require("./914430.js"),
  Chunk924985 = require("./924985.js"),
  Chunk808728 = require("./808728.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js");
let o = {
  binds: ["mod+shift+a"],
  comboKeysBindGlobal: true,
  action() {
    let e = s.A.getGuildId();
    return null != e && (l.Ay.getChannels(e)[a.rbe.GUILD_CATEGORY].some(e => {
      let {
        channel: t
      } = e;
      return "null" !== t.id && !i.A.isCollapsed(t.id)
    }) ? (0, r.rZ)(e) : (0, r.Al)(e), false)
  }
}