/** Chunk was on web.js **/
/** chunk id: 89028, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o
});
var Chunk2818 = require("./2818.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let o = {
  binds: ["mod+l"],
  comboKeysBindGlobal: true,
  action() {
    let {
      enabled: e,
      inInbox: t
    } = r.Z.getCurrentConfig({
      location: "keybinds"
    }, {
      autoTrackExposure: false
    });
    if (e && !t) return i.S.dispatch(a.CkL.TOGGLE_FOR_LATER), false
  }
}