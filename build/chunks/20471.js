/** Chunk was on 78585 **/
/** chunk id: 20471, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  FG: () => h,
  ju: () => S,
  ro: () => E
}), require("./997841.js"), require("./388685.js");
var n, Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk812206 = require("./812206.js"),
  Chunk812967 = require("./812967.js"),
  Chunk146219 = require("./146219.js"),
  Chunk881998 = require("./881998.js"),
  Chunk630388 = require("./630388.js"),
  Chunk49012 = require("./49012.js"),
  Chunk981631 = require("./981631.js"),
  E = ((n = {}).RPC = "rpc", n.WEB = "web", n);

function S(e) {
  var t, r, n, i, l;
  if (null == e) return null;
  if ((0, d.yE)(null != (t = e.flags) ? t : 0, p.udG.SOCIAL_LAYER_INTEGRATION) || (0, d.yE)(null != (r = e.flags) ? r : 0, p.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return e;
  for (let t of null != (n = e.linkedGames) ? n : []) {
    let e = o.Z.getApplication(t.id);
    if (null != e && ((0, d.yE)(null != (i = e.flags) ? i : 0, p.udG.SOCIAL_LAYER_INTEGRATION) || (0, d.yE)(null != (l = e.flags) ? l : 0, p.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return e
  }
  return null
}

function h(e) {
  let {
    allowedFlows: t = ["rpc", "web"]
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, r = i.useMemo(() => S(e), [e]), n = (0, c.t)(null == r ? true : r.id, "AUTHORIZE_REQUEST"), {
    hasAlreadyLinked: o,
    authorizedAppsFetchState: d
  } = (0, l.cj)([u.Z], () => ({
    hasAlreadyLinked: null != u.Z.getNewestTokenForApplication(null == r ? true : r.id),
    authorizedAppsFetchState: u.Z.getFetchState()
  })), p = t.includes("rpc") && n, E = t.includes("web") && (null == r ? true : r.connectionEntrypointUrl) != null, h = p || E;
  i.useEffect(() => {
    d === u.M.NOT_FETCHED && h && a.Z.fetch()
  }, [d, h]);
  let I = i.useCallback(() => null == r ? null : p ? (s.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === r.id, {}), "rpc") : E ? ((0, f.q)({
    href: r.connectionEntrypointUrl
  }), "web") : null, [p, E, r]);
  return {
    loading: d !== u.M.FETCHED,
    canStartAuthorization: h,
    hasAlreadyLinked: o && d === u.M.FETCHED,
    startAuthorization: I,
    connectionApp: r
  }
}