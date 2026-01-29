/** Chunk was on 1113 **/
/** chunk id: 137577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk824552 = require("./824552.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk546183 = require("./546183.js");

function c(e) {
  let t = (null == e ? true : e.require_application_authorization) ? e.application_id : null,
    {
      authorizationsFetchState: n,
      applicationOAuth2Token: c
    } = (0, l.cf)([o.default], () => ({
      authorizationsFetchState: o.default.getFetchState(),
      applicationOAuth2Token: o.default.getNewestTokenForApplication(t)
    })),
    u = (0, l.bG)([a.A], () => a.A.getApplication(t)),
    d = (0, l.bG)([a.A], () => a.A.getApplication(null == u ? true : u.parentId));
  (0, r.useEffect)(() => {
    null != t && n === o.FetchState.NOT_FETCHED && i.A.fetch()
  }, [n, t]), (0, r.useEffect)(() => {
    null != t && null == u && n === o.FetchState.FETCHED && s.Ay.fetchApplications([t], false)
  }, [t, c, n, u]), (0, r.useEffect)(() => {
    null != u && null != u.parentId && null == d && n === o.FetchState.FETCHED && s.Ay.fetchApplications([u.parentId], false)
  }, [u, n, d]);
  let h = null != u && (null == u.parentId || null != d);
  return {
    showLinkedLobbyApplicationLoadingIndicator: null != t && (n !== o.FetchState.FETCHED || null == u || !h),
    requiredLinkedLobbyApplication: null == c && null != u && h ? null != d ? d : u : null
  }
}