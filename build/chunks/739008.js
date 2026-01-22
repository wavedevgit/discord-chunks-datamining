/** Chunk was on web.js **/
/** chunk id: 739008, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => d
});
var Chunk843472 = require("./843472.js"),
  Chunk567035 = require("./567035.js"),
  Chunk458294 = require("./458294.js"),
  Chunk320501 = require("./320501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
let d = {
  binds: ["shift+esc"],
  comboKeysBindGlobal: true,
  action() {
    let e = l.A.getGuildId();
    if (null == e || !a.default.getGuildHasUnreadIgnoreMuted(e)) return;
    (0, i.A)([e]);
    let t = o.A.getChannelId(e);
    null == t || (s.A.getMessages(t).hasMoreAfter ? r.A.jumpToPresent(t, u.EMb) : c._.dispatch(u.jej.SCROLLTO_PRESENT))
  }
}