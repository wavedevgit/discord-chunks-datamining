/** Chunk was on 63962 **/
/** chunk id: 168843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816782 = require("./816782.js"),
  Chunk367907 = require("./367907.js"),
  Chunk433355 = require("./433355.js"),
  Chunk914010 = require("./914010.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    channelId: t
  } = e, n = (0, i.e7)([o.ZP], () => o.ZP.getSection(t)), h = (0, i.e7)([c.Z], () => c.Z.getGuildId()), f = n === u.ULH.MEMBERS;
  return (0, r.jsx)(d.JO, {
    tooltip: f ? p.intl.string(p.t.Axvx8c) : p.intl.string(p.t.gxChDx),
    icon: l.BFJ,
    onClick: () => {
      s.ZP.trackWithMetadata(u.rMx.MEMBER_LIST_TOGGLED, {
        channel_id: t,
        guild_id: h,
        member_list_open: !f
      }), a.Z.toggleMembersSection()
    },
    selected: f
  })
}