/** Chunk was on 13492 **/
/** chunk id: 127938, original params: e,n,t (module,exports,require) **/
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
  let e = (0, a.bG)([c.A], () => c.A.getConnectedFrame()),
    n = (0, a.bG)([c.A], () => (null == e ? true : e.applicationId) != null && c.A.isProxyTicketRefreshing(e.applicationId), [e]),
    t = o.useCallback(e => {
      let {
        application: n
      } = e;
      return (0, r.jsx)(_.A, {
        applicationId: n.id
      })
    }, []),
    d = o.useCallback(n => {
      let {
        application: t
      } = n, o = {};
      null != e && (o.instance_id = "example-cl-instance", o.platform = s.vu.DESKTOP, null != e.proxyTicket && (o.discord_proxy_ticket = e.proxyTicket));
      let a = null == e ? true : e.url;
      return (0, r.jsx)(i.A, {
        application: t,
        queryParams: o,
        url: a
      })
    }, [e]);
  return (0, r.jsx)(l.E, {
    activity: e,
    isLoading: n,
    renderHeader: t,
    renderActivityIFrameWithLoadedData: d
  })
}