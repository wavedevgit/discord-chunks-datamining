/** Chunk was on 94709 **/
/** chunk id: 535139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => d,
  r: () => u
});
var r, Chunk647438 = require("./647438.js"),
  Chunk906555 = require("./906555.js"),
  Chunk812967 = require("./812967.js"),
  Chunk49012 = require("./49012.js"),
  Chunk491662 = require("./491662.js"),
  Chunk758677 = require("./758677.js"),
  u = ((r = {}).RPC = "rpc", r.WEB = "web", r);

function d(e) {
  var t;
  let {
    allowedFlows: n = ["rpc", "web"]
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, r = (0, c.t)(e), u = (0, l.t)(null == r ? true : r.id, "AUTHORIZE_REQUEST"), d = n.includes("rpc") && u, p = n.includes("web") && (null == r ? true : r.connectionEntrypointUrl) != null, h = d || p, {
    token: f,
    fetched: g
  } = (0, s.o)(null != (t = null == r ? true : r.parentId) ? t : null == r ? true : r.id);
  return {
    fetched: g,
    hasAlreadyLinked: g && null != f,
    canStartAuthorization: h,
    startAuthorization: i.useCallback(() => null == r ? null : d ? (o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === r.id, {}), "rpc") : p ? ((0, a.q)({
      href: r.connectionEntrypointUrl
    }), "web") : null, [d, p, r]),
    connectionApp: r
  }
}