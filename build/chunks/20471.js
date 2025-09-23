/** Chunk was on 64170 **/
/** chunk id: 20471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => f,
  j: () => p
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

function p(e) {
  var t, n, r, l, i;
  if (null == e) return null;
  if ((0, u.yE)(null != (t = e.flags) ? t : 0, d.udG.SOCIAL_LAYER_INTEGRATION) || (0, u.yE)(null != (n = e.flags) ? n : 0, d.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return e;
  for (let t of null != (r = e.linkedGames) ? r : []) {
    let e = a.Z.getApplication(t.id);
    if (null != e && ((0, u.yE)(null != (l = e.flags) ? l : 0, d.udG.SOCIAL_LAYER_INTEGRATION) || (0, u.yE)(null != (i = e.flags) ? i : 0, d.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return e
  }
  return null
}

function f(e) {
  let t = r.useMemo(() => p(e), [e]),
    n = (0, s.t)(null == t ? true : t.id, "AUTHORIZE_REQUEST"),
    {
      hasAlreadyLinked: a,
      authorizedAppsFetchState: u
    } = (0, l.cj)([c.Z], () => ({
      hasAlreadyLinked: null != c.Z.getNewestTokenForApplication(null == t ? true : t.id),
      authorizedAppsFetchState: c.Z.getFetchState()
    }));
  r.useEffect(() => {
    u === c.M.NOT_FETCHED && n && i.Z.fetch()
  }, [u, n]);
  let d = r.useCallback(() => {
    null != t && n && o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === t.id, {})
  }, [n, t]);
  return {
    canStartAuthorization: n,
    hasAlreadyLinked: a && u === c.M.FETCHED,
    startAuthorization: d,
    connectionApp: t
  }
}