/** Chunk was on web.js **/
/** chunk id: 296805, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => s
});
var Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk914010 = require("./914010.js"),
  Chunk49898 = require("./49898.js");
let s = {
  binds: ["mod+ctrl+a"],
  comboKeysBindGlobal: true,
  action() {
    var e;
    let t = null != (e = Chunk914010.Z.getGuildId()) ? module : true;
    (0, Chunk749681.transitionToGlobalDiscovery)({
      tab: Chunk49898.GlobalDiscoveryTab.APPS,
      newSessionState: {
        guildId: null != exports ? exports : null,
        entrypoint: {
          name: Chunk258971.xF.KEYBOARD_SHORTCUT
        }
      }
    })
  }
}