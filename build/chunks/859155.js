/** Chunk was on 9797 **/
/** chunk id: 859155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./415506.js");
var Chunk991637 = require("./991637.js"),
  l = require.n(Chunk991637),
  Chunk388123 = require("./388123.js"),
  Chunk904245 = require("./904245.js"),
  Chunk797394 = require("./797394.js"),
  Chunk957730 = require("./957730.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk784384 = require("./784384.js"),
  Chunk959517 = require("./959517.js");
let m = {
    async sendForward(e, t, n) {
      let a = c.Z.getChannel(t),
        l = c.Z.getChannel(e.channel_id),
        m = (null == n ? true : n.isICYMIGameContentForwarding) ? s.KF : null == l ? true : l.guild_id;
      if (null == l && null == m) throw Error("Unable to find original channel for message");
      if (null == a) throw Error("Unable to find destination channel for message");
      let g = o.ZP.parse(a, ""),
        f = {
          guild_id: m,
          channel_id: e.channel_id,
          message_id: e.id,
          type: r.U.FORWARD,
          forward_only: (null == n ? true : n.onlyAttachmentIds) != null || (null == n ? true : n.onlyEmbedIndices) != null ? {
            attachment_ids: n.onlyAttachmentIds,
            embed_indices: n.onlyEmbedIndices
          } : true
        };
      await i.Z.sendMessage(a.id, g, false, {
        messageReference: f,
        location: h.dy.FORWARDING,
        eagerDispatch: false
      }), (null == n ? true : n.withMessage) == null || (0, d.pU)(a, u.Z) || await i.Z.sendMessage(a.id, o.ZP.parse(a, n.withMessage), false, {
        location: h.dy.FORWARDING
      })
    },
    sendForwards: (e, t, n) => l()(t.map(t => m.sendForward(e, t, n)))
  },
  g = m