/** Chunk was on 13492 **/
/** chunk id: 127938, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk833147 = require("./833147.jsx"),
  Chunk33445 = require("./33445.jsx"),
  Chunk91242 = require("./91242.js"),
  Chunk193855 = require("./193855.jsx"),
  Chunk360469 = require("./360469.js");

function b() {
  let e = (0, l.bG)([o.A], () => o.A.getConnectedFrame()),
    t = (0, l.bG)([o.A], () => (null == e ? true : e.applicationId) != null && o.A.isProxyTicketRefreshing(e.applicationId), [e]),
    a = n.useCallback(e => {
      let {
        application: t
      } = e;
      return (0, c.jsx)(i.A, {
        applicationId: t.id
      })
    }, []),
    b = n.useCallback(t => {
      let {
        application: a
      } = t, n = {};
      null != e && (n.instance_id = "example-cl-instance", n.platform = f.vu.DESKTOP, null != e.proxyTicket && (n.discord_proxy_ticket = e.proxyTicket));
      let l = null == e ? true : e.url;
      return (0, c.jsx)(d.A, {
        application: a,
        queryParams: n,
        url: l
      })
    }, [e]);
  return (0, c.jsx)(r.E, {
    activity: e,
    isLoading: t,
    renderHeader: a,
    renderActivityIFrameWithLoadedData: b
  })
}