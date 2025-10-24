/** Chunk was on 88742 **/
/** chunk id: 20471, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  FG: () => m,
  ju: () => x,
  ro: () => p
}), require("./997841.js"), require("./388685.js");
var i, Chunk647438 = require("./647438.js"),
  Chunk812206 = require("./812206.js"),
  Chunk812967 = require("./812967.js"),
  Chunk146219 = require("./146219.js"),
  Chunk630388 = require("./630388.js"),
  Chunk49012 = require("./49012.js"),
  Chunk491662 = require("./491662.js"),
  Chunk981631 = require("./981631.js"),
  p = ((i = {}).RPC = "rpc", i.WEB = "web", i);

function x(t) {
  var n, e, i, a, l;
  if (null == t) return null;
  if ((0, r.yE)(null != (n = t.flags) ? n : 0, d.udG.SOCIAL_LAYER_INTEGRATION) || (0, r.yE)(null != (e = t.flags) ? e : 0, d.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return t;
  for (let n of null != (i = t.linkedGames) ? i : []) {
    let t = s.Z.getApplication(n.id);
    if (null != t && ((0, r.yE)(null != (a = t.flags) ? a : 0, d.udG.SOCIAL_LAYER_INTEGRATION) || (0, r.yE)(null != (l = t.flags) ? l : 0, d.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return t
  }
  return null
}

function m(t) {
  let {
    allowedFlows: n = ["rpc", "web"]
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, e = a.useMemo(() => x(t), [t]), i = (0, o.t)(null == e ? true : e.id, "AUTHORIZE_REQUEST"), s = n.includes("rpc") && i, r = n.includes("web") && (null == e ? true : e.connectionEntrypointUrl) != null, d = s || r, {
    token: p,
    fetched: m
  } = (0, u.o)(null == e ? true : e.id);
  return {
    fetched: m,
    hasAlreadyLinked: m && null != p,
    canStartAuthorization: d,
    startAuthorization: a.useCallback(() => null == e ? null : s ? (l.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", t => t.socket.application.id === e.id, {}), "rpc") : r ? ((0, c.q)({
      href: e.connectionEntrypointUrl
    }), "web") : null, [s, r, e]),
    connectionApp: e
  }
}