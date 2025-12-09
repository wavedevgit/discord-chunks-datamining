/** Chunk was on 1272 **/
/** chunk id: 97375, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk24917 = require("./24917.js"),
  Chunk106351 = require("./106351.js"),
  Chunk252258 = require("./252258.js"),
  Chunk243814 = require("./243814.js"),
  Chunk45792 = require("./45792.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk592125 = require("./592125.js"),
  Chunk600027 = require("./600027.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");
let h = {
  [Chunk231338.Et.INVITE_USER_EMBEDDED]: (0, Chunk45792.S)(Chunk231338.Et.INVITE_USER_EMBEDDED, {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RELATIONSHIPS_READ]
    },
    async handler(e) {
      let t, {
          socket: n,
          args: {
            user_id: a,
            content: s
          }
        } = e,
        p = n.application.id;
      if (null == p) throw new r.O({
        errorCode: g.lT.INVALID_COMMAND
      }, "No application.");
      let h = c.ZP.getConnectedActivityLocation();
      if (null == h) throw new r.O({
        errorCode: g.lT.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure an activity was set using setActivity.");
      switch (h.kind) {
        case l.E.GUILD_CHANNEL:
        case l.E.GUILD_CHANNEL_MESSAGE:
          t = (0, d.T)().channel;
          break;
        case l.E.PRIVATE_CHANNEL:
        case l.E.PRIVATE_CHANNEL_MESSAGE:
          let m = u.Z.getChannel(h.channel_id);
          if (null == m) throw new r.O({
            errorCode: g.lT.INVALID_CHANNEL
          }, "Invalid channel");
          if (m.type === i.d.DM) throw new r.O({
            errorCode: g.lT.INVALID_CHANNEL
          }, "Cannot send invite to a DM");
          t = m;
          break;
        default:
          throw new r.O({
            errorCode: g.lT.NO_ELIGIBLE_ACTIVITY
          }, "Unsupported activity location")
      }
      try {
        await (0, o.pu)({
          channelId: t.id,
          applicationId: p,
          userId: a,
          prefixedContent: s,
          location: "RPC_ACTIVITY_INVITE_USER",
          inviteAnalyticsMetadata: {
            source: f.t4x.ACTIVITY_INVITE
          }
        })
      } catch (e) {
        throw new r.O({
          errorCode: g.lT.UNKNOWN_ERROR
        }, "Failed to invite user")
      }
    }
  })
}