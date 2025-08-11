/** Chunk was on web.js **/
/** chunk id: 389303, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk314897 = require("./314897.js"),
  Chunk496675 = require("./496675.js"),
  Chunk938475 = require("./938475.js"),
  Chunk700785 = require("./700785.js"),
  Chunk924301 = require("./924301.js"),
  Chunk85243 = require("./85243.js");

function c(e) {
  if (!e.isGuildVoice() || s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 || !i.Z.can(l.AN, e)) returnfalse;
  let t = new Set(o.ZP.getVoiceStatesForChannel(e).map(e => e.user.id)),
    n = r.default.getId();
  for (let r of t)
    if (r !== n && a.BT({
        permission: l.AN,
        user: r,
        context: e
      })) returnfalse;
  returntrue
}