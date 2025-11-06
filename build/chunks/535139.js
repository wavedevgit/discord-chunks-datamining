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
  var n;
  let {
    allowedFlows: e = ["rpc", "web"]
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, i = (0, c.t)(t), u = (0, s.t)(null == i ? true : i.id, "AUTHORIZE_REQUEST"), d = e.includes("rpc") && u, f = e.includes("web") && (null == i ? true : i.connectionEntrypointUrl) != null, x = d || f, {
    token: p,
    fetched: g
  } = (0, r.o)(null != (n = null == i ? true : i.parentId) ? n : null == i ? true : i.id);
  return {
    fetched: g,
    hasAlreadyLinked: g && null != p,
    canStartAuthorization: x,
    startAuthorization: a.useCallback(() => null == i ? null : d ? (o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", t => t.socket.application.id === i.id, {}), "rpc") : f ? ((0, l.q)({
      href: i.connectionEntrypointUrl
    }), "web") : null, [d, f, i]),
    connectionApp: i
  }
}