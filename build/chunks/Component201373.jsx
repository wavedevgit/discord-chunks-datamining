/** Chunk was on web.js **/
/** chunk id: 201373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk92077 = require("./92077.js"),
  Chunk293066 = require("./293066.js"),
  Chunk775228 = require("./775228.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t, l, u, f) {
  let p = s.A.getInstallationPath(e.id, t),
    _ = null != e.eulaId && !o.A.hasAcceptedEULA(e.eulaId);
  null == p || _ ? (0, i.mMO)(async () => {
    let {
      default: i
    } = await n.e("64676").then(n.bind(n, 867087));
    return n => (0, r.jsx)(i, d(c({}, n), {
      applicationId: e.id,
      branchId: t,
      analyticsLocation: f
    }))
  }) : (0, a.oc)({
    application: e,
    branchId: t,
    buildId: l,
    manifestIds: u,
    installationPath: p,
    analyticsLocation: f
  })
}