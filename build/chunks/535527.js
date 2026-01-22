/** Chunk was on web.js **/
/** chunk id: 535527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => s
});
var Chunk966597 = require("./966597.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
let s = {
  binds: ["mod+l"],
  comboKeysBindGlobal: true,
  action() {
    let {
      enabled: e,
      inInbox: t
    } = r.A.getCurrentConfig({
      location: "keybinds"
    }, {
      autoTrackExposure: false
    });
    if (e && !t) return i._.dispatch(a.jej.TOGGLE_FOR_LATER), false
  }
}