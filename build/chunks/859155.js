/** Chunk was on 33648 **/
/** chunk id: 859155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
let f = {
    async sendForward(e, t, n) {
      let l = c.Z.getChannel(t),
        r = c.Z.getChannel(e.channel_id),
        f = (null == n ? true : n.isICYMIGameContentForwarding) ? s.KF : null == r ? true : r.guild_id;
      if (null == r && null == f) throw Error("Unable to find original channel for message");
      if (null == l) throw Error("Unable to find destination channel for message");
      let m = o.ZP.parse(l, ""),
        g = {
          guild_id: f,
          channel_id: e.channel_id,
          message_id: e.id,
          type: a.U.FORWARD,
          forward_only: (null == n ? true : n.onlyAttachmentIds) != null || (null == n ? true : n.onlyEmbedIndices) != null ? {
            attachment_ids: n.onlyAttachmentIds,
            embed_indices: n.onlyEmbedIndices
          } : true
        };
      await i.Z.sendMessage(l.id, m, false, {
        messageReference: g,
        location: h.dy.FORWARDING,
        eagerDispatch: false
      }), (null == n ? true : n.withMessage) == null || (0, d.pU)(l, u.Z) || await i.Z.sendMessage(l.id, o.ZP.parse(l, n.withMessage), false, {
        location: h.dy.FORWARDING
      })
    },
    sendForwards: (e, t, n) => r()(t.map(t => f.sendForward(e, t, n)))
  },
  m = f