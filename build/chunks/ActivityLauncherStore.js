/** Chunk was on web.js **/
/** chunk id: 181106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var r, Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

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
let u = {},
  d = {},
  f = 12e4;

function _(e) {
  let {
    applicationId: t,
    activityType: n
  } = e, r = u[t];
  if (null == r || r[n] !== s.OcF.FAILED) returnfalse;
  delete r[n]
}

function p(e, t, n) {
  var r;
  let {
    applicationId: i
  } = n, l = null != (r = u[i]) ? r : {};
  if (l[t] = e, u[i] = l, !__OVERLAY__ && e === s.OcF.FAILED) {
    null != d[i] && d[i].stop();
    let e = new a.V7;
    e.start(f, () => o.Z.dispatch({
      type: "ACTIVITY_LAUNCH_FAIL",
      applicationId: i,
      activityType: t
    })), d[i] = e
  }
}

function h(e) {
  let {
    activityLauncherStates: t
  } = e;
  u = c({}, t)
}

function m(e) {
  return p(s.OcF.COMPLETE, s.mFx.JOIN, e)
}
class g extends(r = Chunk442837.ZP.Store) {
  getState(e, t) {
    let n = u[e];
    return null == n ? true : n[t]
  }
  getStates() {
    return u
  }
}
l(g, "displayName", "ActivityLauncherStore");
let E = new g(Chunk570140.Z, {
  OVERLAY_INITIALIZE: h,
  ACTIVITY_JOIN_LOADING: e => p(s.OcF.LOADING, s.mFx.JOIN, e),
  ACTIVITY_JOIN_FAILED: e => p(s.OcF.FAILED, s.mFx.JOIN, e),
  ACTIVITY_JOIN: m,
  EMBEDDED_ACTIVITY_CLOSE: m,
  ACTIVITY_LAUNCH_FAIL: _
})