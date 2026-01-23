/** Chunk was on web.js **/
/** chunk id: 362490, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RD: () => g,
  U9: () => y,
  _M: () => h
}), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk868714 = require("./868714.js"),
  Chunk975807 = require("./975807.js"),
  Chunk474951 = require("./474951.js"),
  Chunk954571 = require("./954571.js"),
  Chunk307600 = require("./307600.js"),
  Chunk312083 = require("./312083.js"),
  Chunk975460 = require("./975460.js"),
  Chunk704824 = require("./704824.js"),
  Chunk308151 = require("./308151.js"),
  Chunk652215 = require("./652215.js");
let _ = "AUTHORIZE_REQUEST";
var h = function(e) {
  return e.RPC = "rpc", e.WEB = "web", e
}({});
let m = ["rpc", "web"];

function g(e) {
  var t, n, i, a, s, o;
  let l = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      debug: c = false
    } = l,
    f = (0, u.g)(e),
    p = b(f, l),
    _ = null == p ? true : p.preferredFlow,
    h = null != _,
    {
      token: m,
      fetched: g
    } = (0, d.U)(null != (t = null == f ? true : f.parentId) ? t : null == f ? true : f.id),
    E = g && null != m;
  return {
    fetched: g,
    hasAlreadyLinked: E,
    canStartAuthorization: h,
    startAuthorization: r.useCallback(e => null == _ ? null : (_.initiate(e), _.type), [_]),
    connectionApp: f,
    chosenFlow: null != (n = null == _ ? true : _.type) ? n : null,
    debug: c ? {
      isSubscribedToAuthorizeRequest: null != (i = null == p || null == (s = p.context) ? true : s.isSubscribedToAuthorizeRequest) && i,
      oauth2Token: m,
      hasConnectionEntrypointUrl: (null == f ? true : f.connectionEntrypointUrl) != null,
      validFlows: null != (a = null == p || null == (o = p.availableFlows) ? true : o.map(e => e.type)) ? a : []
    } : true
  }
}

function E(e) {
  return s.A.listenIsSubscribed(e)
}

function y(e, t) {
  var n;
  let u = (0, i.A)(null != (n = null == t ? true : t.allowedFlows) ? n : m),
    d = (0, f.A)(E, r.useCallback(() => e.map(e => ({
      application: e,
      isSubscribedToAuthorizeRequest: s.A.isSubscribed(e.id, _)
    })), [e]));
  return r.useMemo(() => d.map(e => {
    let t = [];
    if (u.includes("rpc") && e.isSubscribedToAuthorizeRequest && t.push({
        type: "rpc",
        initiate(t) {
          var n;
          let r = c.A.getConfig({
            location: "useStartAuthorize"
          }).enabled;
          s.A.dispatchToSubscriptions(_, t => t.socket.application.id === e.application.id, {}), null == (n = t.onConfirm) || n.call(t), r && o.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
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
          let r = c.A.getConfig({
            location: "useStartAuthorize"
          }).enabled;
          (0, l.h)({
            href: n,
            onConfirm: () => {
              var e;
              (0, a.A)(n), null == t || null == (e = t.onConfirm) || e.call(t)
            }
          }), r && o.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
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

function b(e, t) {
  let n = y(r.useMemo(() => null != e ? [e] : [], [e]), t);
  return n.length > 0 ? n[0] : null
}