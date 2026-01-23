/** Chunk was on 33957 **/
/** chunk id: 490171, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  A: () => u,
  O: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk812771 = require("./812771.jsx"),
  Chunk274541 = require("./274541.jsx"),
  Chunk761640 = require("./761640.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");
let d = 656;

function u(e) {
  let {
    pageWidth: n,
    onSidebarResize: l
  } = e, u = (0, r.bG)([s.Ay], () => s.Ay.getSidebarState(o.VV.GUILD_HOME));
  if (null == u || null == u.channelId) return null;
  let m = n - c.MdR - d;
  return (0, t.jsx)(a.A, {
    sidebarType: a.X.HomeSidebar,
    maxWidth: m,
    onWidthChange: l,
    children: (0, t.jsx)(i.A, {
      channelId: u.channelId,
      baseChannelId: o.VV.GUILD_HOME,
      channelViewSource: "Home View",
      isResourceChannelView: true
    })
  })
}