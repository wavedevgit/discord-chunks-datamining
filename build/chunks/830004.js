/** Chunk was on web.js **/
/** chunk id: 830004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => i
});
var Chunk723702 = require("./723702.js");
let i = {
  binds: ["mod+alt+i"],
  comboKeysBindGlobal: true,
  action(e) {
    if ((0, r.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), false
  }
}