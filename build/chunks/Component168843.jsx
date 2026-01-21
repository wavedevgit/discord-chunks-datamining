/** Chunk was on 82124 **/
/** chunk id: 168843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816782 = require("./816782.js"),
  Chunk367907 = require("./367907.js"),
  Chunk433355 = require("./433355.js"),
  Chunk914010 = require("./914010.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    channelId: t
  } = e, n = (0, i.e7)([s.ZP], () => s.ZP.getSection(t)), f = (0, i.e7)([c.Z], () => c.Z.getGuildId()), h = n === d.ULH.MEMBERS;
  return (0, r.jsx)(u.JO, {
    tooltip: h ? p.intl.string(p.t.Axvx8c) : p.intl.string(p.t.gxChDx),
    icon: l.BFJ,
    onClick: () => {
      o.ZP.trackWithMetadata(d.rMx.MEMBER_LIST_TOGGLED, {
        channel_id: t,
        guild_id: f,
        member_list_open: !h
      }), a.Z.toggleMembersSection()
    },
    selected: h
  })
}