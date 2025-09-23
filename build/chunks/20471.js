/** Chunk was on 93886 **/
/** chunk id: 20471, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  F: () => p,
  j: () => f
}), require("./997841.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk812206 = require("./812206.js"),
  Chunk812967 = require("./812967.js"),
  Chunk146219 = require("./146219.js"),
  Chunk881998 = require("./881998.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  var n, t, r, i, l;
  if (null == e) return null;
  if ((0, d.yE)(null != (n = e.flags) ? n : 0, u.udG.SOCIAL_LAYER_INTEGRATION) || (0, d.yE)(null != (t = e.flags) ? t : 0, u.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return e;
  for (let n of null != (r = e.linkedGames) ? r : []) {
    let e = a.Z.getApplication(n.id);
    if (null != e && ((0, d.yE)(null != (i = e.flags) ? i : 0, u.udG.SOCIAL_LAYER_INTEGRATION) || (0, d.yE)(null != (l = e.flags) ? l : 0, u.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return e
  }
  return null
}

function p(e) {
  let n = r.useMemo(() => f(e), [e]),
    t = (0, s.t)(null == n ? true : n.id, "AUTHORIZE_REQUEST"),
    {
      hasAlreadyLinked: a,
      authorizedAppsFetchState: d
    } = (0, i.cj)([c.Z], () => ({
      hasAlreadyLinked: null != c.Z.getNewestTokenForApplication(null == n ? true : n.id),
      authorizedAppsFetchState: c.Z.getFetchState()
    }));
  r.useEffect(() => {
    d === c.M.NOT_FETCHED && t && l.Z.fetch()
  }, [d, t]);
  let u = r.useCallback(() => {
    null != n && t && o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === n.id, {})
  }, [t, n]);
  return {
    canStartAuthorization: t,
    hasAlreadyLinked: a && d === c.M.FETCHED,
    startAuthorization: u,
    connectionApp: n
  }
}