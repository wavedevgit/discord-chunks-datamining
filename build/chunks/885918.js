/** Chunk was on web.js **/
/** chunk id: 885918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./65821.js");
var Chunk975975 = require("./975975.js"),
  i = require.n(Chunk975975),
  Chunk762230 = require("./762230.js"),
  Chunk843472 = require("./843472.js"),
  Chunk596720 = require("./596720.js"),
  Chunk451909 = require("./451909.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk513480 = require("./513480.js"),
  Chunk381941 = require("./381941.js");
let p = {
    async sendForward(e, t, n) {
      let r = c.A.getChannel(t),
        i = c.A.getChannel(e.channel_id),
        p = (null == n ? true : n.isICYMIGameContentForwarding) ? o.VL : null == i ? true : i.guild_id;
      if (null == i && null == p) throw Error("Unable to find original channel for message");
      if (null == r) throw Error("Unable to find destination channel for message");
      let _ = l.Ay.parse(r, ""),
        h = {
          guild_id: p,
          channel_id: e.channel_id,
          message_id: e.id,
          type: a.S.FORWARD,
          forward_only: (null == n ? true : n.onlyAttachmentIds) != null || (null == n ? true : n.onlyEmbedIndices) != null ? {
            attachment_ids: n.onlyAttachmentIds,
            embed_indices: n.onlyEmbedIndices
          } : true
        };
      await s.A.sendMessage(r.id, _, false, {
        messageReference: h,
        location: f.Hx.FORWARDING,
        eagerDispatch: false
      }), (null == n ? true : n.withMessage) == null || (0, d.lP)(r, u.A) || await s.A.sendMessage(r.id, l.Ay.parse(r, n.withMessage), false, {
        location: f.Hx.FORWARDING
      })
    },
    sendForwards: (e, t, n) => i()(t.map(t => p.sendForward(e, t, n)))
  },
  _ = p