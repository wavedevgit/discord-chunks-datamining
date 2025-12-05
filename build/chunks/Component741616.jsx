/** Chunk was on 83037 **/
/** chunk id: 741616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk358652 = require("./358652.js"),
  Chunk19780 = require("./19780.js"),
  Chunk919436 = require("./919436.jsx"),
  Chunk388032 = require("./388032.jsx");

function h() {
  (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getPrivateChannelsVersion());
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = (0, Chunk442837.Wu)([Chunk358652.Z], () => Chunk358652.Z.getUnreadPrivateChannelIds()),
    {
      selectedVoiceGuildId: n,
      selectedVoiceChannelId: h
    } = (0, Chunk442837.cj)([Chunk19780.Z], () => ({
      selectedVoiceGuildId: Chunk19780.Z.getGuildId(),
      selectedVoiceChannelId: Chunk19780.Z.getChannelId()
    })),
    p = exports.map(t => {
      let n = e[t];
      return null == n || n.id === h ? null : (0, r.jsx)(d.Z, {
        channel: n
      }, n.id)
    }),
    g = null == require && null != h ? module[h] : null;
  return null != g && p.unshift((0, Chunk54381.jsx)(Chunk919436.Z, {
    channel: g
  }, g.id)), (0, Chunk54381.jsx)(Chunk481060.Kqy, {
    id: "guild-list-unread-dms",
    role: "group",
    "aria-label": Chunk388032.intl.string(Chunk388032.t.YUU0RF),
    gap: "xs",
    hidden: p.length < 1,
    children: (0, Chunk54381.jsx)(Chunk215569.W, {
      component: Chunk473749.Fragment,
      children: p
    })
  })
}