/** Chunk was on 12009 **/
/** chunk id: 404488, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u,
  q: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk325708 = require("./325708.jsx"),
  Chunk213557 = require("./213557.jsx"),
  Chunk433355 = require("./433355.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
let o = 656;

function u(e) {
  let {
    pageWidth: n,
    onSidebarResize: t
  } = e, u = (0, l.e7)([c.ZP], () => c.ZP.getSidebarState(d.oC.GUILD_HOME));
  if (null == u || null == u.channelId) return null;
  let m = n - s.PrS - o;
  return (0, a.jsx)(r.Z, {
    sidebarType: r.y.HomeSidebar,
    maxWidth: m,
    onWidthChange: t,
    children: (0, a.jsx)(i.Z, {
      channelId: u.channelId,
      baseChannelId: d.oC.GUILD_HOME,
      channelViewSource: "Home View",
      isResourceChannelView: true
    })
  })
}