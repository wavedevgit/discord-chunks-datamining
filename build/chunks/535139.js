/** Chunk was on web.js **/
/** chunk id: 535139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  r: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk906555 = require("./906555.js"),
  Chunk812967 = require("./812967.js"),
  Chunk49012 = require("./49012.js"),
  Chunk491662 = require("./491662.js"),
  Chunk758677 = require("./758677.js"),
  c = function(e) {
    return e.RPC = "rpc", e.WEB = "web", e
  }({});

function u(e) {
  var t;
  let {
    allowedFlows: n = ["rpc", "web"]
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, c = (0, l.t)(e), u = (0, i.t)(null == c ? true : c.id, "AUTHORIZE_REQUEST"), d = n.includes("rpc") && u, f = n.includes("web") && (null == c ? true : c.connectionEntrypointUrl) != null, _ = d ? "rpc" : f ? "web" : null, p = d || f, {
    token: h,
    fetched: m
  } = (0, s.o)(null != (t = null == c ? true : c.parentId) ? t : null == c ? true : c.id), g = m && null != h;
  return {
    fetched: m,
    hasAlreadyLinked: g,
    canStartAuthorization: p,
    startAuthorization: r.useCallback(() => null == c ? null : d ? (a.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === c.id, {}), "rpc") : f ? ((0, o.q)({
      href: c.connectionEntrypointUrl
    }), "web") : null, [d, f, c]),
    connectionApp: c,
    preferredFlow: _
  }
}