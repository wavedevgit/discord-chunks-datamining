/** Chunk was on web.js **/
/** chunk id: 524995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FG: () => g,
  ro: () => m
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk764011 = require("./764011.js"),
  Chunk782568 = require("./782568.js"),
  Chunk812967 = require("./812967.js"),
  Chunk626135 = require("./626135.js"),
  Chunk49012 = require("./49012.js"),
  Chunk481960 = require("./481960.js"),
  Chunk407089 = require("./407089.js"),
  Chunk491662 = require("./491662.js"),
  Chunk928994 = require("./928994.js"),
  Chunk981631 = require("./981631.js");
let _ = "AUTHORIZE_REQUEST";
var m = function(e) {
  return e.RPC = "rpc", e.WEB = "web", e
}({});
let h = ["rpc", "web"];

function g(e) {
  var t, n, i, a, o, s;
  let l = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      debug: c = false
    } = l,
    f = (0, u.R)(e),
    p = y(f, l),
    _ = null == p ? true : p.preferredFlow,
    m = null != _,
    {
      token: h,
      fetched: g
    } = (0, d.o)(null != (i = null == f ? true : f.parentId) ? i : null == f ? true : f.id),
    E = g && null != h;
  return {
    fetched: g,
    hasAlreadyLinked: E,
    canStartAuthorization: m,
    startAuthorization: r.useCallback(e => null == _ ? null : (_.initiate(e), _.type), [_]),
    connectionApp: f,
    chosenFlow: null != (a = null == _ ? true : _.type) ? a : null,
    debug: c ? {
      isSubscribedToAuthorizeRequest: null != (o = null == p || null == (t = p.context) ? true : t.isSubscribedToAuthorizeRequest) && o,
      oauth2Token: h,
      hasConnectionEntrypointUrl: (null == f ? true : f.connectionEntrypointUrl) != null,
      validFlows: null != (s = null == p || null == (n = p.availableFlows) ? true : n.map(e => e.type)) ? s : []
    } : true
  }
}

function E(e) {
  return o.Z.listenIsSubscribed(e)
}

function b(e, t) {
  var n;
  let u = (0, i.Z)(null != (n = null == t ? true : t.allowedFlows) ? n : h),
    d = (0, f.Z)(E, r.useCallback(() => e.map(e => ({
      application: e,
      isSubscribedToAuthorizeRequest: o.Z.isSubscribed(e.id, _)
    })), [e]));
  return r.useMemo(() => d.map(e => {
    let t = [];
    if (u.includes("rpc") && e.isSubscribedToAuthorizeRequest && t.push({
        type: "rpc",
        initiate(t) {
          var n;
          let r = c.Z.getConfig({
            location: "useStartAuthorize"
          }).enabled;
          o.Z.dispatchToSubscriptions(_, t => t.socket.application.id === e.application.id, {}), null == (n = t.onConfirm) || n.call(t), r && s.default.track(p.rMx.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
            location_stack: t.analyticsLocations,
            application_id: e.application.id,
            flow_type: "rpc"
          })
        }
      }), u.includes("web") && null != e.application.connectionEntrypointUrl) {
      let n = e.application.connectionEntrypointUrl;
      t.push({
        type: "web",
        initiate(t) {
          let r = c.Z.getConfig({
            location: "useStartAuthorize"
          }).enabled;
          (0, l.q)({
            href: n,
            onConfirm: () => {
              var e;
              (0, a.Z)(n), null == t || null == (e = t.onConfirm) || e.call(t)
            }
          }), r && s.default.track(p.rMx.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
            location_stack: t.analyticsLocations,
            application_id: e.application.id,
            flow_type: "web"
          })
        }
      })
    }
    return {
      context: e,
      availableFlows: t,
      preferredFlow: t.length > 0 ? t[0] : null
    }
  }), [d, u])
}

function y(e, t) {
  let n = b(r.useMemo(() => null != e ? [e] : [], [e]), t);
  return n.length > 0 ? n[0] : null
}