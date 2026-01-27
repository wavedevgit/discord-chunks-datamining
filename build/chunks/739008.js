/** Chunk was on 60667 **/
/** chunk id: 739008, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => u
});
var Chunk843472 = require("./843472.js"),
  Chunk567035 = require("./567035.js"),
  Chunk458294 = require("./458294.js"),
  Chunk320501 = require("./320501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
let u = {
  binds: ["shift+esc"],
  comboKeysBindGlobal: true,
  action() {
    let e = o.A.getGuildId();
    if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
    (0, i.A)([e]);
    let t = a.A.getChannelId(e);
    null == t || (s.A.getMessages(t).hasMoreAfter ? r.A.jumpToPresent(t, d.EMb) : c._.dispatch(d.jej.SCROLLTO_PRESENT))
  }
}