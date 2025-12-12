/** Chunk was on web.js **/
/** chunk id: 524995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => _,
  r: () => p
});
var Chunk473749 = require("./473749.js"),
  Chunk782568 = require("./782568.js"),
  Chunk906555 = require("./906555.js"),
  Chunk812967 = require("./812967.js"),
  Chunk626135 = require("./626135.js"),
  Chunk49012 = require("./49012.js"),
  Chunk481960 = require("./481960.js"),
  Chunk407089 = require("./407089.js"),
  Chunk491662 = require("./491662.js"),
  Chunk981631 = require("./981631.js"),
  p = function(e) {
    return e.RPC = "rpc", e.WEB = "web", e
  }({});

function _(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      allowedFlows: p = ["rpc", "web"],
      debug: _ = false
    } = n,
    m = (0, u.R)(e),
    h = (0, a.t)(null == m ? true : m.id, "AUTHORIZE_REQUEST"),
    g = p.includes("rpc") && h,
    E = p.includes("web") && (null == m ? true : m.connectionEntrypointUrl) != null,
    b = g ? "rpc" : E ? "web" : null,
    y = g || E,
    {
      token: O,
      fetched: v
    } = (0, d.o)(null != (t = null == m ? true : m.parentId) ? t : null == m ? true : m.id),
    S = v && null != O;
  return {
    fetched: v,
    hasAlreadyLinked: S,
    canStartAuthorization: y,
    startAuthorization: r.useCallback(e => {
      if (null == m) return null;
      let t = c.Z.getConfig({
        location: "useStartAuthorize"
      }).enabled;
      if (g) {
        var n;
        return o.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === m.id, {}), null == (n = e.onConfirm) || n.call(e), t && s.default.track(f.rMx.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
          location_stack: e.analyticsLocations,
          application_id: m.id,
          flow_type: "rpc"
        }), "rpc"
      }
      if (E) {
        let n = m.connectionEntrypointUrl;
        return (0, l.q)({
          href: n,
          onConfirm: () => {
            var t;
            (0, i.Z)(n), null == (t = e.onConfirm) || t.call(e)
          }
        }), t && s.default.track(f.rMx.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
          location_stack: e.analyticsLocations,
          application_id: m.id,
          flow_type: "web"
        }), "web"
      }
      return null
    }, [g, E, m]),
    connectionApp: m,
    preferredFlow: b,
    debug: _ ? {
      isSubscribedToAuthorizeRequest: h,
      oauth2Token: O,
      hasConnectionEntrypointUrl: (null == m ? true : m.connectionEntrypointUrl) != null,
      validFlows: [g ? "rpc" : null, E ? "web" : null].filter(e => null != e)
    } : true
  }
}