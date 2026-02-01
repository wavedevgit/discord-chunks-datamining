/** Chunk was on 13492 **/
/** chunk id: 127938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk833147 = require("./833147.jsx"),
  Chunk33445 = require("./33445.jsx"),
  Chunk91242 = require("./91242.js"),
  Chunk193855 = require("./193855.jsx"),
  Chunk360469 = require("./360469.js");

function d() {
  let e = (0, i.bG)([c.A], () => c.A.getConnectedFrame()),
    t = (0, i.bG)([c.A], () => (null == e ? true : e.applicationId) != null && c.A.isProxyTicketRefreshing(e.applicationId), [e]),
    n = r.useCallback(e => {
      let {
        application: t
      } = e;
      return (0, l.jsx)(s.A, {
        applicationId: t.id
      })
    }, []),
    d = r.useCallback(t => {
      let {
        application: n
      } = t, r = {};
      null != e && (r.instance_id = "example-cl-instance", r.platform = u.vu.DESKTOP, null != e.proxyTicket && (r.discord_proxy_ticket = e.proxyTicket));
      let i = null == e ? true : e.url;
      return (0, l.jsx)(o.A, {
        application: n,
        queryParams: r,
        url: i
      })
    }, [e]);
  return (0, l.jsx)(a.E, {
    activity: e,
    isLoading: t,
    renderHeader: n,
    renderActivityIFrameWithLoadedData: d
  })
}