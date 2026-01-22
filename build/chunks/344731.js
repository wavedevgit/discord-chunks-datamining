/** Chunk was on web.js **/
/** chunk id: 344731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => o
});
var Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
let o = {
  binds: ["mod+shift+u"],
  comboKeysBindGlobal: true,
  action() {
    let e = r.A.getChannel(i.A.getChannelId());
    return null == e || e.isManaged() || a._.dispatch(s.jej.UPLOAD_FILE, {
      channelId: e.id
    }), false
  }
}