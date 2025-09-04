/** Chunk was on 93886 **/
/** chunk id: 20471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => x,
  j: () => m
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

function m(e) {
  var t, n, a, r, l;
  if (null == e) return null;
  if ((0, d.yE)(null != (t = e.flags) ? t : 0, u.udG.SOCIAL_LAYER_INTEGRATION) || (0, d.yE)(null != (n = e.flags) ? n : 0, u.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return e;
  for (let t of null != (a = e.linkedGames) ? a : []) {
    let e = i.Z.getApplication(t.id);
    if (null != e && ((0, d.yE)(null != (r = e.flags) ? r : 0, u.udG.SOCIAL_LAYER_INTEGRATION) || (0, d.yE)(null != (l = e.flags) ? l : 0, u.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return e
  }
  return null
}

function x(e) {
  let t = a.useMemo(() => m(e), [e]),
    n = (0, o.t)(null == t ? true : t.id, "AUTHORIZE_REQUEST"),
    {
      hasAlreadyLinked: i,
      authorizedAppsFetchState: d
    } = (0, r.cj)([c.Z], () => ({
      hasAlreadyLinked: null != c.Z.getNewestTokenForApplication(null == t ? true : t.id),
      authorizedAppsFetchState: c.Z.getFetchState()
    }));
  a.useEffect(() => {
    d === c.M.NOT_FETCHED && l.Z.fetch()
  }, [d]);
  let u = a.useCallback(() => {
    null != t && n && s.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === t.id, {})
  }, [n, t]);
  return {
    canStartAuthorization: n,
    hasAlreadyLinked: i && d === c.M.FETCHED,
    startAuthorization: u
  }
}