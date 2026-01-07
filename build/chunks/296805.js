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
    let t = null != (e = a.Z.getGuildId()) ? e : true;
    (0, r.transitionToGlobalDiscovery)({
      tab: o.GlobalDiscoveryTab.APPS,
      newSessionState: {
        guildId: null != t ? t : null,
        entrypoint: {
          name: i.xF.KEYBOARD_SHORTCUT
        }
      }
    })
  }
}