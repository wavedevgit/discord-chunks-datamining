/** Chunk was on 27278 **/
/** chunk id: 455473, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk781780 = require("./781780.jsx"),
  Chunk701011 = require("./701011.jsx"),
  Chunk591472 = require("./591472.js"),
  Chunk80963 = require("./80963.jsx"),
  Chunk701488 = require("./701488.js");

function s() {
  let e = (0, r.e7)([l.Z], () => l.Z.getConnectedFrame()),
    n = o.useCallback(e => {
      let {
        application: n
      } = e;
      return (0, a.jsx)(d.Z, {
        applicationId: n.id
      })
    }, []),
    t = o.useCallback(n => {
      let {
        application: t
      } = n, o = {};
      null != e && (o.instance_id = "example-cl-instance", o.platform = u.S4.DESKTOP, null != e.proxyTicket && (o.discord_proxy_ticket = e.proxyTicket));
      let r = null == e ? true : e.url;
      return (0, a.jsx)(c.Z, {
        application: t,
        queryParams: o,
        url: r
      })
    }, [e]);
  return (0, a.jsx)(i.S, {
    activity: e,
    renderHeader: n,
    renderActivityIFrameWithLoadedData: t
  })
}