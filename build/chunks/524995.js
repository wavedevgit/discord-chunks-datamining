/** Chunk was on web.js **/
/** chunk id: 524995, original params: e,t,n (module,exports,re quire) **/
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
  Chunk407089 = require("./407089.js"),
  Chunk491662 = require("./491662.js"),
  u = function(e) {
    return e.RPC = "rpc", e.WEB = "web", e
  }({});

function d(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      allowedFlows: u = ["rpc", "web"],
      debug: d = false
    } = n,
    f = (0, l.R)(e),
    p = (0, a.t)(null == f ? true : f.id, "AUTHORIZE_REQUEST"),
    _ = u.includes("rpc") && p,
    m = u.includes("web") && (null == f ? true : f.connectionEntrypointUrl) != null,
    h = _ ? "rpc" : m ? "web" : null,
    g = _ || m,
    {
      token: E,
      fetched: b
    } = (0, c.o)(null != (t = null == f ? true : f.parentId) ? t : null == f ? true : f.id),
    y = b && null != E;
  return {
    fetched: b,
    hasAlreadyLinked: y,
    canStartAuthorization: g,
    startAuthorization: r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      if (null == f) return null;
      if (_) {
        var t;
        return o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === f.id, {}), null == (t = e.onConfirm) || t.call(e), "rpc"
      }
      if (m) {
        let t = f.connectionEntrypointUrl;
        return (0, s.q)({
          href: t,
          onConfirm: () => {
            var n;
            (0, i.Z)(t), null == (n = e.onConfirm) || n.call(e)
          }
        }), "web"
      }
      return null
    }, [_, m, f]),
    connectionApp: f,
    preferredFlow: h,
    debug: d ? {
      isSubscribedToAuthorizeRequest: p,
      oauth2Token: E,
      hasConnectionEntrypointUrl: (null == f ? true : f.connectionEntrypointUrl) != null,
      validFlows: [_ ? "rpc" : null, m ? "web" : null].filter(e => null != e)
    } : true
  }
}