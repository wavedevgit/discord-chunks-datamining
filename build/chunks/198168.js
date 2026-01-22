/** Chunk was on web.js **/
/** chunk id: 198168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
});
var Chunk837057 = require("./837057.js"),
  Chunk310419 = require("./310419.js"),
  Chunk967198 = require("./967198.js"),
  Chunk488995 = require("./488995.js");
let o = {
  binds: ["mod+ctrl+a"],
  comboKeysBindGlobal: true,
  action() {
    var e;
    let t = null != (e = a.A.getGuildId()) ? e : true;
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