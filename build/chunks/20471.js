/** Chunk was on 93886 **/
/** chunk id: 20471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FG: () => _,
  ju: () => f,
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

function f(e) {
  var t, n, i, r, a;
  if (null == e) return null;
  if ((0, s.yE)(null != (t = e.flags) ? t : 0, d.udG.SOCIAL_LAYER_INTEGRATION) || (0, s.yE)(null != (n = e.flags) ? n : 0, d.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return e;
  for (let t of null != (i = e.linkedGames) ? i : []) {
    let e = l.Z.getApplication(t.id);
    if (null != e && ((0, s.yE)(null != (r = e.flags) ? r : 0, d.udG.SOCIAL_LAYER_INTEGRATION) || (0, s.yE)(null != (a = e.flags) ? a : 0, d.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return e
  }
  return null
}

function _(e) {
  let {
    allowedFlows: t = ["rpc", "web"]
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = r.useMemo(() => f(e), [e]), i = (0, o.t)(null == n ? true : n.id, "AUTHORIZE_REQUEST"), l = t.includes("rpc") && i, s = t.includes("web") && (null == n ? true : n.connectionEntrypointUrl) != null, d = l || s, {
    token: p,
    fetched: _
  } = (0, c.o)(null == n ? true : n.id);
  return {
    fetched: _,
    hasAlreadyLinked: _ && null != p,
    canStartAuthorization: d,
    startAuthorization: r.useCallback(() => null == n ? null : l ? (a.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === n.id, {}), "rpc") : s ? ((0, u.q)({
      href: n.connectionEntrypointUrl
    }), "web") : null, [l, s, n]),
    connectionApp: n
  }
}