/** Chunk was on 84018 **/
/** chunk id: 851341, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk73153 = require("./73153.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js");
__OVERLAY__ && Chunk73153.h.subscribe("OVERLAY_OPEN_MESSAGE", function(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: i
  } = e;
  (0, r.bG)({
    pathname: s.BVt.CHANNEL(t, n, i)
  })
})