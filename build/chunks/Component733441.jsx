/** Chunk was on 17534 **/
/** chunk id: 733441, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk604681 = require("./604681.js"),
  Chunk58149 = require("./58149.js"),
  Chunk761640 = require("./761640.js"),
  Chunk967198 = require("./967198.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    channelId: t
  } = e, n = (0, l.bG)([o.Ay], () => o.Ay.getSection(t)), p = (0, l.bG)([c.A], () => c.A.getGuildId()), g = n === d.YvQ.MEMBERS;
  return (0, r.jsx)(u.In, {
    tooltip: g ? h.intl.string(h.t.Axvx8c) : h.intl.string(h.t.gxChDx),
    icon: i.nFg,
    onClick: () => {
      a.Ay.trackWithMetadata(d.HAw.MEMBER_LIST_TOGGLED, {
        channel_id: t,
        guild_id: p,
        member_list_open: !g
      }), s.A.toggleMembersSection()
    },
    selected: g
  })
}