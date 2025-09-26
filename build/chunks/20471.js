/** Chunk was on 64170 **/
/** chunk id: 20471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FG: () => O,
  ju: () => b,
  ro: () => m
}), require("./997841.js"), require("./388685.js");
var r, Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk384275 = require("./384275.js"),
  Chunk812206 = require("./812206.js"),
  Chunk812967 = require("./812967.js"),
  Chunk146219 = require("./146219.js"),
  Chunk881998 = require("./881998.js"),
  Chunk630388 = require("./630388.js"),
  Chunk49012 = require("./49012.js"),
  Chunk981631 = require("./981631.js"),
  m = ((r = {}).RPC = "rpc", r.WEB = "web", r);

function b(e) {
  var t, n, r, l, i;
  if (null == e) return null;
  if ((0, d.yE)(null != (t = e.flags) ? t : 0, f.udG.SOCIAL_LAYER_INTEGRATION) || (0, d.yE)(null != (n = e.flags) ? n : 0, f.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return e;
  for (let t of null != (r = e.linkedGames) ? r : []) {
    let e = o.Z.getApplication(t.id);
    if (null != e && ((0, d.yE)(null != (l = e.flags) ? l : 0, f.udG.SOCIAL_LAYER_INTEGRATION) || (0, d.yE)(null != (i = e.flags) ? i : 0, f.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return e
  }
  return null
}

function O(e) {
  let {
    allowedFlows: t = ["rpc", "web"]
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = l.useMemo(() => b(e), [e]), r = (0, c.t)(null == n ? true : n.id, "AUTHORIZE_REQUEST"), {
    hasAlreadyLinked: o,
    authorizedAppsFetchState: d
  } = (0, i.cj)([u.Z], () => ({
    hasAlreadyLinked: null != u.Z.getNewestTokenForApplication(null == n ? true : n.id),
    authorizedAppsFetchState: u.Z.getFetchState()
  })), f = t.includes("rpc") && r, m = t.includes("web") && (null == n ? true : n.connectionEntrypointUrl) != null, O = f || m;
  l.useEffect(() => {
    d === u.M.NOT_FETCHED && O && a.Z.fetch()
  }, [d, O]);
  let y = l.useCallback(() => null == n ? null : f ? (s.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === n.id, {}), "rpc") : m ? ((0, p.q)({
    href: n.connectionEntrypointUrl
  }), "web") : null, [f, m, n]);
  return {
    loading: d !== u.M.FETCHED,
    canStartAuthorization: O,
    hasAlreadyLinked: o && d === u.M.FETCHED,
    startAuthorization: y,
    connectionApp: n
  }
}