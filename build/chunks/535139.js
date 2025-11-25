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
    _ = (0, a.t)(null == f ? true : f.id, "AUTHORIZE_REQUEST"),
    p = u.includes("rpc") && _,
    h = u.includes("web") && (null == f ? true : f.connectionEntrypointUrl) != null,
    m = p ? "rpc" : h ? "web" : null,
    g = p || h,
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
      if (p) {
        var t;
        return o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === f.id, {}), null == (t = e.onConfirm) || t.call(e), "rpc"
      }
      if (h) {
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
    }, [p, h, f]),
    connectionApp: f,
    preferredFlow: m,
    debug: d ? {
      isSubscribedToAuthorizeRequest: _,
      oauth2Token: E,
      hasConnectionEntrypointUrl: (null == f ? true : f.connectionEntrypointUrl) != null,
      validFlows: [p ? "rpc" : null, h ? "web" : null].filter(e => null != e)
    } : true
  }
}