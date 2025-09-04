/** Chunk was on 63141 **/
/** chunk id: 913487, original params: e,t,n (module,exports,require) **/
var Chunk570140 = require("./570140.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");
__OVERLAY__ && Chunk570140.Z.subscribe("OVERLAY_OPEN_MESSAGE", function(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: i
  } = e;
  (0, r.dL)({
    pathname: l.Z5c.CHANNEL(t, n, i)
  })
})