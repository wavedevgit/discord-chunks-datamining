/** Chunk was on 21738 **/
/** chunk id: 419615, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk119966 = require("./119966.js"),
  Chunk478437 = require("./478437.js"),
  Chunk344351 = require("./344351.js"),
  Chunk179771 = require("./179771.js"),
  Chunk420970 = require("./420970.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk734057 = require("./734057.js"),
  Chunk954843 = require("./954843.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");
let g = {
  [Chunk818348.e$.INVITE_USER_EMBEDDED]: (0, Chunk420970.T)(Chunk818348.e$.INVITE_USER_EMBEDDED, {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RELATIONSHIPS_READ]
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
      if (null == p) throw new r.G({
        errorCode: f.Lw.INVALID_COMMAND
      }, "No application.");
      let g = c.Ay.getConnectedActivityLocation();
      if (null == g) throw new r.G({
        errorCode: f.Lw.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure an activity was set using setActivity.");
      switch (g.kind) {
        case l.T.GUILD_CHANNEL:
        case l.T.GUILD_CHANNEL_MESSAGE:
          t = (0, d.W)().channel;
          break;
        case l.T.PRIVATE_CHANNEL:
        case l.T.PRIVATE_CHANNEL_MESSAGE:
          let m = u.A.getChannel(g.channel_id);
          if (null == m) throw new r.G({
            errorCode: f.Lw.INVALID_CHANNEL
          }, "Invalid channel");
          if (m.type === i.r.DM) throw new r.G({
            errorCode: f.Lw.INVALID_CHANNEL
          }, "Cannot send invite to a DM");
          t = m;
          break;
        default:
          throw new r.G({
            errorCode: f.Lw.NO_ELIGIBLE_ACTIVITY
          }, "Unsupported activity location")
      }
      try {
        await (0, o.Ue)({
          channelId: t.id,
          applicationId: p,
          userId: a,
          prefixedContent: s,
          location: "RPC_ACTIVITY_INVITE_USER",
          inviteAnalyticsMetadata: {
            source: h.PE1.ACTIVITY_INVITE
          }
        })
      } catch (e) {
        throw new r.G({
          errorCode: f.Lw.UNKNOWN_ERROR
        }, "Failed to invite user")
      }
    }
  })
}