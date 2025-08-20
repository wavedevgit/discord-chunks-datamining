/** Chunk was on web.js **/
/** chunk id: 775774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => i
});
var Chunk358085 = require("./358085.js");
let i = {
  binds: ["mod+alt+i"],
  comboKeysBindGlobal: true,
  action(e) {
    if ((0, r.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), false
  }
}