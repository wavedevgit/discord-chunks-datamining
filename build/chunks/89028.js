/** Chunk was on web.js **/
/** chunk id: 89028, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => a
});
var Chunk2818 = require("./2818.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let a = {
  binds: ["mod+l"],
  comboKeysBindGlobal: true,
  action() {
    let {
      enabled: e,
      inInbox: t
    } = Chunk2818.Z.getCurrentConfig({
      location: "keybinds"
    }, {
      autoTrackExposure: false
    });
    if (module && !exports) return Chunk585483.S.dispatch(Chunk981631.CkL.TOGGLE_FOR_LATER), false
  }
}