/** Chunk was on web.js **/
/** chunk id: 181106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk293273 = require("./293273.js"),
  Chunk885110 = require("./885110.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = {},
  p = {},
  _ = 12e4,
  m = 15e3;

function h(e) {
  let {
    applicationId: t,
    activityType: n
  } = e, r = f[t];
  if (null == r) returnfalse;
  delete r[n]
}

function g(e, t, n) {
  null != p[e] && p[e].stop();
  let r = new a.V7;
  r.start(n, () => o.Z.dispatch({
    type: "ACTIVITY_LAUNCH_FAIL",
    applicationId: e,
    activityType: t
  })), p[e] = r
}

function E(e, t, n) {
  var r, i;
  let {
    applicationId: a,
    remotePartyId: o
  } = n;
  if (e === c.OcF.COMPLETE) {
    null == (r = f[a]) || delete r[t], null != p[a] && (p[a].stop(), delete p[a]);
    return
  }
  let s = null != (i = f[a]) ? i : {};
  s[t] = {
    state: e,
    remotePartyId: o
  }, f[a] = s, __OVERLAY__ || e !== c.OcF.FAILED ? e === c.OcF.LOADING && null != o && g(a, t, m) : g(a, t, _)
}

function b(e) {
  let {
    activityLauncherStates: t
  } = e;
  f = d({}, t)
}

function y(e) {
  return E(c.OcF.COMPLETE, c.mFx.JOIN, e)
}

function O() {
  let e = Object.entries(f).map(e => {
      var t;
      let [n, r] = e;
      return {
        applicationId: n,
        remotePartyId: null == (t = r[c.mFx.JOIN]) ? true : t.remotePartyId
      }
    }).filter(e => {
      let {
        remotePartyId: t
      } = e;
      return null != t
    }),
    t = false;
  return e.forEach(e => {
    var n, r;
    let {
      applicationId: i,
      remotePartyId: a
    } = e, o = s.Z.getApplicationActivity(i), u = l.Z.getApplicationActivity(i);
    ((null == o || null == (n = o.party) ? true : n.id) === a || (null == u || null == (r = u.party) ? true : r.id) === a) && (E(c.OcF.COMPLETE, c.mFx.JOIN, {
      applicationId: i,
      remotePartyId: a
    }), t = true)
  }), t
}
class v extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([s.Z, l.Z], O)
  }
  getState(e, t) {
    var n;
    let r = f[e];
    return null == r || null == (n = r[t]) ? true : n.state
  }
  getStates() {
    return f
  }
}
u(v, "displayName", "ActivityLauncherStore");
let S = new v(Chunk570140.Z, {
  OVERLAY_INITIALIZE: b,
  ACTIVITY_JOIN_LOADING: e => E(c.OcF.LOADING, c.mFx.JOIN, e),
  ACTIVITY_JOIN_FAILED: e => E(c.OcF.FAILED, c.mFx.JOIN, e),
  ACTIVITY_JOIN: y,
  EMBEDDED_ACTIVITY_CLOSE: y,
  ACTIVITY_LAUNCH_FAIL: h
})