/** Chunk was on 9207 **/
/** chunk id: 344731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => a
});
var Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
let a = {
  binds: ["mod+shift+u"],
  comboKeysBindGlobal: true,
  action() {
    let e = r.A.getChannel(i.A.getChannelId());
    return null == e || e.isManaged() || l._.dispatch(s.jej.UPLOAD_FILE, {
      channelId: e.id
    }), false
  }
}