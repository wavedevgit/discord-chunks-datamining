/** Chunk was on 19157 **/
/** chunk id: 859155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./415506.js");
var Chunk991637 = require("./991637.js"),
  r = require.n(Chunk991637),
  Chunk388123 = require("./388123.js"),
  Chunk904245 = require("./904245.js"),
  Chunk797394 = require("./797394.js"),
  Chunk957730 = require("./957730.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk784384 = require("./784384.js"),
  Chunk959517 = require("./959517.js");
let h = {
    async sendForward(e, t, n) {
      let l = c.Z.getChannel(t),
        r = c.Z.getChannel(e.channel_id),
        h = (null == n ? true : n.isICYMIGameContentForwarding) ? s.KF : null == r ? true : r.guild_id;
      if (null == r && null == h) throw Error("Unable to find original channel for message");
      if (null == l) throw Error("Unable to find destination channel for message");
      let _ = o.ZP.parse(l, ""),
        g = {
          guild_id: h,
          channel_id: e.channel_id,
          message_id: e.id,
          type: i.U.FORWARD,
          forward_only: (null == n ? true : n.onlyAttachmentIds) != null || (null == n ? true : n.onlyEmbedIndices) != null ? {
            attachment_ids: n.onlyAttachmentIds,
            embed_indices: n.onlyEmbedIndices
          } : true
        };
      await a.Z.sendMessage(l.id, _, false, {
        messageReference: g,
        location: f.dy.FORWARDING,
        eagerDispatch: false
      }), (null == n ? true : n.withMessage) == null || (0, d.pU)(l, u.Z) || await a.Z.sendMessage(l.id, o.ZP.parse(l, n.withMessage), false, {
        location: f.dy.FORWARDING
      })
    },
    sendForwards: (e, t, n) => r()(t.map(t => h.sendForward(e, t, n)))
  },
  _ = h