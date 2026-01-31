/** Chunk was on 17534 **/
/** chunk id: 845211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73939 = require("./73939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk131677 = require("./131677.js"),
  Chunk383501 = require("./383501.js"),
  Chunk50400 = require("./50400.jsx"),
  Chunk985018 = require("./985018.jsx");

function p() {
  (0, i.bG)([o.A], () => o.A.getPrivateChannelsVersion());
  let e = o.A.getMutablePrivateChannels(),
    t = (0, i.yK)([c.A], () => c.A.getUnreadPrivateChannelIds()),
    {
      selectedVoiceGuildId: n,
      selectedVoiceChannelId: p
    } = (0, i.cf)([u.A], () => ({
      selectedVoiceGuildId: u.A.getGuildId(),
      selectedVoiceChannelId: u.A.getChannelId()
    })),
    g = t.map(t => {
      let n = e[t];
      return null == n || n.id === p ? null : (0, r.jsx)(d.A, {
        channel: n
      }, n.id)
    }),
    f = null == n && null != p ? e[p] : null;
  return null != f && g.unshift((0, r.jsx)(d.A, {
    channel: f
  }, f.id)), (0, r.jsx)(a.BJc, {
    id: "guild-list-unread-dms",
    role: "group",
    "aria-label": h.intl.string(h.t.YUU0RF),
    gap: "xs",
    hidden: g.length < 1,
    children: (0, r.jsx)(s.F, {
      component: l.Fragment,
      children: g
    })
  })
}