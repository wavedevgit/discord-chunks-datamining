/** Chunk was on 2827 **/
/** chunk id: 198168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => a
});
var Chunk837057 = require("./837057.js"),
  Chunk310419 = require("./310419.js"),
  Chunk967198 = require("./967198.js"),
  Chunk488995 = require("./488995.js");
let a = {
  binds: ["mod+ctrl+a"],
  comboKeysBindGlobal: true,
  action() {
    var e;
    let t = null != (e = l.A.getGuildId()) ? e : true;
    (0, r.transitionToGlobalDiscovery)({
      tab: s.GlobalDiscoveryTab.APPS,
      newSessionState: {
        guildId: null != t ? t : null,
        entrypoint: {
          name: i.sW.KEYBOARD_SHORTCUT
        }
      }
    })
  }
}