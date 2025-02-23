/** Chunk was on 63141 (f9af9ed75b13636d.js) **/
"use strict";
var i = n(570140),
  r = n(703656),
  o = n(981631);
__OVERLAY__ && i.Z.subscribe("OVERLAY_OPEN_MESSAGE", function(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: i
  } = e;
  (0, r.dL)({
    pathname: o.Z5c.CHANNEL(t, n, i)
  })
})