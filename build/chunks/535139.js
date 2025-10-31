/** Chunk was on 88742 **/
/** chunk id: 535139, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  F: () => d,
  r: () => u
});
var i, Chunk647438 = require("./647438.js"),
  Chunk906555 = require("./906555.js"),
  Chunk812967 = require("./812967.js"),
  Chunk49012 = require("./49012.js"),
  Chunk491662 = require("./491662.js"),
  Chunk758677 = require("./758677.js"),
  u = ((i = {}).RPC = "rpc", i.WEB = "web", i);

function d(t) {
  let {
    allowedFlows: n = ["rpc", "web"]
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, e = (0, c.t)(t), i = (0, s.t)(null == e ? true : e.id, "AUTHORIZE_REQUEST"), u = n.includes("rpc") && i, d = n.includes("web") && (null == e ? true : e.connectionEntrypointUrl) != null, x = u || d, {
    token: f,
    fetched: p
  } = (0, l.o)(null == e ? true : e.id);
  return {
    fetched: p,
    hasAlreadyLinked: p && null != f,
    canStartAuthorization: x,
    startAuthorization: a.useCallback(() => null == e ? null : u ? (o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", t => t.socket.application.id === e.id, {}), "rpc") : d ? ((0, r.q)({
      href: e.connectionEntrypointUrl
    }), "web") : null, [u, d, e]),
    connectionApp: e
  }
}