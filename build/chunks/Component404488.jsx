/** Chunk was on 12009 **/
/** chunk id: 404488, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u,
  q: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk325708 = require("./325708.jsx"),
  Chunk213557 = require("./213557.jsx"),
  Chunk433355 = require("./433355.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
let d = 656;

function u(e) {
  let {
    pageWidth: n,
    onSidebarResize: t
  } = e, u = (0, r.e7)([s.ZP], () => s.ZP.getSidebarState(o.oC.GUILD_HOME));
  if (null == u || null == u.channelId) return null;
  let m = n - c.PrS - d;
  return (0, l.jsx)(a.Z, {
    sidebarType: a.y.HomeSidebar,
    maxWidth: m,
    onWidthChange: t,
    children: (0, l.jsx)(i.Z, {
      channelId: u.channelId,
      baseChannelId: o.oC.GUILD_HOME,
      channelViewSource: "Home View",
      isResourceChannelView: true
    })
  })
}