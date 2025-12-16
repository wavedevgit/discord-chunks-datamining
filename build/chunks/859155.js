/** Chunk was on web.js **/
/** chunk id: 859155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./415506.js");
var Chunk991637 = require("./991637.js"),
  i = require.n(Chunk991637),
  Chunk388123 = require("./388123.js"),
  Chunk904245 = require("./904245.js"),
  Chunk797394 = require("./797394.js"),
  Chunk957730 = require("./957730.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk784384 = require("./784384.js"),
  Chunk959517 = require("./959517.js");
let p = {
    async sendForward(e, t, n) {
      let r = c.Z.getChannel(t),
        i = c.Z.getChannel(e.channel_id),
        p = (null == n ? true : n.isICYMIGameContentForwarding) ? s.KF : null == i ? true : i.guild_id;
      if (null == i && null == p) throw Error("Unable to find original channel for message");
      if (null == r) throw Error("Unable to find destination channel for message");
      let _ = l.ZP.parse(r, ""),
        m = {
          guild_id: p,
          channel_id: e.channel_id,
          message_id: e.id,
          type: a.U.FORWARD,
          forward_only: (null == n ? true : n.onlyAttachmentIds) != null || (null == n ? true : n.onlyEmbedIndices) != null ? {
            attachment_ids: n.onlyAttachmentIds,
            embed_indices: n.onlyEmbedIndices
          } : true
        };
      await o.Z.sendMessage(r.id, _, false, {
        messageReference: m,
        location: f.dy.FORWARDING,
        eagerDispatch: false
      }), (null == n ? true : n.withMessage) == null || (0, d.pU)(r, u.Z) || await o.Z.sendMessage(r.id, l.ZP.parse(r, n.withMessage), false, {
        location: f.dy.FORWARDING
      })
    },
    sendForwards: (e, t, n) => i()(t.map(t => p.sendForward(e, t, n)))
  },
  _ = p