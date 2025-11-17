/** Chunk was on 34740 **/
/** chunk id: 413251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk881998 = require("./881998.js");

function c(e) {
  let t = (null == e ? true : e.require_application_authorization) ? e.application_id : null,
    {
      authorizationsFetchState: n,
      applicationOAuth2Token: c
    } = (0, r.cj)([s.default], () => ({
      authorizationsFetchState: s.default.getFetchState(),
      applicationOAuth2Token: s.default.getNewestTokenForApplication(t)
    })),
    u = (0, r.e7)([o.Z], () => o.Z.getApplication(t)),
    d = (0, r.e7)([o.Z], () => o.Z.getApplication(null == u ? true : u.parentId));
  (0, i.useEffect)(() => {
    null != t && n === s.FetchState.NOT_FETCHED && l.Z.fetch()
  }, [n, t]), (0, i.useEffect)(() => {
    null != t && null == u && n === s.FetchState.FETCHED && a.ZP.fetchApplications([t], false)
  }, [t, c, n, u]), (0, i.useEffect)(() => {
    null != u && null != u.parentId && null == d && n === s.FetchState.FETCHED && a.ZP.fetchApplications([u.parentId], false)
  }, [u, n, d]);
  let p = null != u && (null == u.parentId || null != d);
  return {
    showLinkedLobbyApplicationLoadingIndicator: null != t && (n !== s.FetchState.FETCHED || null == u || !p),
    requiredLinkedLobbyApplication: null == c && null != u && p ? null != d ? d : u : null
  }
}