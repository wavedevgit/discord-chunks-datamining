/** Chunk was on 67000 **/
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
  (0, l.e7)([s.Z], () => s.Z.getPrivateChannelsVersion());
  let e = s.Z.getMutablePrivateChannels(),
    t = (0, l.Wu)([c.Z], () => c.Z.getUnreadPrivateChannelIds()),
    {
      selectedVoiceGuildId: n,
      selectedVoiceChannelId: h
    } = (0, l.cj)([u.Z], () => ({
      selectedVoiceGuildId: u.Z.getGuildId(),
      selectedVoiceChannelId: u.Z.getChannelId()
    })),
    p = t.map(t => {
      let n = e[t];
      return null == n || n.id === h ? null : (0, r.jsx)(d.Z, {
        channel: n
      }, n.id)
    }),
    g = null == n && null != h ? e[h] : null;
  return null != g && p.unshift((0, r.jsx)(d.Z, {
    channel: g
  }, g.id)), (0, r.jsx)(o.Kqy, {
    id: "guild-list-unread-dms",
    role: "group",
    "aria-label": f.intl.string(f.t.YUU0RF),
    gap: "xs",
    hidden: p.length < 1,
    children: (0, r.jsx)(a.W, {
      component: i.Fragment,
      children: p
    })
  })
}