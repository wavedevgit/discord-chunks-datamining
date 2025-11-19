/** Chunk was on web.js **/
/** chunk id: 535139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => d,
  r: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk782568 = require("./782568.js"),
  Chunk906555 = require("./906555.js"),
  Chunk812967 = require("./812967.js"),
  Chunk49012 = require("./49012.js"),
  Chunk491662 = require("./491662.js"),
  Chunk758677 = require("./758677.js"),
  u = function(e) {
    return e.RPC = "rpc", e.WEB = "web", e
  }({});

function d(e) {
  var t;
  let {
    allowedFlows: n = ["rpc", "web"]
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, u = (0, c.t)(e), d = (0, a.t)(null == u ? true : u.id, "AUTHORIZE_REQUEST"), f = n.includes("rpc") && d, _ = n.includes("web") && (null == u ? true : u.connectionEntrypointUrl) != null, p = f ? "rpc" : _ ? "web" : null, h = f || _, {
    token: m,
    fetched: g
  } = (0, l.o)(null != (t = null == u ? true : u.parentId) ? t : null == u ? true : u.id), E = g && null != m;
  return {
    fetched: g,
    hasAlreadyLinked: E,
    canStartAuthorization: h,
    startAuthorization: r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      if (null == u) return null;
      if (f) {
        var t;
        return o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === u.id, {}), null == (t = e.onConfirm) || t.call(e), "rpc"
      }
      if (_) {
        let t = u.connectionEntrypointUrl;
        return (0, s.q)({
          href: t,
          onConfirm: () => {
            var n;
            (0, i.Z)(t), null == (n = e.onConfirm) || n.call(e)
          }
        }), "web"
      }
      return null
    }, [f, _, u]),
    connectionApp: u,
    preferredFlow: p
  }
}