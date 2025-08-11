/** Chunk was on web.js **/
/** chunk id: 413251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk73800 = require("./73800.js"),
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
    } = (0, i.cj)([l.Z], () => ({
      authorizationsFetchState: l.Z.getFetchState(),
      applicationOAuth2Token: l.Z.getNewestTokenForApplication(t)
    })),
    u = (0, i.e7)([s.Z], () => s.Z.getApplication(t)),
    d = (0, i.e7)([s.Z], () => s.Z.getApplication(null == u ? true : u.parentId));
  (0, r.useEffect)(() => {
    null != t && n === l.M.NOT_FETCHED && o.Z.fetch()
  }, [n, t]), (0, r.useEffect)(() => {
    null != t && null == u && n === l.M.FETCHED && a.ZP.fetchApplications([t], false)
  }, [t, c, n, u]), (0, r.useEffect)(() => {
    null != u && null != u.parentId && null == d && n === l.M.FETCHED && a.ZP.fetchApplications([u.parentId], false)
  }, [u, n, d]);
  let f = null != u && (null == u.parentId || null != d);
  return {
    showLinkedLobbyApplicationLoadingIndicator: null != t && (n !== l.M.FETCHED || null == u || !f),
    requiredLinkedLobbyApplication: null == c && null != u && f ? null != d ? d : u : null
  }
}